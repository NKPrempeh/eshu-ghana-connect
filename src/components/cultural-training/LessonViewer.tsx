
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { X, ChevronRight, ChevronLeft, CheckCircle, Sparkles } from "lucide-react";
import { Lesson } from "@/types/cultural-training";

interface LessonViewerProps {
  lesson: Lesson;
  onComplete: () => void;
  onClose: () => void;
}

export const LessonViewer = ({ lesson, onComplete, onClose }: LessonViewerProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  
  const progress = ((currentStep + 1) / lesson.content.length) * 100;

  // Detailed content for each lesson step
  const getLessonContent = (lessonId: number, step: number) => {
    const contentMap: { [key: number]: { [key: number]: any } } = {
      1: { // Languages lesson
        0: {
          title: "Ghana's Linguistic Diversity",
          content: (
            <div className="space-y-4">
              <p className="text-gray-700">
                Ghana is home to over 100 languages, but English is the official language used in education, government, and business.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Major Languages</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• <strong>Twi (Akan)</strong> - 20% of population</li>
                    <li>• <strong>Ga</strong> - Greater Accra region</li>
                    <li>• <strong>Ewe</strong> - Volta region</li>
                    <li>• <strong>Dagbani</strong> - Northern regions</li>
                  </ul>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Language Tips</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• English is widely spoken</li>
                    <li>• Learning basic Twi helps</li>
                    <li>• Each region has preferences</li>
                    <li>• Be patient with accents</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        },
        1: {
          title: "Basic Twi Phrases",
          content: (
            <div className="space-y-4">
              <p className="text-gray-700">Here are essential Twi phrases that will help you connect with locals:</p>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Greetings</h4>
                    <ul className="space-y-2 text-sm">
                      <li><strong>Maakye</strong> - Good morning</li>
                      <li><strong>Maaha</strong> - Good afternoon</li>
                      <li><strong>Maadwo</strong> - Good evening</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Courtesy</h4>
                    <ul className="space-y-2 text-sm">
                      <li><strong>Medaase</strong> - Thank you</li>
                      <li><strong>Kosɛ</strong> - Excuse me</li>
                      <li><strong>Mepa wo kyɛw</strong> - Please</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )
        },
        2: {
          title: "Communication Etiquette",
          content: (
            <div className="space-y-4">
              <p className="text-gray-700">Understanding Ghanaian communication styles:</p>
              <div className="grid gap-4">
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Do's</h4>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• Use both hands when greeting elders</li>
                    <li>• Speak softly and respectfully</li>
                    <li>• Allow others to finish speaking</li>
                    <li>• Show interest in family and health</li>
                  </ul>
                </div>
                <div className="p-4 bg-red-50 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Don'ts</h4>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• Don't rush conversations</li>
                    <li>• Avoid pointing with one finger</li>
                    <li>• Don't interrupt elders</li>
                    <li>• Don't discuss sensitive topics immediately</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        }
      },
      2: { // Food lesson
        0: {
          title: "Ghanaian Cuisine Basics",
          content: (
            <div className="space-y-4">
              <p className="text-gray-700">
                Ghanaian cuisine is rich and diverse, with each region having its own specialties. Staple foods include rice, yam, plantain, and cassava.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-orange-50 rounded-lg">
                  <h4 className="font-semibold text-orange-800">Popular Dishes</h4>
                  <ul className="text-sm text-orange-700 mt-2 space-y-1">
                    <li>• <strong>Jollof Rice</strong> - Spiced rice dish</li>
                    <li>• <strong>Fufu</strong> - Pounded cassava/yam</li>
                    <li>• <strong>Banku</strong> - Fermented corn dough</li>
                    <li>• <strong>Kelewele</strong> - Spiced fried plantain</li>
                  </ul>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-800">Dining Etiquette</h4>
                  <ul className="text-sm text-green-700 mt-2 space-y-1">
                    <li>• Wash hands before eating</li>
                    <li>• Use right hand for eating</li>
                    <li>• Share food with others</li>
                    <li>• Show appreciation to the cook</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        },
        1: {
          title: "Regional Specialties",
          content: (
            <div className="space-y-4">
              <p className="text-gray-700">Each region of Ghana has unique culinary traditions:</p>
              <div className="space-y-3">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800">Northern Ghana</h4>
                  <p className="text-sm text-blue-700">Known for Tuo Zaafi (TZ), shea butter dishes, and spicy stews with plenty of meat.</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-800">Ashanti Region</h4>
                  <p className="text-sm text-green-700">Famous for Fufu with light soup, Ampesi, and palm nut soup.</p>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <h4 className="font-semibold text-yellow-800">Coastal Areas</h4>
                  <p className="text-sm text-yellow-700">Seafood dishes, Banku with tilapia, and fresh fish preparations.</p>
                </div>
              </div>
            </div>
          )
        },
        2: {
          title: "Food Markets and Shopping",
          content: (
            <div className="space-y-4">
              <p className="text-gray-700">Learning to navigate Ghanaian markets and food shopping:</p>
              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-3">Market Tips</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>Bargaining:</strong> Expected in most markets, start at 50% of asking price
                  </div>
                  <div>
                    <strong>Best Times:</strong> Early morning for freshest produce
                  </div>
                  <div>
                    <strong>Payment:</strong> Carry small bills and coins
                  </div>
                  <div>
                    <strong>Relationships:</strong> Build rapport with regular vendors
                  </div>
                </div>
              </div>
            </div>
          )
        }
      },
      3: { // Music lesson
        0: {
          title: "Traditional Music and Dance",
          content: (
            <div className="space-y-4">
              <p className="text-gray-700">
                Music and dance are integral parts of Ghanaian culture, used for celebration, communication, and storytelling.
              </p>
              <div className="bg-gradient-to-r from-red-50 to-yellow-50 p-6 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-3">Traditional Instruments</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <strong>Drums:</strong> Djembe, Talking drums, Atumpan
                  </div>
                  <div>
                    <strong>String:</strong> Kora, Seperewa, Gonje
                  </div>
                  <div>
                    <strong>Wind:</strong> Atenteben (flute), Horns
                  </div>
                </div>
              </div>
            </div>
          )
        },
        1: {
          title: "Popular Music Genres",
          content: (
            <div className="space-y-4">
              <p className="text-gray-700">Ghana has a rich modern music scene:</p>
              <div className="space-y-3">
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-semibold text-purple-800">Highlife</h4>
                  <p className="text-sm text-purple-700">Ghana's signature genre, blending traditional rhythms with Western instruments.</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800">Hiplife</h4>
                  <p className="text-sm text-blue-700">Modern fusion of hip-hop and highlife, very popular among youth.</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-800">Afrobeats</h4>
                  <p className="text-sm text-green-700">Contemporary genre gaining international recognition.</p>
                </div>
              </div>
            </div>
          )
        },
        2: {
          title: "Music in Daily Life",
          content: (
            <div className="space-y-4">
              <p className="text-gray-700">How music integrates into Ghanaian social life:</p>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-3">Cultural Significance</h4>
                <ul className="space-y-2 text-sm text-yellow-700">
                  <li>• <strong>Ceremonies:</strong> Weddings, funerals, and festivals always feature music</li>
                  <li>• <strong>Communication:</strong> Talking drums convey messages across distances</li>
                  <li>• <strong>Social Events:</strong> Dancing is expected at most gatherings</li>
                  <li>• <strong>Religious:</strong> Gospel music is very popular in churches</li>
                </ul>
              </div>
            </div>
          )
        }
      }
    };

    return contentMap[lessonId]?.[step] || {
      title: lesson.content[step] || "Lesson Content",
      content: <p>Learn about {lesson.title.toLowerCase()}.</p>
    };
  };

  const handleNext = () => {
    if (currentStep < lesson.content.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    onComplete();
    onClose();
  };

  const currentContent = getLessonContent(lesson.id, currentStep);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-hidden">
        <CardHeader className="border-b">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl">{lesson.title}</CardTitle>
              <p className="text-sm text-gray-600 mt-1">
                Step {currentStep + 1} of {lesson.content.length}
              </p>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X size={20} />
            </Button>
          </div>
          <Progress value={progress} className="w-full mt-4" />
        </CardHeader>
        
        <CardContent className="p-8">
          {!isCompleted ? (
            <div className="space-y-6">
              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold mb-4">
                  {currentContent.title}
                </h3>
                {currentContent.content}
              </div>

              <div className="flex justify-between items-center pt-6 border-t">
                <Button 
                  variant="outline" 
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                >
                  <ChevronLeft size={16} className="mr-2" />
                  Previous
                </Button>
                
                <span className="text-sm text-gray-500">
                  {currentStep + 1} / {lesson.content.length}
                </span>
                
                <Button 
                  onClick={handleNext}
                  className="ghana-gradient"
                >
                  {currentStep === lesson.content.length - 1 ? 'Finish Lesson' : 'Next'}
                  <ChevronRight size={16} className="ml-2" />
                </Button>
              </div>
            </div>
          ) : (
            <div className="text-center space-y-6">
              <div className="relative">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto animate-bounce">
                  <CheckCircle className="text-green-600" size={40} />
                </div>
                <Sparkles className="absolute -top-2 -right-2 text-yellow-500 animate-pulse" size={24} />
                <Sparkles className="absolute -bottom-1 -left-2 text-yellow-500 animate-pulse" size={20} />
              </div>
              <div className="animate-fade-in">
                <h3 className="text-2xl font-bold text-green-800 mb-2">Lesson Complete!</h3>
                <p className="text-gray-600">
                  Congratulations! You've successfully completed "{lesson.title}".
                </p>
              </div>
              <div className="flex gap-4 justify-center">
                <Button variant="outline" onClick={onClose}>
                  Close
                </Button>
                <Button onClick={handleComplete} className="ghana-gradient">
                  Mark as Complete
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
