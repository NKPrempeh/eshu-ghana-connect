
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, RotateCcw, Trophy, BookOpen } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";
import { MultipleChoiceQuiz } from "@/components/quiz/MultipleChoiceQuiz";
import { TrueFalseQuiz } from "@/components/quiz/TrueFalseQuiz";
import { useQuizSystem, QuizQuestion } from "@/hooks/useQuizSystem";

// Extended quiz questions with more variety
const allQuizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What is the most appropriate way to greet an elder in Ghana?",
    options: [
      "Wave from a distance",
      "Use a firm handshake and maintain eye contact",
      "Offer a slight bow or nod with your right hand extended",
      "Simply say 'Hello' without physical contact"
    ],
    correctAnswer: 2,
    explanation: "In Ghanaian culture, showing respect to elders involves a slight bow or nod when greeting, using your right hand for handshakes, and demonstrating humility.",
    category: "Social Etiquette",
    difficulty: "beginner",
    points: 10
  },
  {
    id: 2,
    question: "Which hand should you use when eating fufu?",
    options: [
      "Left hand only",
      "Right hand only", 
      "Both hands",
      "It doesn't matter"
    ],
    correctAnswer: 1,
    explanation: "In Ghanaian dining culture, you should always use your right hand when eating fufu and other traditional foods. The left hand is considered unclean.",
    category: "Food Culture",
    difficulty: "beginner",
    points: 10
  },
  {
    id: 3,
    question: "What does 'Maakye' mean in Twi?",
    options: [
      "Good afternoon",
      "Good evening",
      "Good morning",
      "Thank you"
    ],
    correctAnswer: 2,
    explanation: "'Maakye' is the Twi greeting for 'Good morning'. Learning basic greetings in local languages shows respect for Ghanaian culture.",
    category: "Language",
    difficulty: "beginner",
    points: 10
  },
  {
    id: 4,
    question: "What is the significance of Kente cloth?",
    options: [
      "It's just decorative fabric",
      "Each pattern and color has symbolic meaning",
      "It's only worn by tourists",
      "It's modern fashion with no cultural significance"
    ],
    correctAnswer: 1,
    explanation: "Kente cloth is deeply symbolic in Ghanaian culture. Each pattern, color, and design element has specific meanings related to history, proverbs, and cultural values.",
    category: "Traditional Clothing",
    difficulty: "intermediate",
    points: 15
  },
  {
    id: 5,
    question: "In Ghanaian markets, what is expected when making a purchase?",
    options: [
      "Accept the first price given",
      "Bargaining is expected and part of the cultural experience",
      "Only pay with credit cards",
      "Don't interact with sellers directly"
    ],
    correctAnswer: 1,
    explanation: "Bargaining is an integral part of Ghanaian market culture. It's expected and shows engagement with local customs. Start by offering 50-60% of the asking price.",
    category: "Shopping Culture",
    difficulty: "intermediate",
    points: 15
  },
  {
    id: 6,
    question: "What is the traditional Ghanaian way to show respect when passing in front of seated people?",
    options: [
      "Walk normally without acknowledgment",
      "Say 'excuse me' and walk quickly",
      "Bend slightly and say 'agoo' or similar phrase",
      "Walk behind them instead"
    ],
    correctAnswer: 2,
    explanation: "When passing in front of seated people, especially elders, it's customary to bend slightly and say 'agoo' (excuse me) as a sign of respect.",
    category: "Social Etiquette",
    difficulty: "intermediate",
    points: 15
  },
  {
    id: 7,
    question: "Which festival celebrates the Akan New Year?",
    options: [
      "Homowo",
      "Adae Kese",
      "Odwira",
      "Damba"
    ],
    correctAnswer: 2,
    explanation: "Odwira is the traditional Akan festival that celebrates the New Year and honors ancestors. It's a time of purification and renewal.",
    category: "Festivals",
    difficulty: "advanced",
    points: 20
  },
  {
    id: 8,
    question: "What does 'Medaase' mean in Twi?",
    options: [
      "Hello",
      "Goodbye",
      "Thank you",
      "Please"
    ],
    correctAnswer: 2,
    explanation: "'Medaase' is the Twi word for 'thank you'. It's important to express gratitude in local languages to show cultural appreciation.",
    category: "Language",
    difficulty: "beginner",
    points: 10
  }
];

const trueFalseQuestions = [
  {
    id: 1,
    question: "It is considered rude to refuse food when offered by a Ghanaian host.",
    correctAnswer: true,
    explanation: "In Ghanaian culture, refusing food offered by a host can be seen as disrespectful. It's polite to at least taste what's offered.",
    category: "Social Etiquette"
  },
  {
    id: 2,
    question: "You should always use both hands when receiving or giving something to an elder.",
    correctAnswer: true,
    explanation: "Using both hands when giving or receiving items from elders shows respect and is an important cultural practice in Ghana.",
    category: "Social Etiquette"
  },
  {
    id: 3,
    question: "Ghana's independence day is celebrated on March 6th.",
    correctAnswer: true,
    explanation: "Ghana gained independence from British colonial rule on March 6, 1957, making it the first African country to achieve independence.",
    category: "History"
  }
];

