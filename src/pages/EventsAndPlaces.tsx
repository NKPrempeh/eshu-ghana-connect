
import { useState } from "react";
import Navigation from "@/components/Navigation";
import { EventCard } from "@/components/events/EventCard";

const EventsAndPlaces = () => {
  const [events] = useState([
    {
      id: 1,
      title: "Adae Festival",
      description: "Traditional Ashanti festival celebrating the ancestors with drumming, dancing, and traditional foods.",
      location: "Manhyia Palace, Kumasi",
      date: "2024-01-15",
      time: "6:00 AM - 6:00 PM",
      category: "cultural",
      attendees: 500,
      // TO CHANGE THIS IMAGE: Replace the URL below with your desired image
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      // TO ADD MORE GALLERY IMAGES: Add URLs to this array
      gallery: [
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 2,
      title: "Cape Coast Castle Tour",
      description: "Historical tour of the famous slave castle with guided educational sessions about Ghana's history.",
      location: "Cape Coast Castle, Cape Coast",
      date: "2024-01-20",
      time: "9:00 AM - 4:00 PM",
      category: "educational",
      attendees: 150,
      // TO CHANGE THIS IMAGE: Replace the URL below
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      // TO ADD GALLERY IMAGES: Add URLs here
      gallery: [
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 3,
      title: "Homowo Festival",
      description: "Ga traditional festival celebrating the harvest season with kpokpoi (traditional food) and cultural displays.",
      location: "La Beach, Accra",
      date: "2024-02-10",
      time: "8:00 AM - 10:00 PM",
      category: "festival",
      attendees: 1000,
      // TO CHANGE THIS IMAGE: Replace the URL below
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&h=600&fit=crop",
      // TO ADD GALLERY IMAGES: Add URLs here
      gallery: [
        "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 4,
      title: "Kumasi Market Experience",
      description: "Guided tour of Kejetia Market, one of West Africa's largest markets, with cultural shopping experience.",
      location: "Kejetia Market, Kumasi",
      date: "2024-02-15",
      time: "10:00 AM - 2:00 PM",
      category: "social",
      attendees: 80,
      // TO CHANGE THIS IMAGE: Replace the URL below
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      // TO ADD GALLERY IMAGES: Add URLs here
      gallery: [
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&h=600&fit=crop"
      ]
    }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Events & Places
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover cultural events, festivals, and must-visit places in Ghana. Connect with your new community through shared experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsAndPlaces;
