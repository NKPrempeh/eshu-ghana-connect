
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
  // This is a placeholder map component. In a real implementation, you would integrate with a mapping service
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=-3.2,4.5,1.2,11.2&layer=mapnik&marker=5.6037,-0.1870`;

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
            </p>
            <div className="flex gap-4">
              <Button variant="outline" className="flex-1">
                Get Directions
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
