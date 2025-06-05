
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageCircle, MapPin, Star, Users, Search, Filter, Send } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface BuddyProfile {
  id: string;
  name: string;
  location: string;
  bio: string;
  specialties: string[];
  languages: string[];
  avatar_url: string;
  rating: number;
  review_count: number;
  response_time: string;
}

interface Message {
  id: string;
  content: string;
  sender_id: string;
  sent_at: string;
}

interface Connection {
  id: string;
  buddy_id: string;
  status: string;
}

const BuddySystem = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [buddies, setBuddies] = useState<BuddyProfile[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);
  const [selectedBuddy, setSelectedBuddy] = useState<BuddyProfile | null>(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
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
    const { data, error } = await supabase
      .from('buddy_profiles')
      .select('*')
      .eq('is_available', true);

    if (error) {
      console.error('Error fetching buddies:', error);
    } else {
      setBuddies(data || []);
    }
    setLoading(false);
  };

  const fetchConnections = async () => {
    if (!user) return;

    const { data, error } = await supabase
      .from('buddy_connections')
      .select('*')
      .eq('user_id', user.id);

    if (error) {
      console.error('Error fetching connections:', error);
    } else {
      setConnections(data || []);
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
  };

  const openChat = async (buddy: BuddyProfile) => {
    const connection = connections.find(c => c.buddy_id === buddy.id && c.status === 'accepted');
    if (!connection) {
      toast({
        title: "Not connected",
        description: "You need to connect with this buddy first to start chatting.",
        variant: "destructive",
      });
      return;
    }

    setSelectedBuddy(buddy);
    setChatOpen(true);
    
    // Generate some sample messages for demo
    const sampleMessages: Message[] = [
      {
        id: '1',
        content: `Hi! Welcome to Ghana! I'm ${buddy.name} and I'm excited to help you settle in. How can I assist you today?`,
        sender_id: buddy.id,
        sent_at: new Date(Date.now() - 3600000).toISOString()
      },
      {
        id: '2',
        content: "Hello! Thank you so much for connecting with me. I just arrived in Ghana and I'm looking for advice on finding good accommodation in Accra.",
        sender_id: user?.id || '',
        sent_at: new Date(Date.now() - 3000000).toISOString()
      },
      {
        id: '3',
        content: "Great question! I'd be happy to help you with accommodation. What's your budget range and which area of Accra are you considering? I can recommend some great neighborhoods for expats.",
        sender_id: buddy.id,
        sent_at: new Date(Date.now() - 2400000).toISOString()
      }
    ];
    setMessages(sampleMessages);
  };

  const sendMessage = async () => {
    if (!newMessage.trim() || !selectedBuddy || !user) return;

    const newMsg: Message = {
      id: Date.now().toString(),
      content: newMessage,
      sender_id: user.id,
      sent_at: new Date().toISOString()
    };

    setMessages(prev => [...prev, newMsg]);
    setNewMessage("");

    // Simulate buddy response after a short delay
    setTimeout(() => {
      const responses = [
        "That's a great point! Let me think about the best way to help you with that.",
        "I understand your concern. Here's what I would recommend...",
        "That's very common for newcomers. Don't worry, I'll guide you through it!",
        "Excellent question! I faced the same thing when I first moved to this area.",
        "Let me share some local insights that might be helpful for your situation."
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const buddyResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: randomResponse,
        sender_id: selectedBuddy.id,
        sent_at: new Date().toISOString()
      };
      
      setMessages(prev => [...prev, buddyResponse]);
    }, 1000 + Math.random() * 2000);
  };

  const getConnectionStatus = (buddyId: string) => {
    const connection = connections.find(c => c.buddy_id === buddyId);
    return connection?.status || null;
  };

  const filteredBuddies = buddies.filter(buddy =>
    buddy.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    buddy.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    buddy.specialties.some(specialty => 
      specialty.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Buddy System
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with local Ghanaians who will guide you through your integration journey. 
            Get personalized help from people who know Ghana best.
          </p>
        </div>

        {/* How It Works */}
        <Card className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="text-primary" size={24} />
              How the Buddy System Works
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3">
                  1
                </div>
                <h3 className="font-medium mb-2">Browse Buddies</h3>
                <p className="text-sm text-gray-600">Find buddies based on location, specialties, and interests</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3">
                  2
                </div>
                <h3 className="font-medium mb-2">Connect & Chat</h3>
                <p className="text-sm text-gray-600">Send a connection request and start chatting</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3">
                  3
                </div>
                <h3 className="font-medium mb-2">Get Local Help</h3>
                <p className="text-sm text-gray-600">Receive personalized guidance for your new life in Ghana</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              placeholder="Search by name, location, or specialty..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter size={20} />
            Filters
          </Button>
        </div>

        {/* Buddies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredBuddies.map((buddy) => {
            const connectionStatus = getConnectionStatus(buddy.id);
            const isConnected = connectionStatus === 'accepted';
            
            return (
              <Card key={buddy.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={buddy.avatar_url} alt={buddy.name} />
                      <AvatarFallback>{buddy.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{buddy.name}</CardTitle>
                        <div className="flex items-center gap-1">
                          <Star className="text-yellow-400 fill-current" size={16} />
                          <span className="text-sm font-medium">{buddy.rating}</span>
                          <span className="text-sm text-gray-500">({buddy.review_count})</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 mb-2">
                        <MapPin size={16} />
                        <span>{buddy.location}</span>
                      </div>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {buddy.specialties.map((specialty) => (
                          <Badge key={specialty} variant="secondary" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{buddy.bio}</p>
                  <div className="space-y-2 mb-4">
                    <div className="text-sm">
                      <span className="font-medium">Languages: </span>
                      <span className="text-gray-600">{buddy.languages.join(", ")}</span>
                    </div>
                    <div className="text-sm text-green-600">
                      {buddy.response_time}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {isConnected ? (
                      <>
                        <Button 
                          onClick={() => openChat(buddy)}
                          className="flex-1"
                        >
                          <MessageCircle className="mr-2" size={16} />
                          Chat
                        </Button>
                        <Badge variant="outline" className="px-3 py-1">
                          Connected
                        </Badge>
                      </>
                    ) : (
                      <Button 
                        onClick={() => handleConnectBuddy(buddy)}
                        className="flex-1"
                        disabled={connectionStatus === 'pending'}
                      >
                        {connectionStatus === 'pending' ? 'Pending' : 'Connect'}
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {!user && (
          <Card className="mt-8 bg-gradient-to-r from-orange-50 to-yellow-50">
            <CardHeader>
              <CardTitle>Connect with Local Buddies</CardTitle>
              <CardDescription>
                Sign in to connect with local buddies and start your integration journey!
              </CardDescription>
            </CardHeader>
          </Card>
        )}
      </div>

      {/* Chat Dialog */}
      <Dialog open={chatOpen} onOpenChange={setChatOpen}>
        <DialogContent className="max-w-2xl h-[600px] flex flex-col">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3">
              {selectedBuddy && (
                <>
                  <Avatar>
                    <AvatarImage src={selectedBuddy.avatar_url} alt={selectedBuddy.name} />
                    <AvatarFallback>{selectedBuddy.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div>{selectedBuddy.name}</div>
                    <div className="text-sm text-gray-500 font-normal">{selectedBuddy.location}</div>
                  </div>
                </>
              )}
            </DialogTitle>
          </DialogHeader>
          <ScrollArea className="flex-1 pr-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender_id === user?.id ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      message.sender_id === user?.id
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <p className={`text-xs mt-1 ${
                      message.sender_id === user?.id ? 'text-blue-100' : 'text-gray-500'
                    }`}>
                      {new Date(message.sent_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          <div className="flex gap-2 pt-4 border-t">
            <Input
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              className="flex-1"
            />
            <Button onClick={sendMessage} size="icon">
              <Send size={16} />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BuddySystem;
