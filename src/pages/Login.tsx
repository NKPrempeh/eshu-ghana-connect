import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LogIn, Users } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn, user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      console.log('User is already logged in, redirecting to home');
      navigate("/");
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent, redirectTo?: string) => {
    e.preventDefault();
    setLoading(true);

    console.log('Attempting login with:', email);
    const { error } = await signIn(email, password);

    if (error) {
      console.error('Login error:', error);
      
      let errorMessage = "Login failed. Please check your credentials.";
      
      if (error.message.includes('Invalid login credentials')) {
        errorMessage = "Invalid email or password. Please try again or sign up if you don't have an account.";
      } else if (error.message.includes('Email not confirmed')) {
        errorMessage = "Please check your email and confirm your account.";
      }
      
      toast({
        title: "Login Error",
        description: errorMessage,
        variant: "destructive",
      });
    } else {
      console.log('Login successful');
      toast({
        title: "Welcome back!",
        description: "You have successfully signed in.",
      });
      
      // Redirect based on login type
      if (redirectTo === 'buddy-dashboard') {
        navigate('/buddy-dashboard');
      }
      // Otherwise, navigation will happen automatically via useEffect when user state updates
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
              <Tabs defaultValue="user" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="user">User Login</TabsTrigger>
                  <TabsTrigger value="buddy">Buddy Login</TabsTrigger>
                </TabsList>
                
                <TabsContent value="user">
                  <form onSubmit={(e) => handleSubmit(e)} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="user-email">Email</Label>
                      <Input 
                        id="user-email" 
                        type="email" 
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="user-password">Password</Label>
                      <Input 
                        id="user-password" 
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
                      {loading ? "Signing In..." : "Sign In as User"}
                    </Button>
                  </form>
                </TabsContent>
                
                <TabsContent value="buddy">
                  <form onSubmit={(e) => handleSubmit(e, 'buddy-dashboard')} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="buddy-email">Email</Label>
                      <Input 
                        id="buddy-email" 
                        type="email" 
                        placeholder="Enter your buddy email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="buddy-password">Password</Label>
                      <Input 
                        id="buddy-password" 
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
                      className="w-full bg-green-600 hover:bg-green-700 text-white transition-colors"
                      disabled={loading}
                    >
                      {loading ? "Signing In..." : "Sign In as Buddy"}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
              
              <div className="text-center text-sm text-gray-600 mt-4">
                Don't have an account?{" "}
                <Link to="/signup" className="text-primary hover:underline">
                  Sign up here
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
