
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Users, Send, Clock, Star, MapPin, Languages } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useBuddySystem } from "@/hooks/useBuddySystem";
import { BuddyProfile } from "@/types/buddy-system";
import { ChatWindow } from "@/components/buddy-system/ChatWindow";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { mockBuddyProfiles } from "@/data/mockBuddyProfiles";

const BuddySystem = () => {
  const { buddies, connections, loading, handleConnectBuddy, getConnectionStatus } = useBuddySystem();
  const { user } = useAuth();
  const [selectedBuddy, setSelectedBuddy] = useState<BuddyProfile | null>(null);
  const [requestMessage, setRequestMessage] = useState("");
  const [connectingBuddy, setConnectingBuddy] = useState<BuddyProfile | null>(null);

  // Use mock data if no buddies are available in the database
  const displayBuddies = buddies.length > 0 ? buddies : mockBuddyProfiles;

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading cultural buddies...</p>
            </div>
          </div>
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

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cultural Buddy System
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Connect with experienced Ghanaians who can guide you through local customs, help you navigate daily life, and answer your questions about living in Ghana.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/buddy-signup">
              <Button className="ghana-gradient">
                <Users className="mr-2" size={16} />
                Become a Cultural Buddy
              </Button>
            </Link>
            <div className="text-sm text-gray-600">
              Join {displayBuddies.length} active cultural buddies helping newcomers
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-green-600">{displayBuddies.length}</div>
              <div className="text-sm text-gray-600">Active Buddies</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-blue-600">
                {displayBuddies.reduce((total, buddy) => total + buddy.review_count, 0)}
              </div>
              <div className="text-sm text-gray-600">Total Reviews</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-purple-600">
                {(displayBuddies.reduce((total, buddy) => total + buddy.rating, 0) / displayBuddies.length).toFixed(1)}
              </div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-orange-600">
                {new Set(displayBuddies.map(buddy => buddy.location.split(',')[1]?.trim())).size}
              </div>
              <div className="text-sm text-gray-600">Regions Covered</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayBuddies.map((buddy) => {
            const connectionStatus = getConnectionStatus(buddy.id);
            const isConnected = connectionStatus === 'accepted';
            const isPending = connectionStatus === 'pending';
            
            return (
              <Card key={buddy.id} className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-green-500">
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <div className="relative">
                      {buddy.avatar_url ? (
                        <img 
                          src={buddy.avatar_url} 
                          alt={buddy.name}
                          className="w-16 h-16 rounded-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                            if (nextElement) {
                              nextElement.style.display = 'flex';
                            }
                          }}
                        />
                      ) : null}
                      <div 
                        className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white font-semibold text-lg"
                        style={{ display: buddy.avatar_url ? 'none' : 'flex' }}
                      >
                        {getInitials(buddy.name)}
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-lg text-gray-900 truncate">{buddy.name}</h3>
                      <div className="flex items-center text-sm text-gray-600 mb-1">
                        <MapPin size={14} className="mr-1" />
                        {buddy.location}
                      </div>
                      <div className="flex items-center text-sm text-yellow-600">
                        <Star size={14} className="mr-1 fill-current" />
                        {buddy.rating} ({buddy.review_count} reviews)
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-700 line-clamp-2">{buddy.bio}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-xs text-gray-600">
                      <Clock size={12} className="mr-1" />
                      {buddy.response_time}
                    </div>
                    
                    <div>
                      <div className="flex items-center text-xs text-gray-600 mb-1">
                        <Languages size={12} className="mr-1" />
                        Languages:
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {buddy.languages.slice(0, 3).map(language => (
                          <Badge key={language} variant="secondary" className="text-xs">
                            {language}
                          </Badge>
                        ))}
                        {buddy.languages.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{buddy.languages.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div>
                      <div className="text-xs text-gray-600 mb-1">Specialties:</div>
                      <div className="flex flex-wrap gap-1">
                        {buddy.specialties.slice(0, 3).map(specialty => (
                          <Badge key={specialty} variant="outline" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                        {buddy.specialties.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{buddy.specialties.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    {isConnected ? (
                      <Button 
                        onClick={() => handleStartChat(buddy)}
                        className="w-full ghana-gradient"
                      >
                        <MessageCircle className="mr-2" size={16} />
                        Start Chat
                      </Button>
                    ) : isPending ? (
                      <Button 
                        disabled
                        className="w-full"
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
                            className="w-full ghana-gradient"
                          >
                            <Send className="mr-2" size={16} />
                            Connect with {buddy.name.split(' ')[0]}
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md">
                          <DialogHeader>
                            <DialogTitle>Connect with {buddy.name}</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                              {buddy.avatar_url ? (
                                <img 
                                  src={buddy.avatar_url} 
                                  alt={buddy.name}
                                  className="w-12 h-12 rounded-full object-cover"
                                />
                              ) : (
                                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white font-semibold">
                                  {getInitials(buddy.name)}
                                </div>
                              )}
                              <div>
                                <div className="font-medium">{buddy.name}</div>
                                <div className="text-sm text-gray-600">{buddy.location}</div>
                              </div>
                            </div>
                            <div>
                              <Label htmlFor="message">Personal Message (Optional)</Label>
                              <Textarea
                                id="message"
                                placeholder={`Hi ${buddy.name.split(' ')[0]}, I'd like to connect with you for cultural guidance! I'm particularly interested in learning about...`}
                                value={requestMessage}
                                onChange={(e) => setRequestMessage(e.target.value)}
                                className="mt-1"
                                rows={3}
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
                        asChild
                        className="w-full"
                        variant="outline"
                      >
                        <Link to="/login">
                          <MessageCircle className="mr-2" size={16} />
                          Login to Connect
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {!user && (
          <Card className="mt-8 bg-gradient-to-r from-orange-50 to-yellow-50 border-orange-200">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2 text-orange-600" />
                Connect with Cultural Buddies
              </CardTitle>
              <CardDescription>
                Sign in to send connection requests to experienced community members and get personalized guidance for your life in Ghana!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Button asChild className="ghana-gradient">
                  <Link to="/login">Sign In</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/signup">Create Account</Link>
                </Button>
              </div>
            </CardContent>
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
