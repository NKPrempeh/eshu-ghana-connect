
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, X, ArrowRight, Clock } from "lucide-react";
import { QuizQuestion } from "@/hooks/useQuizSystem";

interface MultipleChoiceQuizProps {
  questions: QuizQuestion[];
  onComplete: (score: number, timeSpent: number) => void;
  title: string;
  difficulty: string;
}

export const MultipleChoiceQuiz = ({ questions, onComplete, title, difficulty }: MultipleChoiceQuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [startTime] = useState(Date.now());
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes per quiz

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          handleQuizComplete();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleAnswerSelect = (answerIndex: number) => {
    if (!showExplanation) {
      setSelectedAnswer(answerIndex);
      setShowExplanation(true);
      
      const newAnswers = [...answers];
      newAnswers[currentQuestion] = answerIndex;
      setAnswers(newAnswers);
      
      if (answerIndex === questions[currentQuestion].correctAnswer) {
        setScore(score + 1);
      }
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      handleQuizComplete();
    }
  };

  const handleQuizComplete = () => {
    const timeSpent = Math.floor((Date.now() - startTime) / 1000);
    onComplete(score, timeSpent);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];

  const getDifficultyColor = (diff: string) => {
    switch (diff.toLowerCase()) {
      case 'beginner': return 'text-green-600 bg-green-100';
      case 'intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'advanced': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="mb-4">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-lg">{title}</CardTitle>
              <CardDescription>
                Question {currentQuestion + 1} of {questions.length}
              </CardDescription>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-gray-500" />
                <span className="text-sm font-mono">{formatTime(timeLeft)}</span>
              </div>
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${getDifficultyColor(difficulty)}`}>
                {difficulty}
              </span>
            </div>
          </div>
          <Progress value={progress} className="w-full" />
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <span className={`px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary`}>
              {question.category}
            </span>
          </div>
          
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
            {currentQuestion < questions.length - 1 ? (
              <>
                Next Question
                <ArrowRight className="ml-2" size={16} />
              </>
            ) : (
              'Complete Quiz'
            )}
          </Button>
        </div>
      )}
    </div>
  );
};
