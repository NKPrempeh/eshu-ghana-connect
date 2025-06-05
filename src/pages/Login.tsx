
import { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LogIn, CheckCircle } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn, user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Check for email confirmation
  useEffect(() => {
    const error = searchParams.get('error');
    const errorDescription = searchParams.get('error_description');
    
    if (error) {
      toast({
        title: "Authentication Error",
        description: errorDescription || "There was an error with email confirmation",
        variant: "destructive",
      });
    } else if (searchParams.get('type') === 'signup') {
      toast({
        title: "Email Confirmed!",
        description: "Your email has been confirmed. You can now log in.",
      });
    }
  }, [searchParams, toast]);

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await signIn(email, password);

    if (error) {
      console.error('Login error:', error);
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Welcome back!",
        description: "You have successfully signed in.",
      });
      navigate("/");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-md mx-auto">
          <Card className="shadow-lg border-l-4 border-l-primary">
            <CardHeader className="text-center">
              <div className="w-16 h-16 ghana-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <LogIn className="text-white" size={32} />
              </div>
              <CardTitle className="text-2xl">Welcome Back!</CardTitle>
              <CardDescription>
                Sign in to continue your journey with Eshu
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full ghana-gradient hover:opacity-90 transition-opacity"
                  disabled={loading}
                >
                  {loading ? "Signing In..." : "Sign In"}
                </Button>
                <div className="text-center text-sm text-gray-600">
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-primary hover:underline">
                    Sign up here
                  </Link>
                </div>
                <div className="text-center">
                  <Link to="/forgot-password" className="text-sm text-gray-600 hover:text-primary">
                    Forgot your password?
                  </Link>
                </div>
              </form>
              
              {/* Email confirmation notice */}
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="text-blue-500 mt-0.5" size={16} />
                  <div className="text-sm text-blue-700">
                    <strong>Email Confirmation:</strong> After signing up, check your email and click the confirmation link. You'll be redirected back here to log in.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
