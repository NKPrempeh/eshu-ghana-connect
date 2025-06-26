
import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, X, ArrowRight, RotateCcw, Trophy, BookOpen } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
}

const quizQuestions: QuizQuestion[] = [
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
    category: "Social Etiquette"
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
    category: "Food Culture"
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
    category: "Language"
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
    category: "Traditional Clothing"
  },
  {
    id: 5,
    question: "In Ghanaian markets, what is expected when making a purchase?",
    options: [
      "Accept the first price given",
      "Bargain is expected and part of the cultural experience",
      "Only pay with credit cards",
      "Don't interact with sellers directly"
    ],
    correctAnswer: 1,
    explanation: "Bargaining is an integral part of Ghanaian market culture. It's expected and shows engagement with local customs. Start by offering 50-60% of the asking price.",
    category: "Shopping Culture"
  }
];

const CulturalQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);
  const { user } = useAuth();

  const handleAnswerSelect = (answerIndex: number) => {
    if (!showExplanation) {
      setSelectedAnswer(answerIndex);
      setShowExplanation(true);
      
      const newAnswers = [...answers];
      newAnswers[currentQuestion] = answerIndex;
      setAnswers(newAnswers);
      
      if (answerIndex === quizQuestions[currentQuestion].correctAnswer) {
        setScore(score + 1);
      }
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizCompleted(false);
    setAnswers([]);
  };

  const getScoreMessage = () => {
    const percentage = (score / quizQuestions.length) * 100;
    if (percentage >= 80) return "Excellent! You have a great understanding of Ghanaian culture.";
    if (percentage >= 60) return "Good job! You're learning well about Ghanaian customs.";
    if (percentage >= 40) return "Not bad! Consider reviewing the cultural training lessons.";
    return "Keep learning! The cultural training lessons will help you improve.";
  };

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  if (quizCompleted) {
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
                  <p className="text-lg text-gray-600">You scored {score} out of {quizQuestions.length}</p>
                </div>
                
                <div className="mb-6">
                  <Progress value={(score / quizQuestions.length) * 100} className="w-full mb-2" />
                  <p className="text-sm text-gray-600">{Math.round((score / quizQuestions.length) * 100)}% Correct</p>
                </div>
                
                <p className="text-gray-700 mb-6">{getScoreMessage()}</p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={resetQuiz} variant="outline">
                    <RotateCcw className="mr-2" size={16} />
                    Retake Quiz
                  </Button>
                  <Button asChild className="ghana-gradient">
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

  const question = quizQuestions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Cultural Knowledge Quiz</h1>
            <p className="text-gray-600">Test your understanding of Ghanaian culture and customs</p>
          </div>

          <Card className="mb-4">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg">
                  Question {currentQuestion + 1} of {quizQuestions.length}
                </CardTitle>
                <span className={`px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary`}>
                  {question.category}
                </span>
              </div>
              <Progress value={progress} className="w-full" />
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-semibold mb-6">{question.question}</h3>
              
              <div className="space-y-3">
                {question.options.map((option, index) => {
                  let buttonClass = "w-full text-left p-4 border rounded-lg transition-colors ";
                  
                  if (showExplanation) {
                    if (index === question.correctAnswer) {
                      buttonClass += "border-green-500 bg-green-50 text-green-800";
                    } else if (index === selectedAnswer && index !== question.correctAnswer) {
                      buttonClass += "border-red-500 bg-red-50 text-red-800";
                    } else {
                      buttonClass += "border-gray-200 bg-gray-50 text-gray-600";
                    }
                  } else {
                    buttonClass += "border-gray-200 hover:border-primary hover:bg-primary/5";
                  }
                  
                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      className={buttonClass}
                      disabled={showExplanation}
                    >
                      <div className="flex items-center justify-between">
                        <span>{option}</span>
                        {showExplanation && index === question.correctAnswer && (
                          <CheckCircle className="text-green-600" size={20} />
                        )}
                        {showExplanation && index === selectedAnswer && index !== question.correctAnswer && (
                          <X className="text-red-600" size={20} />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
              
              {showExplanation && (
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Explanation:</h4>
                  <p className="text-blue-800">{question.explanation}</p>
                </div>
              )}
            </CardContent>
          </Card>

          {showExplanation && (
            <div className="text-center">
              <Button onClick={handleNextQuestion} size="lg" className="ghana-gradient">
                {currentQuestion < quizQuestions.length - 1 ? (
                  <>
                    Next Question
                    <ArrowRight className="ml-2" size={16} />
                  </>
                ) : (
                  'View Results'
                )}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CulturalQuiz;
