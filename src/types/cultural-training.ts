
export interface Lesson {
  id: number;
  title: string;
  description: string;
  content: string[];
  duration: string;
  difficulty: string;
  icon: string;
  completed?: boolean;
}
