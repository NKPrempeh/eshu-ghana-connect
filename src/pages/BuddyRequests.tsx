
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageCircle, CheckCircle, Clock, MapPin, User, Calendar } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

interface BuddyRequest {
  id: string;
  user_id: string;
  user_name: string;
  user_avatar: string;
  user_location: string;
  message: string;
  interests: string[];
  arrival_date: string;
  duration_of_stay: string;
  status: 'pending' | 'accepted' | 'declined';
  created_at: string;
}

const BuddyRequests = () => {
  const [requests, setRequests] = useState<BuddyRequest[]>([
    {
      id: '1',
      user_id: '1',
      user_name: 'Sarah Johnson',
      user_avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      user_location: 'United States',
      message: 'Hi! I\'m traveling to Ghana for the first time next month and would love to learn about local customs and find the best places to experience authentic Ghanaian culture.',
      interests: ['Culture', 'Food', 'Language', 'History'],
      arrival_date: '2024-02-15',
      duration_of_stay: '2 weeks',
      status: 'pending',
      created_at: '2024-01-20T10:30:00Z'
    },
    {
      id: '2',
      user_id: '2',
      user_name: 'Michael Chen',
      user_avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      user_location: 'Canada',
      message: 'I\'m a student coming to Ghana for a semester abroad. I\'d appreciate help with understanding academic culture and social norms.',
      interests: ['Education', 'Culture', 'Language'],
      arrival_date: '2024-02-01',
      duration_of_stay: '4 months',
      status: 'pending',
      created_at: '2024-01-18T14:15:00Z'
    },
    {
      id: '3',
      user_id: '3',
      user_name: 'Emma Thompson',
      user_avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      user_location: 'United Kingdom',
      message: 'Thank you for accepting my request! Looking forward to learning about Ghana.',
      interests: ['Culture', 'Tourism', 'Photography'],
      arrival_date: '2024-01-25',
      duration_of_stay: '3 weeks',
      status: 'accepted',
      created_at: '2024-01-15T09:20:00Z'
    }
  ]);
  
  const { user } = useAuth();
  const { toast } = useToast();

  const pendingRequests = requests.filter(req => req.status === 'pending');
  const acceptedRequests = requests.filter(req => req.status === 'accepted');
  const allRequests = requests;

  const handleAcceptRequest = async (requestId: string) => {
    setRequests(prev => 
      prev.map(req => 
        req.id === requestId ? { ...req, status: 'accepted' as const } : req
      )
    );
    
    toast({
      title: "Request Accepted",
      description: "You can now start chatting with your new buddy!",
    });
  };

  const handleDeclineRequest = async (requestId: string) => {
    setRequests(prev => 
      prev.map(req => 
        req.id === requestId ? { ...req, status: 'declined' as const } : req
      )
    );
    
    toast({
      title: "Request Declined",
      description: "The request has been declined.",
    });
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    return `${diffDays} days ago`;
  };

  const RequestCard = ({ request }: { request: BuddyRequest }) => (
    <Card className="shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <Avatar className="w-12 h-12">
            <AvatarImage src={request.user_avatar} alt={request.user_name} />
            <AvatarFallback>
              {request.user_name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h3 className="font-semibold text-lg">{request.user_name}</h3>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <MapPin size={14} />
                  {request.user_location}
                </div>
              </div>
              
              <div className="text-right">
                <Badge 
                  variant={
                    request.status === 'pending' ? 'default' :
                    request.status === 'accepted' ? 'secondary' : 'destructive'
                  }
                >
                  {request.status}
                </Badge>
                <p className="text-xs text-gray-500 mt-1">
                  {formatTimeAgo(request.created_at)}
                </p>
              </div>
            </div>
            
            <p className="text-gray-700 mb-4 leading-relaxed">
              {request.message}
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-primary" />
                <div>
                  <p className="font-medium">Arrival Date</p>
                  <p className="text-gray-600">{formatDate(request.arrival_date)}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-primary" />
                <div>
                  <p className="font-medium">Duration</p>
                  <p className="text-gray-600">{request.duration_of_stay}</p>
                </div>
              </div>
            </div>
            
            <div className="mb-4">
              <p className="font-medium text-sm mb-2">Interests:</p>
              <div className="flex flex-wrap gap-2">
                {request.interests.map(interest => (
                  <Badge key={interest} variant="outline" className="text-xs">
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
            
            {request.status === 'pending' && (
              <div className="flex gap-3">
                <Button 
                  onClick={() => handleAcceptRequest(request.id)}
                  className="flex-1 ghana-gradient"
                >
                  <CheckCircle size={16} className="mr-2" />
                  Accept Request
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => handleDeclineRequest(request.id)}
                  className="flex-1"
                >
                  Decline
                </Button>
              </div>
            )}
            
            {request.status === 'accepted' && (
              <Button className="w-full ghana-gradient">
                <MessageCircle size={16} className="mr-2" />
                Start Chatting
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            📍 Buddy Requests
          </h1>
          <p className="text-xl text-gray-600">
            Connect with newcomers who need your cultural guidance
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                {pendingRequests.length}
              </div>
              <p className="text-gray-600">Pending Requests</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {acceptedRequests.length}
              </div>
              <p className="text-gray-600">Active Connections</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {allRequests.length}
              </div>
              <p className="text-gray-600">Total Requests</p>
            </CardContent>
          </Card>
        </div>

        {/* Requests Tabs */}
        <Tabs defaultValue="pending" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="pending" className="flex items-center gap-2">
              <Clock size={16} />
              Pending ({pendingRequests.length})
            </TabsTrigger>
            <TabsTrigger value="accepted" className="flex items-center gap-2">
              <CheckCircle size={16} />
              Accepted ({acceptedRequests.length})
            </TabsTrigger>
            <TabsTrigger value="all" className="flex items-center gap-2">
              <User size={16} />
              All Requests ({allRequests.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="pending" className="space-y-4">
            {pendingRequests.length === 0 ? (
              <Card className="text-center py-12">
                <CardContent>
                  <Clock size={48} className="mx-auto text-gray-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No Pending Requests</h3>
                  <p className="text-gray-600">
                    When people request to connect with you, they'll appear here.
                  </p>
                </CardContent>
              </Card>
            ) : (
              pendingRequests.map(request => (
                <RequestCard key={request.id} request={request} />
              ))
            )}
          </TabsContent>

          <TabsContent value="accepted" className="space-y-4">
            {acceptedRequests.length === 0 ? (
              <Card className="text-center py-12">
                <CardContent>
                  <CheckCircle size={48} className="mx-auto text-gray-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No Active Connections</h3>
                  <p className="text-gray-600">
                    Accept requests to start helping newcomers with their cultural journey.
                  </p>
                </CardContent>
              </Card>
            ) : (
              acceptedRequests.map(request => (
                <RequestCard key={request.id} request={request} />
              ))
            )}
          </TabsContent>

          <TabsContent value="all" className="space-y-4">
            {allRequests.map(request => (
              <RequestCard key={request.id} request={request} />
            ))}
          </TabsContent>
        </Tabs>

        {/* Help Section */}
        <Card className="shadow-lg mt-8">
          <CardHeader>
            <CardTitle>Managing Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-green-800">✅ Acceptance Tips</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Review their interests and message carefully</li>
                  <li>• Consider your availability during their stay</li>
                  <li>• Accept requests where you can genuinely help</li>
                  <li>• Respond promptly to show professionalism</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-blue-800">💬 Communication Guidelines</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Send a welcome message after accepting</li>
                  <li>• Ask about specific needs and concerns</li>
                  <li>• Share useful resources and tips</li>
                  <li>• Be patient and understanding</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BuddyRequests;
