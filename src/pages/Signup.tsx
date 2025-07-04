
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UserPlus, CheckCircle } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [country, setCountry] = useState("");
  const [purpose, setPurpose] = useState("");
  const [loading, setLoading] = useState(false);
  const { signUp, user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      console.log('User is logged in, redirecting to home');
      navigate("/");
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await signUp(email, password, {
      full_name: fullName,
      country: country,
      purpose: purpose,
    });

    if (error) {
      console.error('Signup error:', error);
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
      toast({
        title: "Account created successfully!",
        description: "You are now logged in and can use all features.",
        duration: 3000,
      });
      // Navigation will happen automatically via useEffect when user state updates
    }
    setLoading(false);
  };

  const countries = [
    "United States", "United Kingdom", "Canada", "Australia", "Germany", 
    "France", "Netherlands", "Spain", "Italy", "Sweden", "Norway", "Denmark",
    "South Africa", "Kenya", "Nigeria", "Egypt", "Morocco", "Japan", "China",
    "India", "South Korea", "Singapore", "Brazil", "Mexico", "Argentina", "Other"
  ];

  const purposes = [
    "Tourism/Vacation", "Business/Work", "Education/Study", "Relocation/Moving",
    "Cultural Exchange", "Volunteer Work", "Research", "Family Visit", "Other"
  ];

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
                  <Label htmlFor="country">Country of Origin</Label>
                  <Select value={country} onValueChange={setCountry} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map((c) => (
                        <SelectItem key={c} value={c}>{c}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="purpose">Purpose of Visit to Ghana</Label>
                  <Select value={purpose} onValueChange={setPurpose} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your purpose" />
                    </SelectTrigger>
                    <SelectContent>
                      {purposes.map((p) => (
                        <SelectItem key={p} value={p}>{p}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="Create a password (min 6 characters)"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={6}
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
              
              {/* Instant access notice */}
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="text-green-500 mt-0.5" size={16} />
                  <div className="text-sm text-green-700">
                    <strong>Instant Access:</strong> Your account will be created and you'll be logged in immediately!
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

export default Signup;
