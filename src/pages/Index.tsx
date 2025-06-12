
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, Users, MapPin, MessageCircle, Calendar, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { GallerySection } from "@/components/home/GallerySection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to Ghana
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Your comprehensive guide to integrating into Ghanaian culture, connecting with local buddies, 
            and discovering the rich traditions of this beautiful country.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="ghana-gradient text-white" asChild>
              <Link to="/cultural-training">
                Start Learning
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/buddy-system">Find a Buddy</Link>
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
            <CardHeader>
              <BookOpen className="w-12 h-12 ghana-gradient-icon mb-4" />
              <CardTitle>Cultural Training</CardTitle>
              <CardDescription>
                Interactive lessons on Ghanaian customs, language, and traditions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline" asChild>
                <Link to="/cultural-training">Start Learning</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
            <CardHeader>
              <Users className="w-12 h-12 ghana-gradient-icon mb-4" />
              <CardTitle>Buddy System</CardTitle>
              <CardDescription>
                Connect with local Ghanaians who can guide you through your journey
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline" asChild>
                <Link to="/buddy-system">Find a Buddy</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
            <CardHeader>
              <MapPin className="w-12 h-12 ghana-gradient-icon mb-4" />
              <CardTitle>Events & Places</CardTitle>
              <CardDescription>
                Discover local events, festivals, and must-visit destinations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline" asChild>
                <Link to="/events-places">Explore</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
            <CardHeader>
              <Info className="w-12 h-12 ghana-gradient-icon mb-4" />
              <CardTitle>Information Board</CardTitle>
              <CardDescription>
                Important updates, resources, and community announcements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline" asChild>
                <Link to="/information-board">View Updates</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
            <CardHeader>
              <MessageCircle className="w-12 h-12 ghana-gradient-icon mb-4" />
              <CardTitle>Community Chat</CardTitle>
              <CardDescription>
                Real-time messaging with cultural buddies and fellow newcomers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline" asChild>
                <Link to="/buddy-system">Start Chatting</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
            <CardHeader>
              <Calendar className="w-12 h-12 ghana-gradient-icon mb-4" />
              <CardTitle>Cultural Calendar</CardTitle>
              <CardDescription>
                Stay updated with festivals, holidays, and cultural celebrations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline" asChild>
                <Link to="/events-places">View Calendar</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Gallery Section */}
      <GallerySection />

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="text-center bg-gradient-to-r from-red-50 via-yellow-50 to-green-50 border-none shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl text-gray-900">Ready to Begin Your Journey?</CardTitle>
            <CardDescription className="text-lg text-gray-600">
              Join thousands of people who have successfully integrated into Ghanaian society
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="ghana-gradient" asChild>
                <Link to="/signup">Get Started Today</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/buddy-signup">Become a Buddy</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Index;
