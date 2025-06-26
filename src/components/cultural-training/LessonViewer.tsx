
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { X, ChevronRight, ChevronLeft, CheckCircle, Sparkles } from "lucide-react";
import { Lesson } from "@/types/cultural-training";
import { ContentRenderer } from "./ContentRenderer";

interface LessonViewerProps {
  lesson: Lesson;
  onComplete: () => void;
  onClose: () => void;
}

interface ContentItem {
  type: "heading" | "text" | "list";
  content: string | string[];
}

export const LessonViewer = ({ lesson, onComplete, onClose }: LessonViewerProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  
  // Parse the lesson content as structured content
  const lessonContent = Array.isArray(lesson.content) 
    ? lesson.content as ContentItem[]
    : [];
  
  // Group content into steps (every 3-4 items per step for better pacing)
  const contentSteps: ContentItem[][] = [];
  const itemsPerStep = 4;
  
  for (let i = 0; i < lessonContent.length; i += itemsPerStep) {
    contentSteps.push(lessonContent.slice(i, i + itemsPerStep));
  }
  
  // If no steps, create one step with all content
  if (contentSteps.length === 0 && lessonContent.length > 0) {
    contentSteps.push(lessonContent);
  }
  
  const totalSteps = Math.max(contentSteps.length, 1);
  const progress = ((currentStep + 1) / totalSteps) * 100;

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
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

  const currentContent = contentSteps[currentStep] || [];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        <CardHeader className="border-b flex-shrink-0">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl">{lesson.title}</CardTitle>
              <p className="text-sm text-gray-600 mt-1">
                Step {currentStep + 1} of {totalSteps}
              </p>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X size={20} />
            </Button>
          </div>
          <Progress value={progress} className="w-full mt-4" />
        </CardHeader>
        
        <div className="flex-1 flex flex-col min-h-0">
          {!isCompleted ? (
            <>
              <div className="flex-1 overflow-hidden">
                <div className="h-full max-h-[400px] overflow-y-auto px-8 py-6">
                  <ContentRenderer content={currentContent} />
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
                    {currentStep + 1} / {totalSteps}
                  </span>
                  
                  <Button 
                    onClick={handleNext}
                    className="ghana-gradient"
                  >
                    {currentStep === totalSteps - 1 ? 'Finish Lesson' : 'Next'}
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
