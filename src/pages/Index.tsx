import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, Compass, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
      <Navigation />

      {/* Hero Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Welcome to Eshu!
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Your guide to Ghanaian culture, community, and connection.
              </p>
              <div className="space-x-4">
                <Link to="/cultural-training">
                  <Button className="bg-primary text-white hover:bg-primary/80">
                    Start Learning
                  </Button>
                </Link>
                <Link to="/buddy-system">
                  <Button variant="outline">Find a Buddy</Button>
                </Link>
              </div>
            </div>
            <div>
              <img
                src="/hero-image.svg"
                alt="Ghanaian culture"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explore Our Features
            </h2>
            <p className="text-xl text-gray-600">
              Discover how Eshu can help you connect with Ghanaian culture and
              community
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarDays className="text-primary" size={24} />
                  Events & Places
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Find local events, festivals, and cultural sites to explore.
                </CardDescription>
                <Link to="/events-places">
                  <Button variant="secondary" className="mt-4">
                    Explore Events
                  </Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Compass className="text-primary" size={24} />
                  Cultural Training
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Learn about Ghanaian customs, traditions, and etiquette.
                </CardDescription>
                <Link to="/cultural-training">
                  <Button variant="secondary" className="mt-4">
                    Start Learning
                  </Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="text-primary" size={24} />
                  Buddy System
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Connect with locals and other newcomers for support.
                </CardDescription>
                <Link to="/buddy-system">
                  <Button variant="secondary" className="mt-4">
                    Find a Buddy
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cultural Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cultural Gallery</h2>
            <p className="text-xl text-gray-600">Discover the beauty and richness of Ghanaian culture</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop&auto=format"
                  alt="Traditional Ghanaian kente cloth weaving"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold mt-4 text-gray-900">Kente Cloth Weaving</h3>
              <p className="text-gray-600">Traditional handwoven textile art from Ghana</p>
            </div>

            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=300&fit=crop&auto=format"
                  alt="African drummers performing traditional music"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold mt-4 text-gray-900">Traditional Music</h3>
              <p className="text-gray-600">Experience the rhythms of Ghanaian drums and dance</p>
            </div>

            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=500&h=300&fit=crop&auto=format"
                  alt="Ghanaian market with colorful produce"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold mt-4 text-gray-900">Local Markets</h3>
              <p className="text-gray-600">Vibrant marketplaces filled with fresh produce and goods</p>
            </div>

            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1541971875076-8f970d573be6?w=500&h=300&fit=crop&auto=format"
                  alt="Traditional Ghanaian architecture"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold mt-4 text-gray-900">Architecture</h3>
              <p className="text-gray-600">Beautiful traditional and colonial architecture</p>
            </div>

            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1571771710019-ca58cf80351d?w=500&h=300&fit=crop&auto=format"
                  alt="Traditional Ghanaian cuisine"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold mt-4 text-gray-900">Cuisine</h3>
              <p className="text-gray-600">Delicious traditional dishes and flavors</p>
            </div>

            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop&auto=format"
                  alt="Traditional Ghanaian festival celebration"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold mt-4 text-gray-900">Festivals</h3>
              <p className="text-gray-600">Colorful celebrations and cultural events</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-100 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500">
            &copy; 2024 Eshu. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
