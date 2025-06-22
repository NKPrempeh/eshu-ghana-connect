
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Clock, Edit2 } from "lucide-react";
import { EventCard } from "@/components/events/EventCard";
import { supabase } from "@/integrations/supabase/client";

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  image_url?: string;
  description?: string;
}

const EventsAndPlaces = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  // Sample events with real Ghana festival images
  const sampleEvents: Event[] = [
    {
      id: 1,
      title: "Homowo Festival",
      date: "2024-08-15",
      location: "Accra, Greater Accra",
      image_url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
      description: "Traditional Ga festival celebrating the harvest season with food, music, and dance."
    },
    {
      id: 2,
      title: "Aboakyir Festival",
      date: "2024-05-04",
      location: "Winneba, Central Region",
      image_url: "https://images.unsplash.com/photo-1619451334792-150bdfc4c2b4",
      description: "Annual deer hunting festival celebrated by the people of Winneba."
    },
    {
      id: 3,
      title: "Kundum Festival",
      date: "2024-09-20",
      location: "Western Region",
      image_url: "https://images.unsplash.com/photo-1580656449271-1942e7e8a5c9",
      description: "Harvest festival of the Ahanta and Nzema people with traditional drumming and dancing."
    },
    {
      id: 4,
      title: "Yam Festival",
      date: "2024-09-05",
      location: "Northern Region",
      image_url: "https://images.unsplash.com/photo-1609501676725-7186f425b4ba",
      description: "Annual celebration of the yam harvest with traditional music and feasting."
    },
    {
      id: 5,
      title: "Adae Kese Festival",
      date: "2024-10-12",
      location: "Kumasi, Ashanti Region",
      image_url: "https://images.unsplash.com/photo-1583048791286-48c6b38f2ea7",
      description: "Important Ashanti festival honoring ancestors with traditional ceremonies."
    },
    {
      id: 6,
      title: "Cape Coast Festival",
      date: "2024-07-30",
      location: "Cape Coast, Central Region",
      image_url: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
      description: "Cultural festival celebrating the heritage of Cape Coast with music and arts."
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
            Discover cultural festivals, traditional celebrations, and must-visit places throughout Ghana.
          </p>
        </div>

        {/* How to Update Images Guide */}
        <Card className="mb-8 bg-blue-50 border-blue-200">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Edit2 className="text-blue-600" size={20} />
              <CardTitle className="text-blue-800">Update Event Images</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-blue-700 mb-2">
              To update event images with real Ghana festival photos:
            </p>
            <ol className="text-sm text-blue-700 list-decimal list-inside space-y-1">
              <li>Go to <code className="bg-blue-100 px-2 py-1 rounded">src/pages/EventsAndPlaces.tsx</code></li>
              <li>Update the image URLs in the <code className="bg-blue-100 px-2 py-1 rounded">sampleEvents</code> array</li>
              <li>Use high-quality images from Unsplash or upload your own to the public folder</li>
            </ol>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

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
