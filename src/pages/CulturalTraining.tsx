
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Clock, Star, BookOpen, Users, Languages, Utensils, Music, MapPin } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Lesson {
  id: number;
  title: string;
  description: string;
  content: string[];
  duration: string;
  difficulty: string;
  icon: string;
  completed?: boolean;
}

const CulturalTraining = () => {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [userProgress, setUserProgress] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { toast } = useToast();

  const iconMap: { [key: string]: any } = {
    Languages,
    Utensils,
    Music,
    Users,
    MapPin,
    BookOpen
  };

  useEffect(() => {
    fetchLessons();
    if (user) {
      fetchUserProgress();
    }
  }, [user]);

  const fetchLessons = async () => {
    const { data, error } = await supabase
      .from('cultural_lessons')
      .select('*')
      .order('id');

    if (error) {
      console.error('Error fetching lessons:', error);
    } else {
      const formattedLessons = data.map(lesson => ({
        ...lesson,
        content: lesson.content as string[]
      }));
      setLessons(formattedLessons);
    }
    setLoading(false);
  };

  const fetchUserProgress = async () => {
    if (!user) return;

    const { data, error } = await supabase
      .from('user_lesson_progress')
      .select('lesson_id')
      .eq('user_id', user.id);

    if (error) {
      console.error('Error fetching progress:', error);
    } else {
      setUserProgress(data.map(p => p.lesson_id));
    }
  };

  const markLessonComplete = async (lessonId: number) => {
    if (!user) {
      toast({
        title: "Please log in",
        description: "You need to be logged in to track progress.",
        variant: "destructive",
      });
      return;
    }

    const { error } = await supabase
      .from('user_lesson_progress')
      .insert([
        { user_id: user.id, lesson_id: lessonId }
      ]);

    if (error) {
      console.error('Error marking lesson complete:', error);
      toast({
        title: "Error",
        description: "Failed to save progress. Please try again.",
        variant: "destructive",
      });
    } else {
      setUserProgress(prev => [...prev, lessonId]);
      toast({
        title: "Lesson completed!",
        description: "Your progress has been saved.",
      });
    }
  };

  const progressPercentage = lessons.length > 0 ? (userProgress.length / lessons.length) * 100 : 0;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cultural Training
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn about Ghanaian culture, customs, and traditions to help you integrate smoothly into your new home.
          </p>
        </div>

        {user && (
          <Card className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="text-primary" size={24} />
                Your Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Completed: {userProgress.length} / {lessons.length} lessons</span>
                  <span>{Math.round(progressPercentage)}%</span>
                </div>
                <Progress value={progressPercentage} className="w-full" />
              </div>
            </CardContent>
          </Card>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson) => {
            const IconComponent = iconMap[lesson.icon] || BookOpen;
            const isCompleted = userProgress.includes(lesson.id);
            
            return (
              <Card key={lesson.id} className={`hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${isCompleted ? 'border-green-200 bg-green-50' : ''}`}>
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
                  {isCompleted ? (
                    <Button disabled className="w-full" variant="outline">
                      <CheckCircle className="mr-2" size={16} />
                      Completed
                    </Button>
                  ) : (
                    <Button 
                      onClick={() => markLessonComplete(lesson.id)}
                      className="w-full"
                    >
                      Mark as Complete
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {!user && (
          <Card className="mt-8 bg-gradient-to-r from-orange-50 to-yellow-50">
            <CardHeader>
              <CardTitle>Track Your Progress</CardTitle>
              <CardDescription>
                Sign in to save your lesson progress and continue your cultural journey!
              </CardDescription>
            </CardHeader>
          </Card>
        )}
      </div>
    </div>
  );
};

export default CulturalTraining;
