
export interface Lesson {
  id: number;
  title: string;
  description: string;
  content: any[]; // Can be string[] or structured content objects
  duration: string;
  difficulty: string;
  icon: string;
  completed?: boolean;
}
