
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
      setupRealtimeSubscriptions();
    }
  }, [user]);

  const setupRealtimeSubscriptions = () => {
    if (!user) return;

    console.log('Setting up real-time subscriptions for buddy connections');

    // Listen for connection changes
    const connectionsChannel = supabase
      .channel('buddy_connections_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'buddy_connections',
          filter: `user_id=eq.${user.id}`
        },
        (payload) => {
          console.log('Connection change detected:', payload);
          fetchConnections();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(connectionsChannel);
    };
  };

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

  const handleConnectBuddy = async (buddy: BuddyProfile, message: string = '') => {
    if (!user) {
      toast({
        title: "Please log in",
        description: "You need to be logged in to connect with buddies.",
        variant: "destructive",
      });
      return;
    }

    // Check if already connected or has pending request
    const existingConnection = connections.find(c => c.buddy_id === buddy.id);
    if (existingConnection) {
      toast({
        title: "Request already sent",
        description: `You already have a ${existingConnection.status} connection request with ${buddy.name}.`,
      });
      return;
    }

    try {
      const { error } = await supabase
        .from('buddy_connections')
        .insert([
          { 
            user_id: user.id, 
            buddy_id: buddy.id, 
            status: 'pending',
            message: message || `Hi ${buddy.name}, I'd like to connect with you for cultural guidance!`,
            requested_at: new Date().toISOString()
          }
        ]);

      if (error) {
        console.error('Error creating connection request:', error);
        toast({
          title: "Error",
          description: "Failed to send connection request. Please try again.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Request sent!",
          description: `Your connection request has been sent to ${buddy.name}. They will be notified to accept or decline.`,
        });
        fetchConnections();
      }
    } catch (error) {
      console.error('Error creating connection request:', error);
      toast({
        title: "Error",
        description: "Failed to send connection request. Please try again.",
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
