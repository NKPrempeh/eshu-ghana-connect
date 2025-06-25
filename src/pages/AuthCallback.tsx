
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const AuthCallback = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error('Auth callback error:', error);
          toast({
            title: "Authentication Error",
            description: error.message,
            variant: "destructive",
          });
          navigate('/login');
          return;
        }

        if (data.session) {
          console.log('User authenticated successfully');
          toast({
            title: "Email Verified!",
            description: "Your email has been confirmed. Welcome to Eshu!",
          });
          navigate('/?verified=true');
        } else {
          navigate('/login');
        }
      } catch (error) {
        console.error('Unexpected error:', error);
        navigate('/login');
      }
    };

    handleAuthCallback();
  }, [navigate, toast]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-gray-600">Verifying your email...</p>
      </div>
    </div>
  );
};

export default AuthCallback;
