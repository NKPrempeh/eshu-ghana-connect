
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Play, RotateCcw } from "lucide-react";
import { Lesson } from "@/types/cultural-training";

interface LessonCardProps {
  lesson: Lesson;
  isCompleted: boolean;
  onMarkComplete: (lessonId: number) => void;
  onStartLesson: () => void;
  iconComponent: React.ComponentType<{ size?: number; className?: string }>;
}

export const LessonCard = ({ 
  lesson, 
  isCompleted, 
  onMarkComplete, 
  onStartLesson,
  iconComponent: IconComponent 
}: LessonCardProps) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className={`hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${isCompleted ? 'border-green-200 bg-green-50' : ''}`}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isCompleted ? 'bg-green-100' : 'ghana-gradient'}`}>
              {isCompleted ? (
                <CheckCircle className="text-green-600" size={24} />
              ) : (
                <IconComponent className="text-white" size={24} />
              )}
            </div>
            <div>
              <CardTitle className="text-lg">{lesson.title}</CardTitle>
              <div className="flex items-center gap-2 mt-1">
                <Clock size={16} className="text-gray-500" />
                <span className="text-sm text-gray-500">{lesson.duration}</span>
              </div>
            </div>
          </div>
          <Badge className={getDifficultyColor(lesson.difficulty)}>
            {lesson.difficulty}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="mb-4">
          {lesson.description}
        </CardDescription>
        <div className="space-y-2 mb-4">
          <h4 className="font-medium text-sm">What you'll learn:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {lesson.content.slice(0, 3).map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-2">
          <Button 
            onClick={onStartLesson}
            className="w-full ghana-gradient"
          >
            {isCompleted ? (
              <>
                <RotateCcw className="mr-2" size={16} />
                Retake Lesson
              </>
            ) : (
              <>
                <Play className="mr-2" size={16} />
                Start Lesson
              </>
            )}
          </Button>
          {!isCompleted && (
            <Button 
              onClick={() => onMarkComplete(lesson.id)}
              variant="outline"
              className="w-full"
            >
              Mark as Complete
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
