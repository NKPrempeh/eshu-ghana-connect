
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
      link: "/cultural-training",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: Users,
      title: "Buddy System",
      description: "Connect with local Ghanaians who can guide you through your integration journey.",
      link: "/buddy-system",
      image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: Globe,
      title: "Information Board",
      description: "Access essential information about visas, housing, healthcare, and more.",
      link: "/information-board",
      image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 kente-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
                Akwaaba to Ghana! 
                <span className="block text-primary mt-2">Welcome Home</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed animate-fade-in">
                Your journey to Ghana starts here. Eshu connects newcomers with the heart of Ghanaian culture, 
                helping you feel at home while discovering the beauty of our traditions and community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-in">
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
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Beautiful Ghanaian mosque architecture showcasing cultural heritage"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 ghana-gradient rounded-full opacity-20"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Gallery Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Experience Ghanaian Culture</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Immerse yourself in the rich traditions, vibrant festivals, and warm hospitality that define Ghana.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative overflow-hidden rounded-xl shadow-lg group">
              <img 
                src="https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Traditional Ghanaian desert landscape"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold text-lg">Northern Heritage</h3>
                <p className="text-sm opacity-90">Explore the beauty of northern Ghana</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-lg group">
              <img 
                src="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Historic Ghanaian castle under starry night sky"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold text-lg">Historic Sites</h3>
                <p className="text-sm opacity-90">Discover Ghana's rich history</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-lg group">
              <img 
                src="https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Beautiful Ghanaian mosque with traditional architecture"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold text-lg">Sacred Architecture</h3>
                <p className="text-sm opacity-90">Beautiful religious heritage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Everything You Need to Feel at Home
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute top-4 left-4 w-12 h-12 ghana-gradient rounded-lg flex items-center justify-center">
                    <feature.icon className="text-white" size={24} />
                  </div>
                </div>
                <CardHeader>
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
            <Link to="/signup">
              Get Started Today <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
