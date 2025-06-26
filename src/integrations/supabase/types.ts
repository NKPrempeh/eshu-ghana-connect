export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      art: {
        Row: {
          attendees: number | null
          date: string | null
          description: string | null
          id: string
          image_url: string | null
          location: string | null
          name: string
          time: string | null
        }
        Insert: {
          attendees?: number | null
          date?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          location?: string | null
          name: string
          time?: string | null
        }
        Update: {
          attendees?: number | null
          date?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          location?: string | null
          name?: string
          time?: string | null
        }
        Relationships: []
      }
      buddy: {
        Row: {
          buddy_id: string | null
          connected_at: string | null
          id: number
          user_id: string | null
        }
        Insert: {
          buddy_id?: string | null
          connected_at?: string | null
          id: number
          user_id?: string | null
        }
        Update: {
          buddy_id?: string | null
          connected_at?: string | null
          id?: number
          user_id?: string | null
        }
        Relationships: []
      }
      buddy_connections: {
        Row: {
          buddy_id: string | null
          created_at: string | null
          id: string
          message: string | null
          requested_at: string | null
          status: string
          user_id: string | null
        }
        Insert: {
          buddy_id?: string | null
          created_at?: string | null
          id?: string
          message?: string | null
          requested_at?: string | null
          status?: string
          user_id?: string | null
        }
        Update: {
          buddy_id?: string | null
          created_at?: string | null
          id?: string
          message?: string | null
          requested_at?: string | null
          status?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "buddy_connections_buddy_id_fkey"
            columns: ["buddy_id"]
            isOneToOne: false
            referencedRelation: "buddy_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      buddy_matches: {
        Row: {
          buddy_id: string | null
          connected_at: string | null
          id: number
          user_id: string | null
        }
        Insert: {
          buddy_id?: string | null
          connected_at?: string | null
          id?: number
          user_id?: string | null
        }
        Update: {
          buddy_id?: string | null
          connected_at?: string | null
          id?: number
          user_id?: string | null
        }
        Relationships: []
      }
      buddy_profiles: {
        Row: {
          avatar_url: string | null
          bio: string
          created_at: string | null
          email: string
          id: string
          is_available: boolean | null
          languages: string[]
          location: string
          name: string
          rating: number | null
          response_time: string | null
          review_count: number | null
          specialties: string[]
          user_id: string | null
        }
        Insert: {
          avatar_url?: string | null
          bio: string
          created_at?: string | null
          email: string
          id?: string
          is_available?: boolean | null
          languages?: string[]
          location: string
          name: string
          rating?: number | null
          response_time?: string | null
          review_count?: number | null
          specialties?: string[]
          user_id?: string | null
        }
        Update: {
          avatar_url?: string | null
          bio?: string
          created_at?: string | null
          email?: string
          id?: string
          is_available?: boolean | null
          languages?: string[]
          location?: string
          name?: string
          rating?: number | null
          response_time?: string | null
          review_count?: number | null
          specialties?: string[]
          user_id?: string | null
        }
        Relationships: []
      }
      cultural_lessons: {
        Row: {
          content: Json
          created_at: string | null
          description: string
          difficulty: string
          duration: string
          icon: string
          id: number
          title: string
        }
        Insert: {
          content?: Json
          created_at?: string | null
          description: string
          difficulty: string
          duration: string
          icon: string
          id?: number
          title: string
        }
        Update: {
          content?: Json
          created_at?: string | null
          description?: string
          difficulty?: string
          duration?: string
          icon?: string
          id?: number
          title?: string
        }
        Relationships: []
      }
      entertainment: {
        Row: {
          attendees: number | null
          date: string | null
          description: string | null
          id: string
          image_url: string | null
          location: string | null
          name: string
          time: string | null
        }
        Insert: {
          attendees?: number | null
          date?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          location?: string | null
          name: string
          time?: string | null
        }
        Update: {
          attendees?: number | null
          date?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          location?: string | null
          name?: string
          time?: string | null
        }
        Relationships: []
      }
      events_places: {
        Row: {
          date: string
          description: string | null
          id: number
          image_url: string | null
          location: string
          title: string
        }
        Insert: {
          date: string
          description?: string | null
          id?: number
          image_url?: string | null
          location: string
          title: string
        }
        Update: {
          date?: string
          description?: string | null
          id?: number
          image_url?: string | null
          location?: string
          title?: string
        }
        Relationships: []
      }
      festivals: {
        Row: {
          attendees: number | null
          date: string | null
          description: string | null
          id: string
          image_url: string | null
          location: string | null
          name: string
          time: string | null
        }
        Insert: {
          attendees?: number | null
          date?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          location?: string | null
          name: string
          time?: string | null
        }
        Update: {
          attendees?: number | null
          date?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          location?: string | null
          name?: string
          time?: string | null
        }
        Relationships: []
      }
      food: {
        Row: {
          attendees: number | null
          date: string | null
          description: string | null
          id: string
          image_url: string | null
          location: string | null
          name: string
          time: string | null
        }
        Insert: {
          attendees?: number | null
          date?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          location?: string | null
          name: string
          time?: string | null
        }
        Update: {
          attendees?: number | null
          date?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          location?: string | null
          name?: string
          time?: string | null
        }
        Relationships: []
      }
      hotels: {
        Row: {
          attendees: number | null
          date: string | null
          description: string | null
          id: string
          image_url: string | null
          location: string | null
          name: string
          time: string | null
        }
        Insert: {
          attendees?: number | null
          date?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          location?: string | null
          name: string
          time?: string | null
        }
        Update: {
          attendees?: number | null
          date?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          location?: string | null
          name?: string
          time?: string | null
        }
        Relationships: []
      }
      messages: {
        Row: {
          content: string
          id: number
          recipient_id: string | null
          sender_id: string | null
          sent_at: string | null
        }
        Insert: {
          content: string
          id?: number
          recipient_id?: string | null
          sender_id?: string | null
          sent_at?: string | null
        }
        Update: {
          content?: string
          id?: number
          recipient_id?: string | null
          sender_id?: string | null
          sent_at?: string | null
        }
        Relationships: []
      }
      places: {
        Row: {
          attendees: number | null
          date: string | null
          description: string | null
          id: string
          image_url: string | null
          location: string | null
          name: string
          time: string | null
        }
        Insert: {
          attendees?: number | null
          date?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          location?: string | null
          name: string
          time?: string | null
        }
        Update: {
          attendees?: number | null
          date?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          location?: string | null
          name?: string
          time?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          full_name: string | null
          id: string
          updated_at: string
          username: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          full_name?: string | null
          id: string
          updated_at?: string
          username?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          full_name?: string | null
          id?: string
          updated_at?: string
          username?: string | null
        }
        Relationships: []
      }
      user_lesson_progress: {
        Row: {
          completed_at: string | null
          id: string
          lesson_id: number | null
          user_id: string | null
        }
        Insert: {
          completed_at?: string | null
          id?: string
          lesson_id?: number | null
          user_id?: string | null
        }
        Update: {
          completed_at?: string | null
          id?: string
          lesson_id?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_lesson_progress_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "cultural_lessons"
            referencedColumns: ["id"]
          },
        ]
      }
      USerprofile: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          username: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
