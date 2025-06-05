
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserPlus, Mail } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const { signUp } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await signUp(email, password, {
      full_name: fullName,
    });

    if (error) {
      if (error.message.includes('already registered')) {
        toast({
          title: "Account exists",
          description: "This email is already registered. Try logging in instead.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      }
    } else {
      setEmailSent(true);
      toast({
        title: "Check your email!",
        description: "We've sent you a confirmation link. Please check your email to activate your account.",
      });
    }
    setLoading(false);
  };

  if (emailSent) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
        <Navigation />
        
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-md mx-auto">
            <Card className="shadow-lg border-l-4 border-l-primary">
              <CardHeader className="text-center">
                <div className="w-16 h-16 ghana-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-white" size={32} />
                </div>
                <CardTitle className="text-2xl">Check Your Email</CardTitle>
                <CardDescription>
                  We've sent a confirmation link to {email}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-sm text-green-700">
                    <strong>Next Steps:</strong>
                  </p>
                  <ol className="text-sm text-green-700 mt-2 text-left list-decimal list-inside space-y-1">
                    <li>Check your email inbox (and spam folder)</li>
                    <li>Click the confirmation link in the email</li>
                    <li>You'll be redirected back to log in</li>
                  </ol>
                </div>
                
                <div className="space-y-2">
                  <Button 
                    onClick={() => setEmailSent(false)}
                    variant="outline" 
                    className="w-full"
                  >
                    Try Again with Different Email
                  </Button>
                  <Link to="/login">
                    <Button variant="ghost" className="w-full">
                      Already confirmed? Sign in here
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-md mx-auto">
          <Card className="shadow-lg border-l-4 border-l-primary">
            <CardHeader className="text-center">
              <div className="w-16 h-16 ghana-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <UserPlus className="text-white" size={32} />
              </div>
              <CardTitle className="text-2xl">Join Eshu!</CardTitle>
              <CardDescription>
                Create your account to start your cultural journey
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input 
                    id="fullName" 
                    type="text" 
                    placeholder="Enter your full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    className="w-full"
                  />
                </div>
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
                    placeholder="Create a password"
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
                  {loading ? "Creating Account..." : "Sign Up"}
                </Button>
                <div className="text-center text-sm text-gray-600">
                  Already have an account?{" "}
                  <Link to="/login" className="text-primary hover:underline">
                    Sign in here
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Signup;
