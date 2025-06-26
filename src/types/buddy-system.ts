
export interface BuddyProfile {
  id: string;
  user_id: string;
  name: string;
  location: string;
  bio: string;
  specialties: string[];
  languages: string[];
  avatar_url: string;
  rating: number;
  review_count: number;
  response_time: string;
}

export interface Message {
  id: string;
  content: string;
  sender_id: string;
  recipient_id: string;
  sent_at: string;
}

export interface Connection {
  id: string;
  buddy_id: string;
  status: string;
  message?: string;
  requested_at: string;
  created_at?: string;
}
