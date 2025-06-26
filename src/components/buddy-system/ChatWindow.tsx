
import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, X, Phone, Video } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { BuddyProfile } from "@/types/buddy-system";
import { useRealtimeChat } from "@/hooks/useRealtimeChat";

interface ChatWindowProps {
  buddy: BuddyProfile;
  onClose: () => void;
}

export const ChatWindow = ({ buddy, onClose }: ChatWindowProps) => {
  const [newMessage, setNewMessage] = useState("");
  const { user } = useAuth();
  const { messages, loading, sendMessage } = useRealtimeChat(buddy.user_id);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to bottom when new messages arrive
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;

    console.log('Attempting to send message:', newMessage);
    const success = await sendMessage(newMessage);
    if (success) {
      setNewMessage("");
      console.log('Message sent successfully');
    } else {
      console.error('Failed to send message');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return "Today";
    } else if (date.toDateString() === yesterday.toDateString()) {
      return "Yesterday";
    } else {
      return date.toLocaleDateString();
    }
  };

  // Group messages by date
  const groupedMessages = messages.reduce((groups: any, message) => {
    const date = formatDate(message.sent_at);
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(message);
    return groups;
  }, {});

  return (
    <Card className="fixed bottom-4 right-4 w-96 h-[500px] shadow-lg z-50 bg-white border-l-4 border-l-primary flex flex-col">
      <CardHeader className="pb-2 flex-shrink-0">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <img 
              src={buddy.avatar_url} 
              alt={buddy.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div>
              <div>{buddy.name}</div>
              <div className="text-xs text-gray-500 font-normal">{buddy.location}</div>
            </div>
          </CardTitle>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="sm">
              <Phone size={16} />
            </Button>
            <Button variant="ghost" size="sm">
              <Video size={16} />
            </Button>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X size={16} />
            </Button>
          </div>
        </div>
        <div className="text-sm text-green-600 flex items-center gap-1">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          Online now
        </div>
      </CardHeader>
      
      <CardContent className="p-0 flex flex-col flex-1 min-h-0">
        <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
          <div className="space-y-4">
            {Object.keys(groupedMessages).length === 0 ? (
              <div className="text-center text-gray-500 py-8">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  🇬🇭
                </div>
                <p className="font-medium">Start a conversation with {buddy.name}!</p>
                <p className="text-sm mt-2">Ask about Ghanaian culture, local customs, or anything you'd like to know.</p>
                <div className="mt-3 p-3 bg-blue-50 rounded-lg text-left">
                  <p className="text-sm text-blue-700 font-medium mb-1">Conversation starters:</p>
                  <ul className="text-xs text-blue-600 space-y-1">
                    <li>• "What's the best local food I should try?"</li>
                    <li>• "Can you teach me some basic Twi phrases?"</li>
                    <li>• "What should I know about local customs?"</li>
                  </ul>
                </div>
              </div>
            ) : (
              Object.entries(groupedMessages).map(([date, msgs]: [string, any]) => (
                <div key={date}>
                  <div className="text-center my-4">
                    <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
                      {date}
                    </span>
                  </div>
                  <div className="space-y-3">
                    {msgs.map((message: any) => (
                      <div
                        key={message.id}
                        className={`flex ${message.sender_id === user?.id ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[80%] rounded-lg px-3 py-2 ${
                            message.sender_id === user?.id
                              ? 'bg-orange-500 text-white ml-4'
                              : 'bg-white text-gray-900 border border-gray-200 mr-4'
                          }`}
                        >
                          <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                          <p className={`text-xs mt-1 ${
                            message.sender_id === user?.id ? 'text-white/70' : 'text-gray-500'
                          }`}>
                            {formatTime(message.sent_at)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>
        
        <div className="p-4 border-t bg-gray-50 flex-shrink-0">
          <div className="flex gap-2">
            <Input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              disabled={loading}
              className="flex-1 bg-white"
            />
            <Button
              onClick={handleSendMessage}
              disabled={loading || !newMessage.trim()}
              size="sm"
              className="ghana-gradient"
            >
              <Send size={16} />
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Press Enter to send • Shift+Enter for new line
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
