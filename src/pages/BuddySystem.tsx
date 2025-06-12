import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Users } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useBuddySystem } from "@/hooks/useBuddySystem";
import { BuddyProfile } from "@/types/buddy-system";
import { ChatWindow } from "@/components/buddy-system/ChatWindow";

const BuddySystem = () => {
  const { buddies, connections, loading, handleConnectBuddy, getConnectionStatus } = useBuddySystem();
  const { user } = useAuth();
  const [selectedBuddy, setSelectedBuddy] = useState<BuddyProfile | null>(null);

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

  const handleStartChat = (buddy: BuddyProfile) => {
    setSelectedBuddy(buddy);
  };

  const handleCloseChat = () => {
    setSelectedBuddy(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Buddy System
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with experienced members of the community who can guide you and answer your questions about life in Ghana.
          </p>
        </div>

        <div className="text-center mb-8">
          <Link to="/buddy-signup">
            <Button className="ghana-gradient mb-8">
              <Users className="mr-2" size={16} />
              Become a Cultural Buddy
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {buddies.map((buddy) => {
            const connectionStatus = getConnectionStatus(buddy.id);
            const isConnected = connectionStatus === 'accepted';
            
            return (
              <Card key={buddy.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{buddy.name}</CardTitle>
                  <CardDescription>
                    {buddy.location}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <img 
                      src={buddy.avatar_url} 
                      alt={buddy.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto mb-2"
                    />
                    <div className="text-center">
                      <div className="font-semibold">{buddy.name}</div>
                      <div className="text-sm text-gray-600">{buddy.location}</div>
                      <div className="text-xs text-gray-500">
                        Responds {buddy.response_time}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    {isConnected ? (
                      <Button 
                        onClick={() => handleStartChat(buddy)}
                        className="flex-1 ghana-gradient"
                      >
                        <MessageCircle className="mr-2" size={16} />
                        Start Chat
                      </Button>
                    ) : (
                      <Button 
                        onClick={() => handleConnectBuddy(buddy)}
                        className="flex-1 ghana-gradient"
                        disabled={connectionStatus === 'pending'}
                      >
                        <MessageCircle className="mr-2" size={16} />
                        {connectionStatus === 'pending' ? 'Connection Pending' : 'Connect & Chat'}
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
              <CardTitle>Connect with Buddies</CardTitle>
              <CardDescription>
                Sign in to connect with experienced community members and get personalized guidance!
              </CardDescription>
            </CardHeader>
          </Card>
        )}
      </div>

      {selectedBuddy && (
        <ChatWindow
          buddy={selectedBuddy}
          onClose={handleCloseChat}
        />
      )}
    </div>
  );
};

export default BuddySystem;
