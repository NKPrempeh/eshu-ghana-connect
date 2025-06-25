
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin, Users, Clock, Edit2, Hotel, Utensils, Camera, MapIcon } from "lucide-react";
import { EventCard } from "@/components/events/EventCard";
import { supabase } from "@/integrations/supabase/client";

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  image_url?: string;
  description?: string;
  category?: string;
  price_range?: string;
}

const EventsAndPlaces = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  // Enhanced events with real Ghana images and categories
  const sampleEvents: Event[] = [
    // Cultural Festivals
    {
      id: 1,
      title: "Homowo Festival",
      date: "2024-08-15",
      location: "Accra, Greater Accra",
      image_url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500",
      description: "Traditional Ga festival celebrating the harvest season with food, music, and dance.",
      category: "festivals"
    },
    {
      id: 2,
      title: "Aboakyir Festival",
      date: "2024-05-04",
      location: "Winneba, Central Region", 
      image_url: "https://images.unsplash.com/photo-1619451334792-150bdfc4c2b4?w=500",
      description: "Annual deer hunting festival celebrated by the people of Winneba.",
      category: "festivals"
    },
    {
      id: 3,
      title: "Kundum Festival",
      date: "2024-09-20",
      location: "Western Region",
      image_url: "https://images.unsplash.com/photo-1580656449271-1942e7e8a5c9?w=500",
      description: "Harvest festival of the Ahanta and Nzema people with traditional drumming and dancing.",
      category: "festivals"
    },
    
    // Hotels
    {
      id: 4,
      title: "Labadi Beach Hotel",
      date: "2024-12-31",
      location: "Accra, Greater Accra",
      image_url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500",
      description: "Luxury beachfront hotel with stunning ocean views and world-class amenities.",
      category: "hotels",
      price_range: "expensive"
    },
    {
      id: 5,
      title: "Kempinski Hotel Gold Coast City",
      date: "2024-12-31",
      location: "Accra, Greater Accra",
      image_url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500",
      description: "Five-star luxury hotel in the heart of Accra with premium facilities.",
      category: "hotels",
      price_range: "expensive"
    },
    {
      id: 6,
      title: "African Regent Hotel",
      date: "2024-12-31",
      location: "Accra, Greater Accra",
      image_url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500",
      description: "Mid-range hotel offering comfort and convenience in central Accra.",
      category: "hotels",
      price_range: "moderate"
    },

    // Food Places
    {
      id: 7,
      title: "Skybar 25",
      date: "2024-12-31",
      location: "Accra, Greater Accra",
      image_url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500",
      description: "Upscale rooftop restaurant with panoramic city views and international cuisine.",
      category: "food",
      price_range: "expensive"
    },
    {
      id: 8,
      title: "Azmera Restaurant",
      date: "2024-12-31",
      location: "Accra, Greater Accra",
      image_url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500",
      description: "Authentic Ghanaian cuisine in a cozy traditional setting.",
      category: "food",
      price_range: "moderate"
    },
    {
      id: 9,
      title: "Chop Bar Express",
      date: "2024-12-31",
      location: "Various Locations",
      image_url: "https://images.unsplash.com/photo-1609501676725-7186f425b4ba?w=500",
      description: "Local street food and traditional dishes at affordable prices.",
      category: "food",
      price_range: "budget"
    },

    // Art & Entertainment
    {
      id: 10,
      title: "National Theatre of Ghana",
      date: "2024-12-31",
      location: "Accra, Greater Accra",
      image_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500",
      description: "Premier venue for theatrical performances, concerts, and cultural events.",
      category: "entertainment"
    },
    {
      id: 11,
      title: "Centre for National Culture",
      date: "2024-12-31",
      location: "Kumasi, Ashanti Region",
      image_url: "https://images.unsplash.com/photo-1583048791286-48c6b38f2ea7?w=500",
      description: "Cultural center showcasing traditional crafts, art, and performances.",
      category: "art"
    },

    // Places to Visit
    {
      id: 12,
      title: "Cape Coast Castle",
      date: "2024-12-31",
      location: "Cape Coast, Central Region",
      image_url: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=500",
      description: "Historic fort and UNESCO World Heritage site with significant cultural importance.",
      category: "places"
    },
    {
      id: 13,
      title: "Kakum National Park",
      date: "2024-12-31",
      location: "Central Region",
      image_url: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=500",
      description: "Tropical rainforest with canopy walkway and diverse wildlife.",
      category: "places"
    },
    {
      id: 14,
      title: "Elmina Castle",
      date: "2024-12-31",
      location: "Elmina, Central Region",
      image_url: "https://images.unsplash.com/photo-1571734777744-1ce4d40fcc01?w=500",
      description: "First European building constructed in sub-Saharan Africa, rich in history.",
      category: "places"
    }
  ];

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const { data, error } = await supabase
        .from('events_places')
        .select('*')
        .order('date', { ascending: true });

      if (error) {
        console.error('Error fetching events:', error);
        setEvents(sampleEvents);
      } else if (data && data.length > 0) {
        setEvents(data);
      } else {
        setEvents(sampleEvents);
      }
    } catch (error) {
      console.error('Error fetching events:', error);
      setEvents(sampleEvents);
    }
    setLoading(false);
  };

  const filterEventsByCategory = (category: string) => {
    return events.filter(event => event.category === category);
  };

  const filterEventsByPriceRange = (priceRange: string) => {
    return events.filter(event => event.price_range === priceRange);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">Loading events...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Events & Places in Ghana
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover cultural festivals, hotels, restaurants, entertainment venues, and must-visit places throughout Ghana.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-6">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="festivals">Festivals</TabsTrigger>
            <TabsTrigger value="hotels">Hotels</TabsTrigger>
            <TabsTrigger value="food">Food</TabsTrigger>
            <TabsTrigger value="entertainment">Entertainment</TabsTrigger>
            <TabsTrigger value="places">Places</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="festivals">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterEventsByCategory('festivals').map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="hotels">
            <div className="mb-4">
              <div className="flex gap-2 mb-4">
                <Badge variant="outline">Expensive</Badge>
                <Badge variant="outline">Moderate</Badge>
                <Badge variant="outline">Budget</Badge>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterEventsByCategory('hotels').map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="food">
            <div className="mb-4">
              <div className="flex gap-2 mb-4">
                <Badge variant="outline">Expensive ($$$)</Badge>
                <Badge variant="outline">Moderate ($$)</Badge>
                <Badge variant="outline">Budget ($)</Badge>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterEventsByCategory('food').map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="entertainment">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterEventsByCategory('entertainment').concat(filterEventsByCategory('art')).map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="places">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterEventsByCategory('places').map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {events.length === 0 && (
          <div className="text-center py-12">
            <Calendar className="mx-auto mb-4 text-gray-400" size={48} />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No Events Found</h3>
            <p className="text-gray-500">Check back later for upcoming cultural events and festivals.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsAndPlaces;
