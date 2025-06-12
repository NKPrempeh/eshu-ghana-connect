
import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Camera, Star } from "lucide-react";
import { EventMap } from "@/components/events/EventMap";

const EventsAndPlaces = () => {
  const [selectedLocation, setSelectedLocation] = useState<{title: string; location: string} | null>(null);

  const places = [
    {
      name: "Cape Coast Castle",
      description: "Historic slave fort and UNESCO World Heritage site with deep cultural significance.",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "Cape Coast, Central Region",
      rating: 4.8
    },
    {
      name: "Kakum National Park",
      description: "Experience the famous canopy walkway through pristine rainforest.",
      image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "Central Region",
      rating: 4.7
    },
    {
      name: "Elmina Castle",
      description: "Another UNESCO site, one of the oldest European buildings in sub-Saharan Africa.",
      image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "Elmina, Central Region",
      rating: 4.6
    },
    {
      name: "Lake Volta",
      description: "One of the world's largest artificial lakes, perfect for boat trips and fishing.",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "Eastern Region",
      rating: 4.5
    }
  ];

  const events = [
    {
      name: "Homowo Festival",
      date: "August 2024",
      description: "Traditional harvest festival celebrated by the Ga people in Accra.",
      type: "Cultural Festival",
      location: "Accra, Greater Accra"
    },
    {
      name: "Chale Wote Street Art Festival",
      date: "August 2024",
      description: "Contemporary art festival in Jamestown, showcasing local and international artists.",
      type: "Art & Culture",
      location: "Jamestown, Accra"
    },
    {
      name: "Aboakyer Festival",
      date: "May 2024",
      description: "Deer hunting festival celebrated by the people of Winneba.",
      type: "Traditional Festival",
      location: "Winneba, Central Region"
    },
    {
      name: "Ghana Music Awards",
      date: "June 2024",
      description: "Annual awards ceremony celebrating Ghanaian music and artists.",
      type: "Music & Entertainment",
      location: "Accra International Conference Centre"
    }
  ];

  const handleViewOnMap = (name: string, location: string) => {
    setSelectedLocation({ title: name, location });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 kente-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Discover Ghana
              <span className="block text-primary mt-2">Events & Beautiful Places</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Explore the rich culture, stunning landscapes, and vibrant events that make Ghana special.
            </p>
          </div>
        </div>
      </section>

      {/* Places to Visit */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 ghana-gradient rounded-lg flex items-center justify-center">
              <MapPin className="text-white" size={24} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Places to Visit</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {places.map((place, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={place.image} 
                    alt={place.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                    <Star className="text-yellow-500" size={16} />
                    <span className="text-sm font-medium">{place.rating}</span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {place.name}
                    <MapPin size={16} className="text-primary" />
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-600">
                    {place.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{place.description}</p>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => handleViewOnMap(place.name, place.location)}
                    >
                      <MapPin className="mr-2" size={16} />
                      View on Map
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Camera className="mr-2" size={16} />
                      Gallery
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 ghana-gradient rounded-lg flex items-center justify-center">
              <Calendar className="text-white" size={24} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Upcoming Events</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {events.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{event.name}</CardTitle>
                      <CardDescription className="text-primary font-medium">
                        {event.type}
                      </CardDescription>
                      <CardDescription className="text-sm text-gray-600 mt-1">
                        {event.location}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">{event.date}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  <div className="flex gap-2">
                    <Button 
                      variant="ghost" 
                      className="text-primary hover:text-primary flex-1"
                      onClick={() => handleViewOnMap(event.name, event.location)}
                    >
                      <MapPin className="mr-2" size={16} />
                      View Location
                    </Button>
                    <Button variant="ghost" className="text-primary hover:text-primary flex-1">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-yellow-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Explore Ghana?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join our community and get personalized recommendations for places and events.
          </p>
          <Button size="lg" variant="secondary">
            Get Started with Eshu
          </Button>
        </div>
      </section>

      {selectedLocation && (
        <EventMap
          title={selectedLocation.title}
          location={selectedLocation.location}
          onClose={() => setSelectedLocation(null)}
        />
      )}
    </div>
  );
};

export default EventsAndPlaces;
