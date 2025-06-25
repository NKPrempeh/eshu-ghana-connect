
import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MessageCircle, Users, BookOpen, Globe, Phone, Mail, Star, Clock } from "lucide-react";
import { ChatWindow } from "@/components/buddy-system/ChatWindow";

const BuddyDashboard = () => {
  const [activeChat, setActiveChat] = useState<string | null>(null);

  // Mock connections for demonstration
  const connections = [
    {
      id: "1",
      name: "Kofi Asante",
      location: "Accra, Ghana",
      lastMessage: "Thanks for helping me with the cultural info!",
      lastMessageTime: "2 min ago",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      status: "online"
    },
    {
      id: "2", 
      name: "Ama Osei",
      location: "Kumasi, Ghana",
      lastMessage: "The food recommendations were perfect!",
      lastMessageTime: "1 hour ago",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616c96f5dda?w=100&h=100&fit=crop&crop=face",
      status: "offline"
    }
  ];

  const resources = [
    {
      title: "Cultural Etiquette Guide",
      description: "Essential dos and don'ts for Ghanaian culture",
      icon: BookOpen,
      color: "bg-blue-100 text-blue-800"
    },
    {
      title: "Local Transportation",
      description: "Guide to taxis, trotros, and getting around",
      icon: Globe,
      color: "bg-green-100 text-green-800"
    },
    {
      title: "Emergency Contacts",
      description: "Important numbers and contacts in Ghana",
      icon: Phone,
      color: "bg-red-100 text-red-800"
    },
    {
      title: "Language Phrases",
      description: "Common Twi and English phrases",
      icon: MessageCircle,
      color: "bg-purple-100 text-purple-800"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Buddy Dashboard
          </h1>
          <p className="text-xl text-gray-600">
            Help newcomers navigate Ghanaian culture with confidence
          </p>
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
                {connections.map((connection) => (
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
                          src={connection.avatar}
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
                ))}
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
                  <Badge variant="secondary">12</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Average Rating</span>
                  <div className="flex items-center">
                    <Star className="text-yellow-500 mr-1" size={16} />
                    <span className="text-sm font-semibold">4.8</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Response Time</span>
                  <div className="flex items-center">
                    <Clock className="text-green-500 mr-1" size={16} />
                    <span className="text-sm font-semibold">&lt; 1 hour</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chat Area */}
          <div className="lg:col-span-2">
            {activeChat ? (
              <ChatWindow 
                buddyUserId={activeChat}
                buddyName={connections.find(c => c.id === activeChat)?.name || "Unknown"}
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg ${resource.color} flex items-center justify-center mb-4`}>
                    <resource.icon size={24} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{resource.title}</h3>
                  <p className="text-gray-600 text-sm">{resource.description}</p>
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
