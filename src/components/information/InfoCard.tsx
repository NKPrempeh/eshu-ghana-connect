
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Phone, Mail, MapPin } from "lucide-react";

interface InfoItem {
  id: number;
  title: string;
  description: string;
  category: string;
  urgency: string;
  contact?: {
    phone?: string;
    email?: string;
    website?: string;
    address?: string;
  };
  links?: {
    label: string;
    url: string;
  }[];
}

interface InfoCardProps {
  item: InfoItem;
}

export const InfoCard = ({ item }: InfoCardProps) => {
  const getUrgencyColor = (urgency: string) => {
    switch (urgency.toLowerCase()) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'healthcare': return 'bg-blue-100 text-blue-800';
      case 'legal': return 'bg-purple-100 text-purple-800';
      case 'education': return 'bg-indigo-100 text-indigo-800';
      case 'emergency': return 'bg-red-100 text-red-800';
      case 'transport': return 'bg-orange-100 text-orange-800';
      case 'housing': return 'bg-teal-100 text-teal-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className={`hover:shadow-lg transition-all duration-300 border-l-4 ${getUrgencyColor(item.urgency)}`}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg">{item.title}</CardTitle>
          <div className="flex gap-2">
            <Badge className={getCategoryColor(item.category)}>
              {item.category}
            </Badge>
            <Badge variant="outline" className={getUrgencyColor(item.urgency)}>
              {item.urgency} Priority
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <p className="text-gray-700 mb-4">{item.description}</p>
        
        {item.contact && (
          <div className="space-y-2 mb-4">
            <h4 className="font-medium text-sm">Contact Information:</h4>
            <div className="grid gap-2">
              {item.contact.phone && (
                <div className="flex items-center gap-2 text-sm">
                  <Phone size={16} className="text-blue-600" />
                  <a href={`tel:${item.contact.phone}`} className="text-blue-600 hover:underline">
                    {item.contact.phone}
                  </a>
                </div>
              )}
              {item.contact.email && (
                <div className="flex items-center gap-2 text-sm">
                  <Mail size={16} className="text-green-600" />
                  <a href={`mailto:${item.contact.email}`} className="text-green-600 hover:underline">
                    {item.contact.email}
                  </a>
                </div>
              )}
              {item.contact.address && (
                <div className="flex items-center gap-2 text-sm">
                  <MapPin size={16} className="text-orange-600" />
                  <span className="text-gray-700">{item.contact.address}</span>
                </div>
              )}
              {item.contact.website && (
                <div className="flex items-center gap-2 text-sm">
                  <ExternalLink size={16} className="text-purple-600" />
                  <a 
                    href={item.contact.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:underline"
                  >
                    Visit Website
                  </a>
                </div>
              )}
            </div>
          </div>
        )}

        {item.links && item.links.length > 0 && (
          <div className="space-y-2">
            <h4 className="font-medium text-sm">Additional Resources:</h4>
            <div className="flex flex-wrap gap-2">
              {item.links.map((link, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  asChild
                >
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    {link.label}
                    <ExternalLink size={14} />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
