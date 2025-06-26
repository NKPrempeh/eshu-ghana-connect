import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, BookOpen, Calendar, MessageCircle, MapPin, Star, User, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { GallerySection } from "@/components/home/GallerySection";
import { EmailVerificationSuccess } from "@/components/auth/EmailVerificationSuccess";
import { EshuLogo } from "@/components/EshuLogo";
import { useAuth } from "@/contexts/AuthContext";

const Index = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
      <Navigation />
      <EmailVerificationSuccess />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="mb-8">
            <EshuLogo width={150} height={75} className="mx-auto mb-6" />
          </div>
          
          {user ? (
            // Logged in user view
            <>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Welcome back to <span className="ghana-gradient bg-clip-text text-transparent">Eshu</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
                Continue your cultural journey in Ghana. Explore new experiences and stay connected with your community.
              </p>
              <div className="flex items-center justify-center gap-2 mb-8">
                <User size={20} className="text-green-600" />
                <span className="text-green-700 font-medium">Logged in as {user.email}</span>
              </div>
            </>
          ) : (
            // Not logged in view
            <>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Welcome to <span className="ghana-gradient bg-clip-text text-transparent">Eshu</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Your gateway to Ghanaian culture, traditions, and community. Connect, learn, and thrive in the heart of West Africa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/signup">
                  <Button size="lg" className="ghana-gradient hover:opacity-90 transition-opacity">
                    Get Started <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
                <Link to="/events-places">
                  <Button size="lg" variant="outline" className="border-2">
                    Explore Events
                  </Button>
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            {user ? "Your Cultural Journey Continues" : "Everything You Need to Thrive"}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 ghana-gradient rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="text-white" size={24} />
                </div>
                <CardTitle>Buddy System</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Connect with experienced locals who'll guide you through your journey in Ghana.
                </CardDescription>
                <Link to="/buddy-system">
                  <Button className="mt-4 w-full">Find a Buddy</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 ghana-gradient rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="text-white" size={24} />
                </div>
                <CardTitle>Cultural Training</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Learn about Ghanaian customs, traditions, and social norms through interactive lessons.
                </CardDescription>
                <Link to="/cultural-training">
                  <Button className="mt-4 w-full">Start Learning</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 ghana-gradient rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Calendar className="text-white" size={24} />
                </div>
                <CardTitle>Events & Places</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Discover cultural festivals, events, and must-visit places throughout Ghana.
                </CardDescription>
                <Link to="/events-places">
                  <Button className="mt-4 w-full">Explore</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 ghana-gradient rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="text-white" size={24} />
                </div>
                <CardTitle>Information Board</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Access practical information about living, working, and studying in Ghana.
                </CardDescription>
                <Link to="/information-board">
                  <Button className="mt-4 w-full">Get Info</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <GallerySection />

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Community Says</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardTitle className="text-lg">Amazing Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  "Eshu helped me connect with local culture in ways I never imagined. The buddy system is incredible!"
                </CardDescription>
                <p className="text-sm text-gray-500 mt-2">- Sarah K., International Student</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardTitle className="text-lg">Perfect Cultural Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  "The cultural training modules prepared me perfectly for my move to Ghana. Highly recommended!"
                </CardDescription>
                <p className="text-sm text-gray-500 mt-2">- Michael T., Expatriate</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardTitle className="text-lg">Life-Changing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  "I found my community through Eshu. The events and connections I've made are invaluable."
                </CardDescription>
                <p className="text-sm text-gray-500 mt-2">- Emma L., Digital Nomad</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section - Only show to non-logged in users */}
      {!user && (
        <section className="py-16 px-4 bg-gradient-to-r from-orange-100 to-yellow-100">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of people who have made Ghana their home with Eshu's guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" className="ghana-gradient">
                  Join Our Community
                </Button>
              </Link>
              <Link to="/buddy-signup">
                <Button size="lg" variant="outline">
                  Become a Cultural Buddy
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Index;
