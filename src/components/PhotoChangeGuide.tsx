
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Image, ExternalLink, Code, FileText } from "lucide-react";
import { useState } from "react";

export const PhotoChangeGuide = () => {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) {
    return (
      <Button 
        onClick={() => setIsOpen(true)}
        variant="outline" 
        className="fixed bottom-4 right-4 z-40 bg-white shadow-lg"
      >
        <Image size={16} className="mr-2" />
        Photo Guide
      </Button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-2xl max-h-[80vh] overflow-y-auto">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>How to Change Photos</span>
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
              ×
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2 flex items-center">
                <FileText size={16} className="mr-2" />
                Events & Places Photos
              </h3>
              <p className="text-sm text-blue-700 mb-2">
                Photos are stored in the Supabase database. To change them:
              </p>
              <ol className="text-sm text-blue-700 space-y-1 ml-4 list-decimal">
                <li>Go to your Supabase dashboard</li>
                <li>Navigate to Table Editor</li>
                <li>Find tables: events_places, festivals, food, entertainment, etc.</li>
                <li>Update the image_url column with new photo URLs</li>
              </ol>
            </div>

            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2 flex items-center">
                <Code size={16} className="mr-2" />
                Home Page Gallery
              </h3>
              <p className="text-sm text-green-700 mb-2">
                Gallery images are in the code. To change them:
              </p>
              <code className="text-xs bg-white p-2 rounded block text-green-800">
                src/components/home/GallerySection.tsx
              </code>
              <p className="text-xs text-green-600 mt-1">
                Look for the galleryImages array and replace URLs
              </p>
            </div>

            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-2">
                Recommended Image Sources
              </h3>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• Unsplash.com (free stock photos)</li>
                <li>• Your own hosted images</li>
                <li>• Ghana tourism board photos</li>
                <li>• Cultural event photography</li>
              </ul>
            </div>
          </div>

          <div className="flex gap-2">
            <Button asChild variant="outline" size="sm">
              <a href="https://supabase.com/dashboard" target="_blank" rel="noopener noreferrer">
                <ExternalLink size={14} className="mr-1" />
                Supabase Dashboard
              </a>
            </Button>
            <Button onClick={() => setIsOpen(false)} size="sm">
              Got it!
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
