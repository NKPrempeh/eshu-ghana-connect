
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageCircle, MapPin, Star, Users, Search, Filter } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const BuddySystem = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { toast } = useToast();

  const buddies = [
    {
      id: 1,
      name: "Kwame Asante",
      location: "Accra",
      rating: 4.9,
      reviewCount: 23,
      specialties: ["Housing", "Transportation", "Language"],
      bio: "Born and raised in Accra. I love helping newcomers discover the beauty of Ghana!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      responseTime: "Usually responds within 2 hours",
      languages: ["English", "Twi", "Ga"]
    },
    {
      id: 2,
      name: "Akosua Mensah",
      location: "Kumasi",
      rating: 4.8,
      reviewCount: 31,
      specialties: ["Cultural Training", "Food", "Shopping"],
      bio: "Cultural enthusiast and food lover. Let me show you the authentic Ashanti experience!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5bb?w=150&h=150&fit=crop&crop=face",
      responseTime: "Usually responds within 1 hour",
      languages: ["English", "Twi"]
    },
    {
      id: 3,
      name: "Kojo Osei",
      location: "Cape Coast",
      rating: 4.7,
      reviewCount: 18,
      specialties: ["History", "Tourism", "Beach Life"],
      bio: "History teacher and local guide. Perfect for exploring Ghana's coastal heritage!",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      responseTime: "Usually responds within 3 hours",
      languages: ["English", "Fante"]
    },
    {
      id: 4,
      name: "Ama Owusu",
      location: "Tamale",
      rating: 4.9,
      reviewCount: 15,
      specialties: ["Healthcare", "Education", "Northern Culture"],
      bio: "Healthcare professional passionate about helping newcomers navigate Northern Ghana.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      responseTime: "Usually responds within 4 hours",
      languages: ["English", "Dagbani", "Hausa"]
    }
  ];

  const handleConnectBuddy = (buddyName: string) => {
    toast({
      title: "Connection Request Sent!",
      description: `Your request to connect with ${buddyName} has been sent. They'll respond soon!`,
    });
  };

  const filteredBuddies = buddies.filter(buddy =>
    buddy.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    buddy.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    buddy.specialties.some(specialty => 
      specialty.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

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
          {filteredBuddies.map((buddy) => (
            <Card key={buddy.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={buddy.avatar} alt={buddy.name} />
                    <AvatarFallback>{buddy.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{buddy.name}</CardTitle>
                      <div className="flex items-center gap-1">
                        <Star className="text-yellow-400 fill-current" size={16} />
                        <span className="text-sm font-medium">{buddy.rating}</span>
                        <span className="text-sm text-gray-500">({buddy.reviewCount})</span>
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
                    {buddy.responseTime}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button 
                    onClick={() => handleConnectBuddy(buddy.name)}
                    className="flex-1"
                  >
                    Connect
                  </Button>
                  <Button variant="outline" size="icon">
                    <MessageCircle size={20} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Chat Preview Section */}
        <Card className="mt-8 bg-gradient-to-r from-green-50 to-blue-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="text-primary" size={24} />
              Chat with Your Buddy
            </CardTitle>
            <CardDescription>
              Once connected, you'll be able to chat directly with your buddy for real-time help and guidance.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-white rounded-lg p-4 border max-w-md">
              <div className="text-center text-gray-500 text-sm mb-4">
                💬 Chat will be available after connecting with a buddy
              </div>
              <div className="space-y-3">
                <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                  <p className="text-sm">Hi! I just arrived in Accra. Could you help me find good housing options?</p>
                  <span className="text-xs text-gray-500">You</span>
                </div>
                <div className="bg-primary text-white rounded-lg p-3 max-w-xs ml-auto">
                  <p className="text-sm">Welcome to Ghana! I'd be happy to help. What's your budget and preferred area?</p>
                  <span className="text-xs opacity-75">Kwame</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BuddySystem;
