
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { X, ChevronRight, ChevronLeft, CheckCircle } from "lucide-react";
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
                  {lesson.content[currentStep]}
                </h3>
                
                {/* Add more detailed content based on lesson type */}
                {lesson.id === 1 && currentStep === 0 && (
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      Ghana is home to over 100 languages, but English is the official language used in education, government, and business.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li><strong>Twi (Akan)</strong> - Spoken by about 20% of the population, mainly in Ashanti and Eastern regions</li>
                      <li><strong>Ga</strong> - Primarily spoken in the Greater Accra region</li>
                      <li><strong>Ewe</strong> - Common in the Volta region</li>
                      <li><strong>Dagbani</strong> - Spoken in the Northern regions</li>
                    </ul>
                  </div>
                )}
                
                {lesson.id === 2 && currentStep === 0 && (
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      Ghanaian cuisine is rich and diverse, with each region having its own specialties. Staple foods include rice, yam, plantain, and cassava.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-orange-50 rounded-lg">
                        <h4 className="font-semibold text-orange-800">Popular Dishes</h4>
                        <ul className="text-sm text-orange-700 mt-2 space-y-1">
                          <li>• Jollof Rice - Spiced rice dish</li>
                          <li>• Fufu - Pounded cassava/yam</li>
                          <li>• Banku - Fermented corn dough</li>
                          <li>• Kelewele - Spiced fried plantain</li>
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
                )}

                {lesson.id === 3 && currentStep === 0 && (
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
                )}
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
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="text-green-600" size={40} />
              </div>
              <div>
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
