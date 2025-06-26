
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, X, ArrowRight } from "lucide-react";

interface TrueFalseQuestion {
  id: number;
  question: string;
  correctAnswer: boolean;
  explanation: string;
  category: string;
}

interface TrueFalseQuizProps {
  questions: TrueFalseQuestion[];
  onComplete: (score: number, timeSpent: number) => void;
  title: string;
}

export const TrueFalseQuiz = ({ questions, onComplete, title }: TrueFalseQuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [startTime] = useState(Date.now());

  const handleAnswerSelect = (answer: boolean) => {
    if (!showExplanation) {
      setSelectedAnswer(answer);
      setShowExplanation(true);
      
      if (answer === questions[currentQuestion].correctAnswer) {
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
      const timeSpent = Math.floor((Date.now() - startTime) / 1000);
      onComplete(score, timeSpent);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="mb-4">
        <CardHeader>
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription>
            Question {currentQuestion + 1} of {questions.length}
          </CardDescription>
          <Progress value={progress} className="w-full" />
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
              {question.category}
            </span>
          </div>
          
          <h3 className="text-xl font-semibold mb-6">{question.question}</h3>
          
          <div className="grid grid-cols-2 gap-4">
            {[true, false].map((option) => {
              let buttonClass = "p-6 border rounded-lg transition-colors text-center ";
              
              if (showExplanation) {
                if (option === question.correctAnswer) {
                  buttonClass += "border-green-500 bg-green-50 text-green-800";
                } else if (option === selectedAnswer && option !== question.correctAnswer) {
                  buttonClass += "border-red-500 bg-red-50 text-red-800";
                } else {
                  buttonClass += "border-gray-200 bg-gray-50 text-gray-600";
                }
              } else {
                buttonClass += "border-gray-200 hover:border-primary hover:bg-primary/5";
              }
              
              return (
                <button
                  key={option.toString()}
                  onClick={() => handleAnswerSelect(option)}
                  className={buttonClass}
                  disabled={showExplanation}
                >
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-2xl font-bold">
                      {option ? 'TRUE' : 'FALSE'}
                    </span>
                    {showExplanation && option === question.correctAnswer && (
                      <CheckCircle className="text-green-600" size={24} />
                    )}
                    {showExplanation && option === selectedAnswer && option !== question.correctAnswer && (
                      <X className="text-red-600" size={24} />
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
