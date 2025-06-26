
import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';

export const useBuddyRole = () => {
  const [isBuddy, setIsBuddy] = useState(false);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    const checkBuddyRole = async () => {
      if (!user) {
        setIsBuddy(false);
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('buddy_profiles')
          .select('id')
          .eq('user_id', user.id)
          .single();

        if (error && error.code !== 'PGRST116') {
          console.error('Error checking buddy role:', error);
        }

        setIsBuddy(!!data);
      } catch (error) {
        console.error('Error checking buddy role:', error);
        setIsBuddy(false);
      } finally {
        setLoading(false);
      }
    };

    checkBuddyRole();
  }, [user]);

  return { isBuddy, loading };
};
