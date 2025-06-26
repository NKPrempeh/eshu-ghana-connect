
import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  points: number;
}

export interface QuizResult {
  score: number;
  totalQuestions: number;
  timeSpent: number;
  category: string;
  difficulty: string;
  completedAt: Date;
}

export const useQuizSystem = () => {
  const [quizHistory, setQuizHistory] = useState<QuizResult[]>([]);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const { user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (user) {
      loadQuizHistory();
    }
  }, [user]);

  const loadQuizHistory = () => {
    // Load from localStorage for now (could be enhanced with Supabase later)
    const history = localStorage.getItem(`quiz_history_${user?.id}`);
    if (history) {
      const parsedHistory = JSON.parse(history);
      setQuizHistory(parsedHistory);
      calculateStats(parsedHistory);
    }
  };

  const calculateStats = (history: QuizResult[]) => {
    const points = history.reduce((total, result) => total + result.score * 10, 0);
    setTotalPoints(points);
    
    // Calculate current streak (consecutive days with quiz completion)
    const today = new Date();
    let streak = 0;
    const sortedHistory = history.sort((a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime());
    
    for (const result of sortedHistory) {
      const resultDate = new Date(result.completedAt);
      const daysDiff = Math.floor((today.getTime() - resultDate.getTime()) / (1000 * 60 * 60 * 24));
      
      if (daysDiff === streak) {
        streak++;
      } else {
        break;
      }
    }
    setCurrentStreak(streak);
  };

  const saveQuizResult = (result: QuizResult) => {
    if (!user) return;

    const updatedHistory = [...quizHistory, result];
    setQuizHistory(updatedHistory);
    localStorage.setItem(`quiz_history_${user.id}`, JSON.stringify(updatedHistory));
    calculateStats(updatedHistory);

    toast({
      title: "Quiz Completed!",
      description: `You scored ${result.score}/${result.totalQuestions}. Great job!`,
    });
  };

  const getRecommendedQuiz = () => {
    if (quizHistory.length === 0) return 'beginner';
    
    const recentResults = quizHistory.slice(-3);
    const averageScore = recentResults.reduce((sum, result) => sum + (result.score / result.totalQuestions), 0) / recentResults.length;
    
    if (averageScore >= 0.8) return 'advanced';
    if (averageScore >= 0.6) return 'intermediate';
    return 'beginner';
  };

  return {
    quizHistory,
    currentStreak,
    totalPoints,
    saveQuizResult,
    getRecommendedQuiz
  };
};
