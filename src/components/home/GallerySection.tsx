
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
    image: "https://www.google.com/imgres?q=kakum%20national%20park&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F1%2F16%2FKakum.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FKakum_National_Park&docid=9lFWUbPHuzap8M&tbnid=-lcju-Xg7KLRrM&vet=12ahUKEwiF5MmDpo-OAxW8X0EAHUaSApEQM3oECBsQAA..i&w=1280&h=853&hcb=2&ved=2ahUKEwiF5MmDpo-OAxW8X0EAHUaSApEQM3oECBsQAA",
    title: "Kakum National Park",
    location: "Central Region",
    category: "Nature",
    description: "Explore the famous canopy walkway and pristine rainforest"
  },
  {
    id: 2,
    image: "data:image/jpeg;base64,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",
    title: "Mole National Park",
    location: "Northern Region", 
    category: "Wildlife",
    description: "Ghana's largest wildlife refuge with elephants and antelopes"
  },
  {
    id: 3,
    image: "data:image/jpeg;base64,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",
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
