
import { useState, useEffect, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { Message } from "@/types/buddy-system";

export const useRealtimeChat = (buddyUserId: string) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();
  const channelRef = useRef<any>(null);

  useEffect(() => {
    if (user && buddyUserId) {
      fetchMessages();
      setupRealtimeSubscription();
    }

    return () => {
      if (channelRef.current) {
        supabase.removeChannel(channelRef.current);
      }
    };
  }, [user, buddyUserId]);

  const fetchMessages = async () => {
    if (!user) return;

    try {
      console.log('Fetching messages between:', user.id, 'and', buddyUserId);
      
      const { data, error } = await supabase
        .from('messages')
        .select('*')
        .or(`and(sender_id.eq.${user.id},recipient_id.eq.${buddyUserId}),and(sender_id.eq.${buddyUserId},recipient_id.eq.${user.id})`)
        .order('sent_at', { ascending: true });

      if (error) {
        console.error('Error fetching messages:', error);
        toast({
          title: "Error",
          description: "Failed to load chat history.",
          variant: "destructive",
        });
      } else {
        const convertedMessages: Message[] = (data || []).map(msg => ({
          id: msg.id.toString(),
          content: msg.content,
          sender_id: msg.sender_id,
          recipient_id: msg.recipient_id,
          sent_at: msg.sent_at
        }));
        setMessages(convertedMessages);
        console.log('Fetched messages:', convertedMessages);
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const setupRealtimeSubscription = () => {
    if (!user) return;

    // Create a unique channel name for this conversation
    const channelName = `chat_${[user.id, buddyUserId].sort().join('_')}`;
    
    console.log('Setting up realtime subscription for channel:', channelName);
    
    channelRef.current = supabase
      .channel(channelName)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'messages'
        },
        (payload) => {
          console.log('New message received:', payload);
          const dbMessage = payload.new as any;
          
          // Only process messages that are part of this conversation
          if ((dbMessage.sender_id === user.id && dbMessage.recipient_id === buddyUserId) ||
              (dbMessage.sender_id === buddyUserId && dbMessage.recipient_id === user.id)) {
            
            const newMessage: Message = {
              id: dbMessage.id.toString(),
              content: dbMessage.content,
              sender_id: dbMessage.sender_id,
              recipient_id: dbMessage.recipient_id,
              sent_at: dbMessage.sent_at
            };
            
            // Only add message if it's not already in the list (prevent duplicates)
            setMessages(prev => {
              const exists = prev.some(msg => msg.id === newMessage.id);
              if (exists) return prev;
              console.log('Adding new message to state:', newMessage);
              return [...prev, newMessage];
            });
          }
        }
      )
      .subscribe((status) => {
        console.log('Realtime subscription status:', status);
        if (status === 'SUBSCRIBED') {
          console.log('Successfully subscribed to chat updates');
        } else if (status === 'CHANNEL_ERROR') {
          console.error('Error subscribing to chat updates');
        }
      });
  };

  const sendMessage = async (content: string) => {
    if (!user || !content.trim()) {
      console.log('Cannot send message: missing user or content');
      return false;
    }

    setLoading(true);
    try {
      console.log('Sending message:', { 
        content: content.trim(), 
        sender_id: user.id, 
        recipient_id: buddyUserId 
      });
      
      const { data, error } = await supabase
        .from('messages')
        .insert([
          {
            content: content.trim(),
            sender_id: user.id,
            recipient_id: buddyUserId
          }
        ])
        .select()
        .single();

      if (error) {
        console.error('Error sending message:', error);
        toast({
          title: "Error",
          description: `Failed to send message: ${error.message}`,
          variant: "destructive",
        });
        return false;
      }

      console.log('Message sent successfully:', data);
      return true;
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    messages,
    loading,
    sendMessage
  };
};