const CulturalQuiz = () => {
  const { quizType } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { saveQuizResult } = useQuizSystem();
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizResult, setQuizResult] = useState<{ score: number; timeSpent: number } | null>(null);

  const getQuizConfig = () => {
    switch (quizType) {
      case 'cultural-basics':
        return {
          title: 'Cultural Basics Quiz',
          questions: allQuizQuestions.filter(q => q.difficulty === 'beginner').slice(0, 10),
          type: 'multiple-choice' as const,
          difficulty: 'beginner'
        };
      case 'advanced-culture':
        return {
          title: 'Advanced Cultural Knowledge',
          questions: allQuizQuestions.filter(q => q.difficulty === 'advanced'),
          type: 'multiple-choice' as const,
          difficulty: 'advanced'
        };
      case 'true-false':
        return {
          title: 'True or False Challenge',
          questions: trueFalseQuestions,
          type: 'true-false' as const,
          difficulty: 'intermediate'
        };
      case 'quick-challenge':
        return {
          title: 'Quick Knowledge Challenge',
          questions: allQuizQuestions.slice(0, 5),
          type: 'multiple-choice' as const,
          difficulty: 'mixed'
        };
      default:
        return {
          title: 'General Cultural Quiz',
          questions: allQuizQuestions.slice(0, 8),
          type: 'multiple-choice' as const,
          difficulty: 'mixed'
        };
    }
  };

  const quizConfig = getQuizConfig();

  const handleQuizComplete = (score: number, timeSpent: number) => {
    setQuizResult({ score, timeSpent });
    setQuizCompleted(true);

    if (user && quizConfig.type === 'multiple-choice') {
      saveQuizResult({
        score,
        totalQuestions: quizConfig.questions.length,
        timeSpent,
        category: quizConfig.title,
        difficulty: quizConfig.difficulty,
        completedAt: new Date()
      });
    }
  };

  const resetQuiz = () => {
    setQuizCompleted(false);
    setQuizResult(null);
  };

  const getScoreMessage = () => {
    if (!quizResult) return "";
    const percentage = (quizResult.score / quizConfig.questions.length) * 100;
    if (percentage >= 80) return "Excellent! You have a great understanding of Ghanaian culture.";
    if (percentage >= 60) return "Good job! You're learning well about Ghanaian customs.";
    if (percentage >= 40) return "Not bad! Consider reviewing the cultural training lessons.";
    return "Keep learning! The cultural training lessons will help you improve.";
  };

  if (quizCompleted && quizResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="text-center p-8">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="text-green-600" size={40} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Quiz Complete!</h2>
                  <p className="text-lg text-gray-600">
                    You scored {quizResult.score} out of {quizConfig.questions.length}
                  </p>
                  <p className="text-sm text-gray-500">
                    Time: {Math.floor(quizResult.timeSpent / 60)}:{(quizResult.timeSpent % 60).toString().padStart(2, '0')}
                  </p>
                </div>
                
                <p className="text-gray-700 mb-6">{getScoreMessage()}</p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={resetQuiz} variant="outline">
                    <RotateCcw className="mr-2" size={16} />
                    Retake Quiz
                  </Button>
                  <Button asChild className="ghana-gradient">
                    <Link to="/quiz-hub">
                      More Quizzes
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/cultural-training">
                      <BookOpen className="mr-2" size={16} />
                      Continue Learning
                    </Link>
                  </Button>
                </div>
                
                {!user && (
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      Sign in to save your quiz results and track your cultural learning progress!
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/quiz-hub')}
            className="mb-4"
          >
            <ArrowLeft className="mr-2" size={16} />
            Back to Quiz Hub
          </Button>
          
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{quizConfig.title}</h1>
            <p className="text-gray-600">Test your knowledge of Ghanaian culture</p>
          </div>
        </div>

        {quizConfig.type === 'multiple-choice' ? (
          <MultipleChoiceQuiz
            questions={quizConfig.questions as QuizQuestion[]}
            onComplete={handleQuizComplete}
            title={quizConfig.title}
            difficulty={quizConfig.difficulty}
          />
        ) : (
          <TrueFalseQuiz
            questions={quizConfig.questions as any[]}
            onComplete={handleQuizComplete}
            title={quizConfig.title}
          />
        )}
      </div>
    </div>
  );
};

export default CulturalQuiz;
