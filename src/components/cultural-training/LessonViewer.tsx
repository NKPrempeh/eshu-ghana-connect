
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X, ChevronRight, ChevronLeft, CheckCircle, Sparkles, ChevronDown, ChevronUp } from "lucide-react";
import { Lesson } from "@/types/cultural-training";
import { getLessonContent } from "./LessonContent";

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

  const scrollToTop = () => {
    const viewport = document.querySelector('[data-radix-scroll-area-viewport]');
    if (viewport) {
      viewport.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToBottom = () => {
    const viewport = document.querySelector('[data-radix-scroll-area-viewport]');
    if (viewport) {
      viewport.scrollTo({ top: viewport.scrollHeight, behavior: 'smooth' });
    }
  };

  const currentContent = getLessonContent(lesson.id, currentStep);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        <CardHeader className="border-b flex-shrink-0">
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
        
        <div className="flex-1 flex flex-col min-h-0 relative">
          {!isCompleted ? (
            <>
              <div className="flex-1 overflow-hidden relative">
                <ScrollArea className="h-full">
                  <div className="px-8 py-6 space-y-6">
                    <div className="prose max-w-none">
                      <h3 className="text-xl font-semibold mb-4">
                        {currentContent.title}
                      </h3>
                      <div className="space-y-4">
                        {currentContent.content}
                      </div>
                    </div>
                  </div>
                </ScrollArea>
                
                {/* Scroll control buttons */}
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={scrollToTop}
                    className="bg-white/90 hover:bg-white shadow-lg"
                    title="Scroll to top"
                  >
                    <ChevronUp size={16} />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={scrollToBottom}
                    className="bg-white/90 hover:bg-white shadow-lg"
                    title="Scroll to bottom"
                  >
                    <ChevronDown size={16} />
                  </Button>
                </div>
              </div>
              
              <div className="flex-shrink-0 px-8 py-6 border-t bg-gray-50">
                <div className="flex justify-between items-center">
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
            </>
          ) : (
            <CardContent className="flex-1 flex items-center justify-center">
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
            </CardContent>
          )}
        </div>
      </Card>
    </div>
  );
};
