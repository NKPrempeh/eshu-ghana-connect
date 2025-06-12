
import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, X } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { BuddyProfile } from "@/types/buddy-system";

interface Message {
  id: string;
  content: string;
  sender_id: string;
  recipient_id: string;
  sent_at: string;
}

interface ChatWindowProps {
  buddy: BuddyProfile;
  onClose: () => void;
}

export const ChatWindow = ({ buddy, onClose }: ChatWindowProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (user) {
      fetchMessages();
      subscribeToMessages();
    }
  }, [user, buddy.id]);

  useEffect(() => {
    // Scroll to bottom when new messages arrive
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const fetchMessages = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('messages')
        .select('*')
        .or(`and(sender_id.eq.${user.id},recipient_id.eq.${buddy.user_id}),and(sender_id.eq.${buddy.user_id},recipient_id.eq.${user.id})`)
        .order('sent_at', { ascending: true });

      if (error) {
        console.error('Error fetching messages:', error);
      } else {
        setMessages(data || []);
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const subscribeToMessages = () => {
    if (!user) return;

    const channel = supabase
      .channel('chat-messages')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'messages',
          filter: `or(and(sender_id.eq.${user.id},recipient_id.eq.${buddy.user_id}),and(sender_id.eq.${buddy.user_id},recipient_id.eq.${user.id}))`
        },
        (payload) => {
          const newMessage = payload.new as Message;
          setMessages(prev => [...prev, newMessage]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  };

  const sendMessage = async () => {
    if (!user || !newMessage.trim()) return;

    setLoading(true);
    try {
      const { error } = await supabase
        .from('messages')
        .insert([
          {
            content: newMessage.trim(),
            sender_id: user.id,
            recipient_id: buddy.user_id
          }
        ]);

      if (error) {
        console.error('Error sending message:', error);
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive",
        });
      } else {
        setNewMessage("");
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
    setLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <Card className="fixed bottom-4 right-4 w-96 h-96 shadow-lg z-50 bg-white border-l-4 border-l-primary">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <img 
              src={buddy.avatar_url} 
              alt={buddy.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            {buddy.name}
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X size={16} />
          </Button>
        </div>
        <div className="text-sm text-green-600 flex items-center gap-1">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          Online
        </div>
      </CardHeader>
      <CardContent className="p-0 flex flex-col h-80">
        <ScrollArea ref={scrollAreaRef} className="flex-1 p-4">
          <div className="space-y-3">
            {messages.length === 0 ? (
              <div className="text-center text-gray-500 py-8">
                <p>Start a conversation with {buddy.name}!</p>
                <p className="text-sm mt-2">Ask about Ghanaian culture, local customs, or anything you'd like to know.</p>
              </div>
            ) : (
              messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender_id === user?.id ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg px-3 py-2 ${
                      message.sender_id === user?.id
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <p className={`text-xs mt-1 ${
                      message.sender_id === user?.id ? 'text-white/70' : 'text-gray-500'
                    }`}>
                      {formatTime(message.sent_at)}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </ScrollArea>
        <div className="p-4 border-t">
          <div className="flex gap-2">
            <Input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              disabled={loading}
              className="flex-1"
            />
            <Button
              onClick={sendMessage}
              disabled={loading || !newMessage.trim()}
              size="sm"
              className="ghana-gradient"
            >
              <Send size={16} />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
