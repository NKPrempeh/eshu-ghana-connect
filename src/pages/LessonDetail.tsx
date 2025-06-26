
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Play, CheckCircle, BookOpen, Clock, Star } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useCulturalTraining } from "@/hooks/useCulturalTraining";
import { LessonViewer } from "@/components/cultural-training/LessonViewer";
import { ContentRenderer } from "@/components/cultural-training/ContentRenderer";

const LessonDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { lessons, userProgress, loading, markLessonComplete } = useCulturalTraining();
  const [selectedLesson, setSelectedLesson] = useState(null);
  
  const lesson = lessons.find(l => l.id === parseInt(id || '0'));
  const isCompleted = lesson ? userProgress.includes(lesson.id) : false;

  const handleStartLesson = () => {
    if (lesson) {
      setSelectedLesson(lesson);
    }
  };

  const handleCompleteLesson = () => {
    if (lesson) {
      markLessonComplete(lesson.id);
      setSelectedLesson(null);
    }
  };

  const handleCloseLesson = () => {
    setSelectedLesson(null);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner': return 'text-green-600 bg-green-100';
      case 'intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'advanced': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">Loading lesson...</div>
        </div>
      </div>
    );
  }

  if (!lesson) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Lesson Not Found</h1>
            <Button onClick={() => navigate('/cultural-training')}>
              <ArrowLeft className="mr-2" size={16} />
              Back to Cultural Training
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-6">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/cultural-training')}
              className="mb-4"
            >
              <ArrowLeft className="mr-2" size={16} />
              Back to Cultural Training
            </Button>
            
            <div className="flex items-center gap-4 mb-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isCompleted ? 'bg-green-100' : 'ghana-gradient'}`}>
                {isCompleted ? (
                  <CheckCircle className="text-green-600" size={24} />
                ) : (
                  <BookOpen className="text-white" size={24} />
                )}
              </div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900">{lesson.title}</h1>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center gap-1">
                    <Clock size={16} className="text-gray-500" />
                    <span className="text-sm text-gray-600">{lesson.duration}</span>
                  </div>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getDifficultyColor(lesson.difficulty)}`}>
                    {lesson.difficulty}
                  </span>
                  {isCompleted && (
                    <div className="flex items-center gap-1 text-green-600">
                      <CheckCircle size={16} />
                      <span className="text-sm font-medium">Completed</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Lesson Content */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Lesson Overview</CardTitle>
                  <CardDescription>{lesson.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {lesson.content && lesson.content.length > 0 ? (
                    <ContentRenderer content={lesson.content} />
                  ) : (
                    <p className="text-gray-500">Lesson content will be available soon.</p>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button 
                    onClick={handleStartLesson}
                    className="w-full ghana-gradient"
                    size="lg"
                  >
                    <Play className="mr-2" size={16} />
                    {isCompleted ? 'Retake Lesson' : 'Start Interactive Lesson'}
                  </Button>
                  
                  {user && !isCompleted && (
                    <Button 
                      onClick={() => markLessonComplete(lesson.id)}
                      variant="outline"
                      className="w-full"
                    >
                      <CheckCircle className="mr-2" size={16} />
                      Mark as Complete
                    </Button>
                  )}
                  
                  {!user && (
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-800">
                        Sign in to track your progress and earn completion certificates!
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {user && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Your Progress</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span>Lessons Completed</span>
                        <span>{userProgress.length} / {lessons.length}</span>
                      </div>
                      <Progress 
                        value={(userProgress.length / lessons.length) * 100} 
                        className="w-full"
                      />
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Star size={16} className="text-yellow-500" />
                        <span>
                          {userProgress.length === lessons.length 
                            ? 'Cultural Training Complete!' 
                            : `${lessons.length - userProgress.length} lessons remaining`
                          }
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
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

export default LessonDetail;
