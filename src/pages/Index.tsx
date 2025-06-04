
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Heart, Globe, Users, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Cultural Training",
      description: "Learn about Ghanaian customs, traditions, and daily life through interactive lessons.",
      link: "/cultural-training"
    },
    {
      icon: Users,
      title: "Buddy System",
      description: "Connect with local Ghanaians who can guide you through your integration journey.",
      link: "/buddy-system"
    },
    {
      icon: Globe,
      title: "Information Board",
      description: "Access essential information about visas, housing, healthcare, and more.",
      link: "/information-board"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 kente-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              Akwaaba to Ghana! 
              <span className="block text-primary mt-2">Welcome Home</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed animate-fade-in">
              Your journey to Ghana starts here. Eshu connects newcomers with the heart of Ghanaian culture, 
              helping you feel at home while discovering the beauty of our traditions and community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
              <Button asChild size="lg" className="ghana-gradient hover:opacity-90 transition-opacity">
                <Link to="/cultural-training">
                  Start Learning <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/buddy-system">
                  Find a Buddy <Heart className="ml-2" size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Everything You Need to Feel at Home
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary">
                <CardHeader>
                  <div className="w-12 h-12 ghana-gradient rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="text-white" size={24} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="ghost" className="w-full justify-start p-0 h-auto text-primary hover:text-primary">
                    <Link to={feature.link} className="flex items-center">
                      Explore <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-yellow-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of newcomers who have successfully integrated into Ghanaian society with Eshu.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/information-board">
              Get Started Today <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
