
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";

interface BuddyRequest {
  id: string;
  user_id: string;
  user_name: string;
  user_avatar: string;
  user_location: string;
  message: string;
  status: 'pending' | 'accepted' | 'declined';
  requested_at: string;
  created_at?: string;
}

export const useBuddyRequests = () => {
  const [requests, setRequests] = useState<BuddyRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (user) {
      fetchRequests();
      setupRealtimeSubscriptions();
    }
  }, [user]);

  const setupRealtimeSubscriptions = () => {
    if (!user) return;

    console.log('Setting up real-time subscriptions for buddy requests');

    // Listen for new requests
    const requestsChannel = supabase
      .channel('buddy_requests_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'buddy_connections'
        },
        (payload) => {
          console.log('Request change detected:', payload);
          fetchRequests();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(requestsChannel);
    };
  };

  const fetchRequests = async () => {
    if (!user) return;

    try {
      // Get buddy profile for current user
      const { data: buddyProfile } = await supabase
        .from('buddy_profiles')
        .select('id')
        .eq('user_id', user.id)
        .single();

      if (!buddyProfile) {
        setLoading(false);
        return;
      }

      // Get connection requests sent to this buddy
      const { data: connectionsData, error } = await supabase
        .from('buddy_connections')
        .select('*')
        .eq('buddy_id', buddyProfile.id)
        .order('requested_at', { ascending: false });

      if (error) {
        console.error('Error fetching requests:', error);
        toast({
          title: "Error",
          description: "Failed to load requests",
          variant: "destructive",
        });
        return;
      }

      if (!connectionsData || connectionsData.length === 0) {
        setRequests([]);
        setLoading(false);
        return;
      }

      // For each request, get user profile data
      const requestsWithDetails = await Promise.all(
        connectionsData.map(async (conn) => {
          // Get user profile
          const { data: userProfile } = await supabase
            .from('profiles')
            .select('full_name, avatar_url')
            .eq('id', conn.user_id)
            .single();

          return {
            id: conn.id,
            user_id: conn.user_id,
            user_name: userProfile?.full_name || 'Unknown User',
            user_avatar: userProfile?.avatar_url || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
            user_location: 'Ghana', // Default location
            message: conn.message || 'Hi! I\'d like to connect with you for cultural guidance.',
            status: conn.status,
            requested_at: conn.requested_at,
            created_at: conn.created_at
          };
        })
      );

      setRequests(requestsWithDetails);
    } catch (error) {
      console.error('Error fetching requests:', error);
      toast({
        title: "Error",
        description: "Failed to load requests",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleAcceptRequest = async (requestId: string) => {
    try {
      const { error } = await supabase
        .from('buddy_connections')
        .update({ 
          status: 'accepted',
          created_at: new Date().toISOString()
        })
        .eq('id', requestId);

      if (error) {
        console.error('Error accepting request:', error);
        toast({
          title: "Error",
          description: "Failed to accept request",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Request Accepted",
        description: "You can now start chatting with your new buddy!",
      });
      
      fetchRequests();
    } catch (error) {
      console.error('Error accepting request:', error);
      toast({
        title: "Error",
        description: "Failed to accept request",
        variant: "destructive",
      });
    }
  };

  const handleDeclineRequest = async (requestId: string) => {
    try {
      const { error } = await supabase
        .from('buddy_connections')
        .update({ status: 'declined' })
        .eq('id', requestId);

      if (error) {
        console.error('Error declining request:', error);
        toast({
          title: "Error",
          description: "Failed to decline request",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Request Declined",
        description: "The request has been declined.",
      });
      
      fetchRequests();
    } catch (error) {
      console.error('Error declining request:', error);
      toast({
        title: "Error",
        description: "Failed to decline request",
        variant: "destructive",
      });
    }
  };

  return {
    requests,
    loading,
    handleAcceptRequest,
    handleDeclineRequest,
    fetchRequests
  };
};
