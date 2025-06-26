
import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Users, Send } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useBuddySystem } from "@/hooks/useBuddySystem";
import { BuddyProfile } from "@/types/buddy-system";
import { ChatWindow } from "@/components/buddy-system/ChatWindow";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

const BuddySystem = () => {
  const { buddies, connections, loading, handleConnectBuddy, getConnectionStatus } = useBuddySystem();
  const { user } = useAuth();
  const [selectedBuddy, setSelectedBuddy] = useState<BuddyProfile | null>(null);
  const [requestMessage, setRequestMessage] = useState("");
  const [connectingBuddy, setConnectingBuddy] = useState<BuddyProfile | null>(null);

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

  const handleSendRequest = async (buddy: BuddyProfile) => {
    await handleConnectBuddy(buddy, requestMessage);
    setRequestMessage("");
    setConnectingBuddy(null);
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
            const isPending = connectionStatus === 'pending';
            
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

                  <div className="mb-4">
                    <p className="text-sm text-gray-700 mb-2">{buddy.bio}</p>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {buddy.specialties.map(specialty => (
                        <span key={specialty} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                          {specialty}
                        </span>
                      ))}
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
                    ) : isPending ? (
                      <Button 
                        disabled
                        className="flex-1"
                        variant="outline"
                      >
                        <Clock className="mr-2" size={16} />
                        Request Pending
                      </Button>
                    ) : user ? (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            onClick={() => setConnectingBuddy(buddy)}
                            className="flex-1 ghana-gradient"
                          >
                            <Send className="mr-2" size={16} />
                            Send Request
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Send Connection Request to {buddy.name}</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div>
                              <Label htmlFor="message">Message (Optional)</Label>
                              <Textarea
                                id="message"
                                placeholder={`Hi ${buddy.name}, I'd like to connect with you for cultural guidance!`}
                                value={requestMessage}
                                onChange={(e) => setRequestMessage(e.target.value)}
                                className="mt-1"
                              />
                            </div>
                            <div className="flex gap-2">
                              <Button 
                                onClick={() => handleSendRequest(buddy)}
                                className="flex-1 ghana-gradient"
                              >
                                <Send className="mr-2" size={16} />
                                Send Request
                              </Button>
                              <Button 
                                variant="outline"
                                onClick={() => {
                                  setConnectingBuddy(null);
                                  setRequestMessage("");
                                }}
                                className="flex-1"
                              >
                                Cancel
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    ) : (
                      <Button 
                        disabled
                        className="flex-1"
                        variant="outline"
                      >
                        <MessageCircle className="mr-2" size={16} />
                        Login to Connect
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
