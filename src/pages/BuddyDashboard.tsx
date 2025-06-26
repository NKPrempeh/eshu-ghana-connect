
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MessageCircle, Users, BookOpen, Globe, Phone, Mail, Star, Clock, Home, Wifi, MapPin, DollarSign, Shield } from "lucide-react";
import { ChatWindow } from "@/components/buddy-system/ChatWindow";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface BuddyConnection {
  id: string;
  user_id: string;
  name: string;
  location: string;
  avatar_url: string;
  lastMessage: string;
  lastMessageTime: string;
  status: 'online' | 'offline';
}

interface BuddyStats {
  peopleHelped: number;
  averageRating: number;
  responseTime: string;
}

const BuddyDashboard = () => {
  const [activeChat, setActiveChat] = useState<string | null>(null);
  const [connections, setConnections] = useState<BuddyConnection[]>([]);
  const [stats, setStats] = useState<BuddyStats>({
    peopleHelped: 0,
    averageRating: 0,
    responseTime: "< 1 hour"
  });
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (user) {
      fetchConnections();
      fetchBuddyStats();
    }
  }, [user]);

  const fetchConnections = async () => {
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

      // Get connections where current user is the buddy
      const { data: connectionsData, error } = await supabase
        .from('buddy_connections')
        .select(`
          id,
          user_id,
          created_at,
          profiles!buddy_connections_user_id_fkey (
            id,
            full_name,
            avatar_url
          )
        `)
        .eq('buddy_id', buddyProfile.id)
        .eq('status', 'accepted');

      if (error) {
        console.error('Error fetching connections:', error);
        toast({
          title: "Error",
          description: "Failed to load connections",
          variant: "destructive",
        });
        return;
      }

      // For each connection, get the latest message
      const connectionsWithMessages = await Promise.all(
        (connectionsData || []).map(async (conn) => {
          const { data: lastMessage } = await supabase
            .from('messages')
            .select('content, sent_at')
            .or(`and(sender_id.eq.${conn.user_id},recipient_id.eq.${user.id}),and(sender_id.eq.${user.id},recipient_id.eq.${conn.user_id})`)
            .order('sent_at', { ascending: false })
            .limit(1)
            .single();

          return {
            id: conn.id,
            user_id: conn.user_id,
            name: conn.profiles?.full_name || 'Unknown User',
            location: 'Ghana', // Default location
            avatar_url: conn.profiles?.avatar_url || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
            lastMessage: lastMessage?.content || 'No messages yet',
            lastMessageTime: lastMessage ? formatTime(lastMessage.sent_at) : 'Never',
            status: 'online' as const
          };
        })
      );

      setConnections(connectionsWithMessages);
    } catch (error) {
      console.error('Error fetching connections:', error);
      toast({
        title: "Error",
        description: "Failed to load connections",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchBuddyStats = async () => {
    if (!user) return;

    try {
      // Get buddy profile stats
      const { data: buddyProfile } = await supabase
        .from('buddy_profiles')
        .select('rating, review_count, response_time')
        .eq('user_id', user.id)
        .single();

      if (buddyProfile) {
        setStats({
          peopleHelped: buddyProfile.review_count || 0,
          averageRating: Number(buddyProfile.rating) || 5.0,
          responseTime: buddyProfile.response_time || "< 1 hour"
        });
      }
    } catch (error) {
      console.error('Error fetching buddy stats:', error);
    }
  };

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffMins < 1) return "just now";
    if (diffMins < 60) return `${diffMins} min ago`;
    if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
  };

  const resources = [
    {
      title: "Internet & WiFi Guide",
      description: "WiFi hotspots, internet cafes, and mobile data options across Ghana",
      icon: Wifi,
      color: "bg-blue-100 text-blue-800",
      details: [
        "MTN, Vodafone, and AirtelTigo are major network providers",
        "WiFi available at hotels, restaurants, and shopping centers",
        "Internet cafes common in urban areas",
        "Mobile data plans start from GHS 1 per day"
      ]
    },
    {
      title: "Cultural Etiquette Guide",
      description: "Essential dos and don'ts for Ghanaian culture",
      icon: BookOpen,
      color: "bg-green-100 text-green-800",
      details: [
        "Greet elders first and use both hands when giving/receiving items",
        "Remove shoes before entering homes",
        "Use right hand for eating and handshakes",
        "Dress modestly, especially when visiting traditional areas"
      ]
    },
    {
      title: "Local Transportation",
      description: "Guide to taxis, trotros, and getting around",
      icon: MapPin,
      color: "bg-purple-100 text-purple-800",
      details: [
        "Trotros (shared minivans) are cheapest option",
        "Uber and Bolt available in major cities",
        "Negotiate taxi fares before starting journey",
        "STC and VIP buses for intercity travel"
      ]
    },
    {
      title: "Cost of Living",
      description: "Typical prices and budgeting tips",
      icon: DollarSign,
      color: "bg-yellow-100 text-yellow-800",
      details: [
        "Local meal: GHS 5-15, Restaurant: GHS 20-50",
        "Trotro ride: GHS 1-3, Taxi: GHS 5-20",
        "Bottled water: GHS 1-2, Local beer: GHS 3-8",
        "Monthly apartment: GHS 500-3000 depending on area"
      ]
    },
    {
      title: "Safety & Security",
      description: "Important safety tips and emergency contacts",
      icon: Shield,
      color: "bg-red-100 text-red-800",
      details: [
        "Keep copies of important documents",
        "Avoid displaying expensive items",
        "Use reputable transport services at night",
        "Emergency: 999, Police: 191, Fire: 192"
      ]
    },
    {
      title: "Language Phrases",
      description: "Common Twi and English phrases",
      icon: MessageCircle,
      color: "bg-indigo-100 text-indigo-800",
      details: [
        "Hello: Akwaaba (ah-KWA-bah)",
        "Thank you: Medaase (meh-DAH-seh)",
        "How are you?: Wo ho te sɛn? (woh-hoh-teh-sen)",
        "I don't understand: Mente ase (men-teh-ah-seh)"
      ]
    }
  ];

  // Convert connection to buddy profile format for ChatWindow
  const getActiveBuddy = () => {
    const connection = connections.find(c => c.id === activeChat);
    if (!connection) return null;
    
    return {
      id: connection.id,
      user_id: connection.user_id,
      name: connection.name,
      location: connection.location,
      bio: "Newcomer to Ghana seeking cultural guidance",
      specialties: ["Culture", "Language", "Local Tips"],
      languages: ["English"],
      avatar_url: connection.avatar_url,
      rating: 4.8,
      review_count: 12,
      response_time: "< 1 hour"
    };
  };

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
        {/* Header with Home Link */}
        <div className="flex items-center justify-between mb-8">
          <div className="text-center flex-1">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Buddy Dashboard
            </h1>
            <p className="text-xl text-gray-600">
              Help newcomers navigate Ghanaian culture with confidence
            </p>
          </div>
          <Link to="/">
            <Button variant="outline" className="flex items-center gap-2">
              <Home size={20} />
              Back to Eshu Home
            </Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Active Connections */}
          <div className="lg:col-span-1">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2" size={20} />
                  Active Connections ({connections.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {connections.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <Users className="mx-auto mb-3" size={48} />
                    <p>No active connections yet</p>
                    <p className="text-sm">People will appear here when they connect with you</p>
                  </div>
                ) : (
                  connections.map((connection) => (
                    <div
                      key={connection.id}
                      className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                        activeChat === connection.id 
                          ? 'bg-primary/10 border-primary' 
                          : 'hover:bg-gray-50'
                      }`}
                      onClick={() => setActiveChat(connection.id)}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <img
                            src={connection.avatar_url}
                            alt={connection.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                            connection.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
                          }`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-sm truncate">{connection.name}</h3>
                          <p className="text-xs text-gray-500">{connection.location}</p>
                          <p className="text-xs text-gray-600 truncate mt-1">{connection.lastMessage}</p>
                          <p className="text-xs text-gray-400">{connection.lastMessageTime}</p>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </CardContent>
            </Card>

            {/* Stats */}
            <Card className="shadow-lg mt-6">
              <CardHeader>
                <CardTitle>Your Impact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">People Helped</span>
                  <Badge variant="secondary">{stats.peopleHelped}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Average Rating</span>
                  <div className="flex items-center">
                    <Star className="text-yellow-500 mr-1" size={16} />
                    <span className="text-sm font-semibold">{stats.averageRating.toFixed(1)}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Response Time</span>
                  <div className="flex items-center">
                    <Clock className="text-green-500 mr-1" size={16} />
                    <span className="text-sm font-semibold">{stats.responseTime}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chat Area */}
          <div className="lg:col-span-2">
            {activeChat && getActiveBuddy() ? (
              <ChatWindow 
                buddy={getActiveBuddy()!}
                onClose={() => setActiveChat(null)}
              />
            ) : (
              <Card className="shadow-lg h-full">
                <CardContent className="flex items-center justify-center h-96">
                  <div className="text-center">
                    <MessageCircle className="mx-auto mb-4 text-gray-400" size={64} />
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">
                      Select a Connection to Start Chatting
                    </h3>
                    <p className="text-gray-500">
                      Choose someone from your connections to begin helping them with their cultural journey.
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Resources Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Resources for Buddies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow cursor-pointer group">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg ${resource.color} flex items-center justify-center mb-4`}>
                    <resource.icon size={24} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{resource.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                  
                  {/* Expandable details */}
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm text-gray-700">Key Information:</h4>
                    <ul className="space-y-1">
                      {resource.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-2 text-xs text-gray-600">
                          <span className="text-primary mt-1">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tips Section */}
        <Card className="shadow-lg mt-8">
          <CardHeader>
            <CardTitle>Buddy Tips & Best Practices</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-green-800">✅ Do&apos;s</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Respond promptly to messages</li>
                  <li>• Share personal experiences and insights</li>
                  <li>• Be patient with cultural differences</li>
                  <li>• Recommend specific places and activities</li>
                  <li>• Use simple, clear language</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-red-800">❌ Don&apos;ts</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Don&apos;t share personal contact information</li>
                  <li>• Avoid making assumptions about backgrounds</li>
                  <li>• Don&apos;t provide financial advice</li>
                  <li>• Avoid discussing sensitive political topics</li>
                  <li>• Don&apos;t pressure for in-person meetings</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BuddyDashboard;
