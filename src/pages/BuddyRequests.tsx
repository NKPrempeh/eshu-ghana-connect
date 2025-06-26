
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageCircle, CheckCircle, Clock, MapPin, User, Calendar } from "lucide-react";
import { useBuddyRequests } from "@/hooks/useBuddyRequests";

const BuddyRequests = () => {
  const { 
    requests, 
    loading, 
    handleAcceptRequest, 
    handleDeclineRequest 
  } = useBuddyRequests();

  const pendingRequests = requests.filter(req => req.status === 'pending');
  const acceptedRequests = requests.filter(req => req.status === 'accepted');
  const allRequests = requests;

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

  const RequestCard = ({ request }: { request: any }) => (
    <Card className="shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <Avatar className="w-12 h-12">
            <AvatarImage src={request.user_avatar} alt={request.user_name} />
            <AvatarFallback>
              {request.user_name.split(' ').map((n: string) => n[0]).join('')}
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
                  {formatTimeAgo(request.requested_at)}
                </p>
              </div>
            </div>
            
            <p className="text-gray-700 mb-4 leading-relaxed">
              {request.message}
            </p>
            
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
              <div className="text-sm text-green-600 font-medium">
                ✓ Connection established - You can now chat with this user
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">Loading requests...</div>
        </div>
      </div>
    );
  }

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
            {allRequests.length === 0 ? (
              <Card className="text-center py-12">
                <CardContent>
                  <User size={48} className="mx-auto text-gray-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No Requests Yet</h3>
                  <p className="text-gray-600">
                    Connection requests will appear here once users start reaching out.
                  </p>
                </CardContent>
              </Card>
            ) : (
              allRequests.map(request => (
                <RequestCard key={request.id} request={request} />
              ))
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default BuddyRequests;
