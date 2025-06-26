import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Clock, Image } from "lucide-react";
import { EventMap } from "./EventMap";
import { EventReservation } from "./EventReservation";

interface Event {
  id: number;
  title: string;
  description?: string;
  location: string;
  date: string;
  time?: string;
  category?: string;
  attendees?: number;
  image?: string;
  image_url?: string;
  gallery?: string[];
}

interface EventCardProps {
  event: Event;
}

export const EventCard = ({ event }: EventCardProps) => {
  const [showMap, setShowMap] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [showReservation, setShowReservation] = useState(false);

  const getCategoryColor = (category?: string) => {
    if (!category) return 'bg-gray-100 text-gray-800';
    switch (category.toLowerCase()) {
      case 'cultural': return 'bg-orange-100 text-orange-800';
      case 'festival': return 'bg-purple-100 text-purple-800';
      case 'educational': return 'bg-blue-100 text-blue-800';
      case 'social': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Use image_url if available, fallback to image
  const eventImage = event.image_url || event.image || 'https://images.unsplash.com/photo-1578662996442-48f60103fc96';
  const eventDescription = event.description || 'Cultural event in Ghana';
  const eventTime = event.time || '6:00 PM';
  const eventCategory = event.category || 'Cultural';
  const eventAttendees = event.attendees || 50;

  return (
    <>
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={eventImage} 
            alt={event.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-2 right-2">
            <Badge className={getCategoryColor(eventCategory)}>
              {eventCategory}
            </Badge>
          </div>
          {event.gallery && event.gallery.length > 0 && (
            <Button
              size="sm"
              variant="secondary"
              className="absolute bottom-2 right-2 bg-white/90 hover:bg-white"
              onClick={() => setShowGallery(true)}
            >
              <Image size={16} className="mr-1" />
              +{event.gallery.length}
            </Button>
          )}
        </div>
        
        <CardHeader>
          <CardTitle className="text-xl">{event.title}</CardTitle>
          <CardDescription>{eventDescription}</CardDescription>
        </CardHeader>
        
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Calendar size={16} />
              <span>{event.date}</span>
              <Clock size={16} className="ml-2" />
              <span>{eventTime}</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin size={16} />
              <span>{event.location}</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Users size={16} />
              <span>{eventAttendees} attending</span>
            </div>
            
            <div className="flex gap-2 pt-2">
              <Button 
                className="flex-1 ghana-gradient"
                onClick={() => setShowReservation(true)}
              >
                Reserve Spot
              </Button>
              <Button 
                variant="outline"
                onClick={() => setShowMap(true)}
              >
                <MapPin size={16} />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {showMap && (
        <EventMap
          location={event.location}
          title={event.title}
          onClose={() => setShowMap(false)}
        />
      )}

      {showReservation && (
        <EventReservation
          event={event}
          onClose={() => setShowReservation(false)}
        />
      )}

      {showGallery && event.gallery && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-hidden">
            <div className="p-4 border-b flex items-center justify-between">
              <h3 className="text-lg font-semibold">{event.title} - Gallery</h3>
              <Button variant="ghost" size="sm" onClick={() => setShowGallery(false)}>
                ×
              </Button>
            </div>
            <div className="p-4 max-h-[80vh] overflow-y-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {event.gallery.map((image, index) => (
                  <div key={index} className="aspect-square overflow-hidden rounded-lg">
                    <img 
                      src={image} 
                      alt={`${event.title} - Image ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
