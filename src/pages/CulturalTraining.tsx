import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Languages, Utensils, Music, MapPin, HelpCircle, Trophy, ArrowRight } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { LessonCard } from "@/components/cultural-training/LessonCard";
import { ProgressCard } from "@/components/cultural-training/ProgressCard";
import { LessonViewer } from "@/components/cultural-training/LessonViewer";
import { useCulturalTraining } from "@/hooks/useCulturalTraining";
import { Lesson } from "@/types/cultural-training";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CulturalTraining = () => {
  const { lessons, userProgress, loading, markLessonComplete } = useCulturalTraining();
  const { user } = useAuth();
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);

  const iconMap: { [key: string]: any } = {
    Languages,
    Utensils,
    Music,
    Users,
    MapPin,
    BookOpen
  };

  const handleStartLesson = (lesson: Lesson) => {
    setSelectedLesson(lesson);
  };

  const handleCompleteLesson = () => {
    if (selectedLesson) {
      markLessonComplete(selectedLesson.id);
      setSelectedLesson(null);
    }
  };

  const handleCloseLesson = () => {
    setSelectedLesson(null);
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

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <HelpCircle className="text-blue-600" size={24} />
                </div>
                <div>
                  <CardTitle className="text-lg">Cultural Knowledge Hub</CardTitle>
                  <CardDescription>Access all quizzes and knowledge tests</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Link to="/quiz-hub">
                <Button className="w-full">
                  Explore Quiz Hub
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Trophy className="text-purple-600" size={24} />
                </div>
                <div>
                  <CardTitle className="text-lg">Achievement Tracker</CardTitle>
                  <CardDescription>Monitor your cultural learning progress</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {user ? (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Completed Lessons</span>
                    <span>{userProgress.length}/{lessons.length}</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    {userProgress.length === lessons.length 
                      ? "🎉 All lessons completed!" 
                      : `${lessons.length - userProgress.length} lessons remaining`
                    }
                  </div>
                </div>
              ) : (
                <p className="text-sm text-gray-600">Sign in to track your progress</p>
              )}
            </CardContent>
          </Card>
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
              <div key={lesson.id}>
                <LessonCard
                  lesson={lesson}
                  isCompleted={isCompleted}
                  onMarkComplete={() => markLessonComplete(lesson.id)}
                  onStartLesson={() => handleStartLesson(lesson)}
                  iconComponent={IconComponent}
                />
                <div className="mt-2 text-center">
                  <Link 
                    to={`/cultural-training/lesson/${lesson.id}`}
                    className="text-sm text-primary hover:underline"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
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
            <CardContent>
              <div className="flex gap-4">
                <Link to="/signup">
                  <Button className="ghana-gradient">Sign Up</Button>
                </Link>
                <Link to="/buddy-signup">
                  <Button variant="outline">Become a Cultural Buddy</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {selectedLesson && (
        <LessonViewer
          lesson={selectedLesson}
          onComplete={handleCompleteLesson}
          onClose={handleCloseLesson}
        />
      )}
    </div>
  );
};

export default CulturalTraining;
