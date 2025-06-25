
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
          console.log('User signed in successfully, checking if from email confirmation...');
          // Check if this is from email confirmation by looking at the URL
          const urlParams = new URLSearchParams(window.location.search);
          const isFromEmailConfirmation = urlParams.has('type') && urlParams.get('type') === 'signup';
          
          if (isFromEmailConfirmation) {
            // Clear the URL parameters and redirect to home with success state
            window.history.replaceState({}, document.title, '/');
            // Add a small delay to show success animation
            setTimeout(() => {
              window.location.href = '/?verified=true';
            }, 100);
          }
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
      // Use the current window location origin for redirect
      const redirectUrl = `${window.location.protocol}//${window.location.host}/`;
      console.log('Using redirect URL:', redirectUrl);
      
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: userData,
          emailRedirectTo: redirectUrl
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
