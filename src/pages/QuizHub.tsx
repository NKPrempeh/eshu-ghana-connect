
import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Clock, 
  Trophy, 
  Target, 
  Zap, 
  Brain,
  Users,
  Languages,
  Utensils,
  Music,
  MapPin,
  Star,
  TrendingUp
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";
import { useQuizSystem } from "@/hooks/useQuizSystem";

const QuizHub = () => {
  const { user } = useAuth();
  const { quizHistory, currentStreak, totalPoints, getRecommendedQuiz } = useQuizSystem();

  const quizTypes = [
    {
      id: 'cultural-basics',
      title: 'Cultural Basics',
      description: 'Learn fundamental Ghanaian customs and traditions',
      icon: BookOpen,
      difficulty: 'beginner',
      questions: 10,
      timeLimit: '5 min',
      category: 'Culture',
      color: 'bg-blue-500'
    },
    {
      id: 'language-essentials',
      title: 'Language Essentials',
      description: 'Master basic Twi greetings and phrases',
      icon: Languages,
      difficulty: 'beginner',
      questions: 15,
      timeLimit: '7 min',
      category: 'Language',
      color: 'bg-green-500'
    },
    {
      id: 'food-culture',
      title: 'Food & Dining',
      description: 'Understand Ghanaian cuisine and dining etiquette',
      icon: Utensils,
      difficulty: 'intermediate',
      questions: 12,
      timeLimit: '6 min',
      category: 'Food',
      color: 'bg-orange-500'
    },
    {
      id: 'social-etiquette',
      title: 'Social Etiquette',
      description: 'Navigate social situations with confidence',
      icon: Users,
      difficulty: 'intermediate',
      questions: 8,
      timeLimit: '4 min',
      category: 'Social',
      color: 'bg-purple-500'
    },
    {
      id: 'music-arts',
      title: 'Music & Arts',
      description: 'Explore Ghana\'s rich artistic heritage',
      icon: Music,
      difficulty: 'advanced',
      questions: 10,
      timeLimit: '5 min',
      category: 'Arts',
      color: 'bg-pink-500'
    },
    {
      id: 'geography-places',
      title: 'Geography & Places',
      description: 'Discover Ghana\'s regions and landmarks',
      icon: MapPin,
      difficulty: 'advanced',
      questions: 12,
      timeLimit: '6 min',
      category: 'Geography',
      color: 'bg-teal-500'
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const recommendedQuiz = getRecommendedQuiz();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cultural Knowledge Hub
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Test your knowledge of Ghanaian culture with interactive quizzes designed to enhance your cultural understanding.
          </p>
        </div>

        {/* Stats Section */}
        {user && (
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="p-4 text-center">
                <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                <div className="text-2xl font-bold">{totalPoints}</div>
                <div className="text-sm text-gray-600">Total Points</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <Zap className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <div className="text-2xl font-bold">{currentStreak}</div>
                <div className="text-sm text-gray-600">Day Streak</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <Target className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <div className="text-2xl font-bold">{quizHistory.length}</div>
                <div className="text-sm text-gray-600">Quizzes Taken</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-bold">
                  {quizHistory.length > 0 
                    ? Math.round((quizHistory.reduce((sum, q) => sum + (q.score / q.totalQuestions), 0) / quizHistory.length) * 100)
                    : 0
                  }%
                </div>
                <div className="text-sm text-gray-600">Avg Score</div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Brain className="text-blue-600" size={24} />
                </div>
                <div>
                  <CardTitle>Quick Challenge</CardTitle>
                  <CardDescription>Take a 5-minute knowledge test</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Link to="/quiz/quick-challenge">
                <Button className="w-full ghana-gradient">
                  Start Quick Quiz
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-50 to-teal-50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Star className="text-green-600" size={24} />
                </div>
                <div>
                  <CardTitle>Recommended for You</CardTitle>
                  <CardDescription>Based on your progress</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Badge className={getDifficultyColor(recommendedQuiz)}>
                {recommendedQuiz} level
              </Badge>
              <p className="text-sm text-gray-600 mt-2">
                Perfect for your current skill level
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Quiz Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quizTypes.map((quiz) => {
            const IconComponent = quiz.icon;
            
            return (
              <Card key={quiz.id} className="hover:shadow-lg transition-shadow group">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-12 h-12 ${quiz.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{quiz.title}</CardTitle>
                      <Badge className={getDifficultyColor(quiz.difficulty)}>
                        {quiz.difficulty}
                      </Badge>
                    </div>
                  </div>
                  <CardDescription>{quiz.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <BookOpen size={14} />
                        <span>{quiz.questions} questions</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{quiz.timeLimit}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Link to={`/quiz/${quiz.id}`}>
                    <Button className="w-full" variant="outline">
                      Start Quiz
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Recent Activity */}
        {user && quizHistory.length > 0 && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Recent Quiz Activity</CardTitle>
              <CardDescription>Your latest quiz results</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {quizHistory.slice(-5).reverse().map((result, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-medium">{result.category} Quiz</div>
                      <div className="text-sm text-gray-600">
                        {new Date(result.completedAt).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-lg">
                        {result.score}/{result.totalQuestions}
                      </div>
                      <div className="text-sm text-gray-600">
                        {Math.round((result.score / result.totalQuestions) * 100)}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {!user && (
          <Card className="mt-8 bg-gradient-to-r from-orange-50 to-yellow-50">
            <CardHeader>
              <CardTitle>Track Your Progress</CardTitle>
              <CardDescription>
                Sign in to save your quiz results and unlock advanced features!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Link to="/signup">
                  <Button className="ghana-gradient">Sign Up</Button>
                </Link>
                <Link to="/login">
                  <Button variant="outline">Sign In</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default QuizHub;
