
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageCircle, Users, Star, Clock, MapPin, Languages, Briefcase } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { ChatWindow } from "@/components/buddy-system/ChatWindow";

const BuddyDashboard = () => {
  const { user } = useAuth();
  const [activeConnections, setActiveConnections] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New to Accra",
      lastMessage: "Thanks for the restaurant recommendations!",
      timestamp: "2 hours ago",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b9191877?w=100",
      status: "online"
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Visiting Kumasi",
      lastMessage: "Can you help me with directions to the market?",
      timestamp: "1 day ago",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
      status: "offline"
    }
  ]);

  const [selectedChat, setSelectedChat] = useState<number | null>(null);

  const buddyStats = {
    totalConnections: 15,
    activeChats: 3,
    rating: 4.8,
    responseTime: "< 1 hour"
  };

  const buddyTips = [
    {
      title: "Cultural Sensitivity",
      description: "Always be respectful of different cultures and traditions. Ask questions to understand better.",
      icon: "🌍"
    },
    {
      title: "Local Knowledge",
      description: "Share practical information about transportation, food, customs, and local etiquette.",
      icon: "📍"
    },
    {
      title: "Emergency Contacts",
      description: "Always provide emergency contact numbers and important local services information.",
      icon: "🚨"
    },
    {
      title: "Language Help",
      description: "Assist with basic local language phrases and communication tips.",
      icon: "💬"
    },
    {
      title: "Safety First",
      description: "Prioritize safety advice about areas, transportation, and general precautions.",
      icon: "🛡️"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Buddy Dashboard
          </h1>
          <p className="text-xl text-gray-600">
            Help newcomers feel at home in Ghana
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Connections</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{buddyStats.totalConnections}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Chats</CardTitle>
              <MessageCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{buddyStats.activeChats}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Rating</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{buddyStats.rating}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Response Time</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{buddyStats.responseTime}</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="chats" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="chats">Active Chats</TabsTrigger>
            <TabsTrigger value="tips">Buddy Tips</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="chats">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Your Connections</CardTitle>
                  <CardDescription>People you're currently helping</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {activeConnections.map((connection) => (
                    <div 
                      key={connection.id}
                      className="flex items-center space-x-4 p-3 rounded-lg border hover:bg-gray-50 cursor-pointer"
                      onClick={() => setSelectedChat(connection.id)}
                    >
                      <Avatar>
                        <AvatarImage src={connection.avatar} />
                        <AvatarFallback>{connection.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {connection.name}
                          </p>
                          <Badge variant={connection.status === 'online' ? 'default' : 'secondary'}>
                            {connection.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-500 truncate">{connection.location}</p>
                        <p className="text-xs text-gray-400 truncate">{connection.lastMessage}</p>
                        <p className="text-xs text-gray-400">{connection.timestamp}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {selectedChat && (
                <Card>
                  <CardHeader>
                    <CardTitle>Chat</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ChatWindow 
                      recipientId={selectedChat.toString()}
                      recipientName={activeConnections.find(c => c.id === selectedChat)?.name || "User"}
                    />
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          <TabsContent value="tips">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {buddyTips.map((tip, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl">{tip.icon}</span>
                      <CardTitle className="text-lg">{tip.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{tip.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="resources">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Emergency Contacts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span>Police Emergency:</span>
                    <span className="font-medium">199</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fire Service:</span>
                    <span className="font-medium">192</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ambulance:</span>
                    <span className="font-medium">193</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tourist Police:</span>
                    <span className="font-medium">18555</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Useful Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div>
                    <h4 className="font-medium">Common Greetings:</h4>
                    <p className="text-sm text-gray-600">Twi: "Maakye" (Good morning), "Mema mo" (Good afternoon)</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Currency:</h4>
                    <p className="text-sm text-gray-600">Ghana Cedi (GHS), Mobile Money widely accepted</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Transportation:</h4>
                    <p className="text-sm text-gray-600">Trotro, Taxi, Uber, Bolt available in major cities</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default BuddyDashboard;
