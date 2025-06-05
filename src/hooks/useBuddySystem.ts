
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { BuddyProfile, Connection } from "@/types/buddy-system";

export const useBuddySystem = () => {
  const [buddies, setBuddies] = useState<BuddyProfile[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const { user } = useAuth();

  useEffect(() => {
    fetchBuddies();
    if (user) {
      fetchConnections();
    }
  }, [user]);

  const fetchBuddies = async () => {
    try {
      const { data, error } = await supabase
        .from('buddy_profiles')
        .select('*')
        .eq('is_available', true);

      if (error) {
        console.error('Error fetching buddies:', error);
        toast({
          title: "Error",
          description: "Failed to load buddy profiles. Please try again.",
          variant: "destructive",
        });
      } else {
        setBuddies(data || []);
      }
    } catch (error) {
      console.error('Error fetching buddies:', error);
    }
    setLoading(false);
  };

  const fetchConnections = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('buddy_connections')
        .select('*')
        .eq('user_id', user.id);

      if (error) {
        console.error('Error fetching connections:', error);
      } else {
        setConnections(data || []);
      }
    } catch (error) {
      console.error('Error fetching connections:', error);
    }
  };

  const handleConnectBuddy = async (buddy: BuddyProfile) => {
    if (!user) {
      toast({
        title: "Please log in",
        description: "You need to be logged in to connect with buddies.",
        variant: "destructive",
      });
      return;
    }

    // Check if already connected
    const existingConnection = connections.find(c => c.buddy_id === buddy.id);
    if (existingConnection) {
      toast({
        title: "Already connected",
        description: `You already have a ${existingConnection.status} connection with ${buddy.name}.`,
      });
      return;
    }

    try {
      const { error } = await supabase
        .from('buddy_connections')
        .insert([
          { user_id: user.id, buddy_id: buddy.id, status: 'accepted' }
        ]);

      if (error) {
        console.error('Error creating connection:', error);
        toast({
          title: "Error",
          description: "Failed to connect with buddy. Please try again.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Connection successful!",
          description: `You are now connected with ${buddy.name}. You can start chatting!`,
        });
        fetchConnections();
      }
    } catch (error) {
      console.error('Error creating connection:', error);
      toast({
        title: "Error",
        description: "Failed to connect with buddy. Please try again.",
        variant: "destructive",
      });
    }
  };

  const getConnectionStatus = (buddyId: string) => {
    const connection = connections.find(c => c.buddy_id === buddyId);
    return connection?.status || null;
  };

  return {
    buddies,
    connections,
    loading,
    handleConnectBuddy,
    getConnectionStatus
  };
};
