
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, X } from "lucide-react";

interface EventMapProps {
  location: string;
  title: string;
  onClose: () => void;
}

export const EventMap = ({ location, title, onClose }: EventMapProps) => {
  // Precise GPS coordinates for Ghana locations
  const getLocationCoordinates = (location: string) => {
    const locationMap: { [key: string]: { lat: number; lng: number; zoom: number } } = {
      // Greater Accra Region
      "Accra, Greater Accra": { lat: 5.6037, lng: -0.1870, zoom: 12 },
      "Labadi, Accra": { lat: 5.5502, lng: -0.1528, zoom: 14 },
      "Osu, Accra": { lat: 5.5558, lng: -0.1720, zoom: 14 },
      
      // Central Region
      "Cape Coast, Central Region": { lat: 5.1053, lng: -1.2466, zoom: 13 },
      "Elmina, Central Region": { lat: 5.0833, lng: -1.3500, zoom: 14 },
      "Winneba, Central Region": { lat: 5.3511, lng: -0.6136, zoom: 13 },
      
      // Western Region
      "Western Region": { lat: 4.8981, lng: -2.2504, zoom: 9 },
      "Takoradi, Western Region": { lat: 4.8845, lng: -1.7554, zoom: 12 },
      
      // Ashanti Region
      "Kumasi, Ashanti Region": { lat: 6.6885, lng: -1.6244, zoom: 12 },
      
      // Default Ghana center
      "Ghana": { lat: 7.9465, lng: -1.0232, zoom: 6 }
    };

    // Find exact match first
    if (locationMap[location]) {
      return locationMap[location];
    }

    // Try partial matches
    for (const [key, coords] of Object.entries(locationMap)) {
      if (location.toLowerCase().includes(key.toLowerCase()) || key.toLowerCase().includes(location.toLowerCase())) {
        return coords;
      }
    }

    // Default to Ghana center
    return locationMap["Ghana"];
  };

  const coords = getLocationCoordinates(location);
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${coords.lng-0.01},${coords.lat-0.01},${coords.lng+0.01},${coords.lat+0.01}&layer=mapnik&marker=${coords.lat},${coords.lng}`;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-hidden">
        <CardHeader className="border-b">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl flex items-center gap-2">
                <MapPin className="text-primary" size={20} />
                {title}
              </CardTitle>
              <p className="text-gray-600 mt-1">{location}</p>
              <p className="text-sm text-gray-500 mt-1">
                GPS: {coords.lat.toFixed(4)}°N, {Math.abs(coords.lng).toFixed(4)}°W
              </p>
            </div>
            <Button variant="outline" size="sm" onClick={onClose}>
              <X size={16} />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="h-96 bg-gray-100 flex items-center justify-center">
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map showing ${location}`}
            />
          </div>
          <div className="p-6">
            <h4 className="font-semibold mb-2">Location Details</h4>
            <p className="text-gray-600 mb-4">
              {location} - This location is easily accessible by public transportation and offers great cultural experiences. 
              Precise GPS coordinates provided for accurate navigation.
            </p>
            <div className="flex gap-4">
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${coords.lat},${coords.lng}`, '_blank')}
              >
                Open in Google Maps
              </Button>
              <Button className="flex-1 ghana-gradient">
                Save Location
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
