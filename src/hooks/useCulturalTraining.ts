
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { Lesson } from "@/types/cultural-training";

export const useCulturalTraining = () => {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [userProgress, setUserProgress] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    fetchLessons();
    if (user) {
      fetchUserProgress();
    }
  }, [user]);

  const fetchLessons = async () => {
    try {
      const { data, error } = await supabase
        .from('cultural_lessons')
        .select('*')
        .order('id');

      if (error) {
        console.error('Error fetching lessons:', error);
        toast({
          title: "Error",
          description: "Failed to load lessons. Please try again.",
          variant: "destructive",
        });
      } else {
        const formattedLessons = (data || []).map((lesson: any) => ({
          ...lesson,
          content: Array.isArray(lesson.content) ? lesson.content : JSON.parse(lesson.content || '[]')
        }));
        setLessons(formattedLessons);
      }
    } catch (error) {
      console.error('Error fetching lessons:', error);
      toast({
        title: "Error",
        description: "Failed to load lessons. Please try again.",
        variant: "destructive",
      });
    }
    setLoading(false);
  };

  const fetchUserProgress = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('user_lesson_progress')
        .select('lesson_id')
        .eq('user_id', user.id);

      if (error) {
        console.error('Error fetching progress:', error);
      } else {
        setUserProgress((data || []).map((p: any) => p.lesson_id));
      }
    } catch (error) {
      console.error('Error fetching progress:', error);
    }
  };

  const markLessonComplete = async (lessonId: number) => {
    if (!user) {
      toast({
        title: "Please log in",
        description: "You need to be logged in to track progress.",
        variant: "destructive",
      });
      return;
    }

    try {
      const { error } = await supabase
        .from('user_lesson_progress')
        .insert([
          { user_id: user.id, lesson_id: lessonId }
        ]);

      if (error) {
        console.error('Error marking lesson complete:', error);
        toast({
          title: "Error",
          description: "Failed to save progress. Please try again.",
          variant: "destructive",
        });
      } else {
        setUserProgress(prev => [...prev, lessonId]);
        toast({
          title: "Lesson completed!",
          description: "Your progress has been saved.",
        });
      }
    } catch (error) {
      console.error('Error marking lesson complete:', error);
      toast({
        title: "Error",
        description: "Failed to save progress. Please try again.",
        variant: "destructive",
      });
    }
  };

  return {
    lessons,
    userProgress,
    loading,
    markLessonComplete
  };
};
