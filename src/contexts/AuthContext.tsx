
import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signUp: (email: string, password: string, userData?: any) => Promise<{ error: any }>;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Setting up auth state listener...');
    
    // Set up auth state listener first
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('Auth event:', event, 'Session:', session?.user?.email || 'null');
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);
        
        // Handle successful sign in (including after email confirmation)
        if (event === 'SIGNED_IN' && session) {
          console.log('User signed in successfully, redirecting...');
          // Redirect to home page after successful login
          setTimeout(() => {
            window.location.href = '/';
          }, 100);
        }
        
        // Handle token refresh
        if (event === 'TOKEN_REFRESHED' && session) {
          console.log('Token refreshed successfully');
        }
      }
    );

    // Then get initial session
    supabase.auth.getSession().then(({ data: { session }, error }) => {
      if (error) {
        console.error('Error getting session:', error);
      }
      console.log('Initial session check:', session?.user?.email || 'No session');
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signUp = async (email: string, password: string, userData?: any) => {
    console.log('Attempting signup for:', email);
    
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: userData,
          emailRedirectTo: `${window.location.origin}/`
        }
      });
      
      console.log('Signup result:', { 
        user: data.user?.email, 
        session: data.session ? 'present' : 'null',
        error: error?.message 
      });
      
      return { error };
    } catch (err) {
      console.error('Signup error:', err);
      return { error: err };
    }
  };

  const signIn = async (email: string, password: string) => {
    console.log('Attempting to sign in:', email);
    
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      console.log('Signin result:', { 
        user: data.user?.email, 
        session: data.session ? 'present' : 'null',
        error: error?.message 
      });
      
      return { error };
    } catch (err) {
      console.error('Signin error:', err);
      return { error: err };
    }
  };

  const signOut = async () => {
    console.log('Signing out...');
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Signout error:', error);
    } else {
      console.log('Signed out successfully');
    }
  };

  const value = {
    user,
    session,
    loading,
    signUp,
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
