
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Edit, Maximize2 } from "lucide-react";

interface GalleryItem {
  id: number;
  image: string;
  title: string;
  location: string;
  category: string;
  description: string;
}

const galleryImages: GalleryItem[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
    title: "Kakum National Park",
    location: "Central Region",
    category: "Nature",
    description: "Explore the famous canopy walkway and pristine rainforest"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
    title: "Mole National Park",
    location: "Northern Region", 
    category: "Wildlife",
    description: "Ghana's largest wildlife refuge with elephants and antelopes"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
    title: "Larabanga Mosque",
    location: "Northern Region",
    category: "Culture",
    description: "Ghana's oldest mosque, built in the Sudanese architectural style"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1609501676725-7186f425b4ba",
    title: "Ghanaian Jollof Rice",
    location: "Nationwide",
    category: "Food",
    description: "Experience authentic Ghanaian dishes and local ingredients"
  }
];

export const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [showEditTip, setShowEditTip] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const currentImage = galleryImages[currentIndex];

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Discover Ghana's Beauty
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From pristine national parks to ancient cultural sites, explore the diverse landscapes and rich heritage of Ghana.
          </p>
        </div>

        {/* Photo Editing Tip */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 max-w-2xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Edit className="text-blue-600" size={20} />
              <div>
                <h4 className="font-semibold text-blue-800">How to Update Gallery Images</h4>
                <p className="text-sm text-blue-700">
                  To change any image: Go to <code className="bg-blue-100 px-2 py-1 rounded">src/components/home/GallerySection.tsx</code> 
                  and update the image URLs in the <code className="bg-blue-100 px-2 py-1 rounded">galleryImages</code> array.
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowEditTip(!showEditTip)}
            >
              {showEditTip ? '−' : '+'}
            </Button>
          </div>
          
          {showEditTip && (
            <div className="mt-4 p-4 bg-blue-100 rounded-lg">
              <h5 className="font-medium text-blue-800 mb-2">Example Image Sources:</h5>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• <strong>Unsplash:</strong> https://unsplash.com/s/photos/ghana</li>
                <li>• <strong>Local files:</strong> Place images in public/ folder and use "/image-name.jpg"</li>
                <li>• <strong>External URLs:</strong> Any valid image URL from the web</li>
              </ul>
              <p className="text-xs text-blue-600 mt-2">
                💡 Tip: Always use high-quality images (at least 800x600px) for best results
              </p>
            </div>
          )}
        </div>

        {/* Main Gallery */}
        <div className="relative max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-2xl">
            <div className="relative h-96 md:h-[500px]">
              <img
                src={currentImage.image}
                alt={currentImage.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              
              {/* Navigation Buttons */}
              <Button
                variant="secondary"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
                onClick={prevImage}
              >
                <ChevronLeft size={20} />
              </Button>
              
              <Button
                variant="secondary"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
                onClick={nextImage}
              >
                <ChevronRight size={20} />
              </Button>

              {/* Image Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-start justify-between">
                  <div>
                    <Badge className="mb-2 bg-white/20 text-white border-white/30">
                      {currentImage.category}
                    </Badge>
                    <h3 className="text-2xl font-bold mb-1">{currentImage.title}</h3>
                    <p className="text-white/90 mb-2">{currentImage.location}</p>
                    <p className="text-sm text-white/80">{currentImage.description}</p>
                  </div>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                    onClick={() => setSelectedImage(currentImage)}
                  >
                    <Maximize2 size={16} />
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-primary scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Grid View */}
        <div className="grid md:grid-cols-4 gap-4 mt-12">
          {galleryImages.map((item, index) => (
            <Card 
              key={item.id} 
              className={`cursor-pointer transition-all hover:shadow-lg ${
                index === currentIndex ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-3">
                  <h4 className="font-semibold text-sm">{item.title}</h4>
                  <p className="text-xs text-gray-600">{item.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Full Screen Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50">
          <div className="max-w-6xl max-h-[90vh] relative">
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain"
            />
            <Button
              variant="secondary"
              size="icon"
              className="absolute top-4 right-4 bg-white/90 hover:bg-white"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </Button>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold">{selectedImage.title}</h3>
              <p className="text-white/90">{selectedImage.location}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
