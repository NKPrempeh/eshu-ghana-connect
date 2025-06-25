
import { useEffect, useState } from "react";
import { CheckCircle, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const EmailVerificationSuccess = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check if user just verified their email
    const urlParams = new URLSearchParams(window.location.search);
    const isVerified = urlParams.get('verified') === 'true';
    
    if (isVerified) {
      setShow(true);
      // Clean up URL
      window.history.replaceState({}, document.title, '/');
      
      // Auto hide after 5 seconds
      setTimeout(() => {
        setShow(false);
      }, 5000);
    }
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 animate-fade-in">
      <Card className="max-w-md w-full shadow-xl animate-bounce">
        <CardHeader className="text-center">
          <div className="relative mx-auto mb-4">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center animate-pulse">
              <CheckCircle className="text-green-600" size={40} />
            </div>
            <Sparkles className="absolute -top-2 -right-2 text-yellow-500 animate-pulse" size={24} />
            <Sparkles className="absolute -bottom-1 -left-2 text-yellow-500 animate-pulse" size={20} />
          </div>
          <CardTitle className="text-2xl text-green-800">Welcome to Eshu!</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-gray-600 mb-4">
            Your email has been verified successfully! You are now logged in and ready to explore Ghanaian culture.
          </p>
          <div className="flex items-center justify-center space-x-1 text-sm text-gray-500">
            <span>🇬🇭</span>
            <span>Ready to start your cultural journey!</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
