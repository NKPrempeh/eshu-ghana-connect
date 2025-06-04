
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Music, Utensils, Languages, MapPin, Users } from "lucide-react";
import { useState } from "react";

const CulturalTraining = () => {
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);

  const lessons = [
    {
      id: 1,
      title: "Greetings & Basic Phrases",
      description: "Learn essential Twi phrases and proper greeting customs",
      icon: Languages,
      duration: "15 min",
      difficulty: "Beginner",
      content: [
        "Hello - Maakye (morning), Maaha (afternoon)",
        "Thank you - Medaase",
        "Please - Mepa wo kyɛw",
        "How are you? - Wo ho te sɛn?"
      ]
    },
    {
      id: 2,
      title: "Traditional Foods",
      description: "Discover popular Ghanaian dishes and dining etiquette",
      icon: Utensils,
      duration: "20 min",
      difficulty: "Beginner",
      content: [
        "Jollof Rice - Spiced rice dish",
        "Banku - Fermented corn dough",
        "Kelewele - Spiced fried plantains",
        "Always wash hands before eating"
      ]
    },
    {
      id: 3,
      title: "Music & Dance",
      description: "Experience the rhythm of Ghana through traditional music",
      icon: Music,
      duration: "25 min",
      difficulty: "Intermediate",
      content: [
        "Highlife music origins",
        "Traditional drumming patterns",
        "Cultural significance of dance",
        "Modern Afrobeats influence"
      ]
    },
    {
      id: 4,
      title: "Social Customs",
      description: "Understanding respect, hierarchy, and social interactions",
      icon: Users,
      duration: "30 min",
      difficulty: "Intermediate",
      content: [
        "Respect for elders",
        "Gift-giving customs",
        "Dress codes for occasions",
        "Community participation"
      ]
    },
    {
      id: 5,
      title: "Regional Differences",
      description: "Learn about Ghana's diverse regions and local customs",
      icon: MapPin,
      duration: "35 min",
      difficulty: "Advanced",
      content: [
        "Ashanti Region traditions",
        "Northern customs",
        "Coastal communities",
        "Festival celebrations"
      ]
    }
  ];

  const toggleLesson = (lessonId: number) => {
    setCompletedLessons(prev => 
      prev.includes(lessonId) 
        ? prev.filter(id => id !== lessonId)
        : [...prev, lessonId]
    );
  };

  const progressPercentage = (completedLessons.length / lessons.length) * 100;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-100 text-green-800";
      case "Intermediate": return "bg-yellow-100 text-yellow-800";
      case "Advanced": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cultural Training
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Immerse yourself in Ghanaian culture through interactive lessons designed to help you understand and appreciate local customs.
          </p>
        </div>

        {/* Progress Overview */}
        <Card className="mb-8 bg-gradient-to-r from-primary/10 to-accent/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="text-primary" size={24} />
              Your Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Completed: {completedLessons.length} of {lessons.length} lessons</span>
                <span>{Math.round(progressPercentage)}%</span>
              </div>
              <Progress value={progressPercentage} className="h-3" />
            </div>
          </CardContent>
        </Card>

        {/* Lessons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson) => {
            const isCompleted = completedLessons.includes(lesson.id);
            const IconComponent = lesson.icon;
            
            return (
              <Card 
                key={lesson.id} 
                className={`hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer ${
                  isCompleted ? 'ring-2 ring-primary bg-primary/5' : ''
                }`}
                onClick={() => toggleLesson(lesson.id)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className={`p-3 rounded-lg ${isCompleted ? 'ghana-gradient' : 'bg-gray-100'}`}>
                      <IconComponent 
                        size={24} 
                        className={isCompleted ? 'text-white' : 'text-gray-600'}
                      />
                    </div>
                    <Badge className={getDifficultyColor(lesson.difficulty)}>
                      {lesson.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{lesson.title}</CardTitle>
                  <p className="text-gray-600 text-sm">{lesson.description}</p>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Duration: {lesson.duration}</span>
                    {isCompleted && <span className="text-primary font-medium">✓ Completed</span>}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">What you'll learn:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {lesson.content.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button 
                    className="w-full mt-4" 
                    variant={isCompleted ? "secondary" : "default"}
                  >
                    {isCompleted ? "Review Lesson" : "Start Lesson"}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Achievement Section */}
        {completedLessons.length === lessons.length && (
          <Card className="mt-8 bg-gradient-to-r from-green-500 to-yellow-500 text-white">
            <CardContent className="text-center py-8">
              <h2 className="text-2xl font-bold mb-4">🎉 Congratulations!</h2>
              <p className="text-lg">
                You've completed all cultural training lessons! You're well on your way to feeling at home in Ghana.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default CulturalTraining;
