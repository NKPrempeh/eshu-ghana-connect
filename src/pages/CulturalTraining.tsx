
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Languages, Utensils, Music, MapPin } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { LessonCard } from "@/components/cultural-training/LessonCard";
import { ProgressCard } from "@/components/cultural-training/ProgressCard";
import { useCulturalTraining } from "@/hooks/useCulturalTraining";

const CulturalTraining = () => {
  const { lessons, userProgress, loading, markLessonComplete } = useCulturalTraining();
  const { user } = useAuth();

  const iconMap: { [key: string]: any } = {
    Languages,
    Utensils,
    Music,
    Users,
    MapPin,
    BookOpen
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
          <ProgressCard 
            completedLessons={userProgress.length} 
            totalLessons={lessons.length} 
          />
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson) => {
            const IconComponent = iconMap[lesson.icon] || BookOpen;
            const isCompleted = userProgress.includes(lesson.id);
            
            return (
              <LessonCard
                key={lesson.id}
                lesson={lesson}
                isCompleted={isCompleted}
                onMarkComplete={markLessonComplete}
                iconComponent={IconComponent}
              />
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
