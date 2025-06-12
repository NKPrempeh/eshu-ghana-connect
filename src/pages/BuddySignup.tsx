import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UserPlus, Users, Clock, MapPin } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const BuddySignup = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    bio: "",
    specialties: "",
    languages: "",
    response_time: "Usually responds within 1 hour",
    avatar_url: ""
  });
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      toast({
        title: "Please log in",
        description: "You need to be logged in to become a buddy.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const specialtiesArray = formData.specialties.split(',').map(s => s.trim()).filter(s => s);
      const languagesArray = formData.languages.split(',').map(s => s.trim()).filter(s => s);

      const { error } = await supabase
        .from('buddy_profiles')
        .insert([
          {
            user_id: user.id,
            name: formData.name,
            location: formData.location,
            bio: formData.bio,
            specialties: specialtiesArray,
            languages: languagesArray,
            response_time: formData.response_time,
            avatar_url: formData.avatar_url || `https://api.dicebear.com/7.x/avataaars/svg?seed=${formData.name}`,
            is_available: false // Start as false for vetting
          }
        ]);

      if (error) {
        console.error('Error creating buddy profile:', error);
        toast({
          title: "Error",
          description: "Failed to submit your buddy application. Please try again.",
          variant: "destructive",
        });
      } else {
        // Send email to the applicant
        try {
          const emailResponse = await supabase.functions.invoke('send-buddy-signup-email', {
            body: {
              applicantName: formData.name,
              applicantEmail: user.email,
              location: formData.location,
              bio: formData.bio,
              specialties: specialtiesArray,
              languages: languagesArray
            }
          });
          
          if (emailResponse.error) {
            console.error('Error sending email:', emailResponse.error);
          }
        } catch (emailError) {
          console.error('Error sending signup email:', emailError);
          // Don't fail the whole process if email fails
        }

        toast({
          title: "Application Submitted!",
          description: "Your buddy application has been submitted for review. Check your email for next steps!",
        });
        navigate("/buddy-system");
      }
    } catch (error) {
      console.error('Error creating buddy profile:', error);
      toast({
        title: "Error",
        description: "Failed to submit your application. Please try again.",
        variant: "destructive",
      });
    }
    setLoading(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
        <Navigation />
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Please Log In</h1>
            <p className="text-gray-600 mb-8">You need to be logged in to apply as a buddy.</p>
            <Button onClick={() => navigate("/login")} className="ghana-gradient">
              Go to Login
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-lg border-l-4 border-l-primary">
            <CardHeader className="text-center">
              <div className="w-16 h-16 ghana-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <CardTitle className="text-3xl">Become a Cultural Buddy</CardTitle>
              <CardDescription className="text-lg">
                Help newcomers integrate into Ghanaian culture by sharing your knowledge and experience
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">What is a Cultural Buddy?</h3>
                <p className="text-sm text-blue-700">
                  Cultural buddies are experienced locals or long-term residents who help newcomers navigate Ghanaian culture, 
                  traditions, and daily life. You'll provide guidance, answer questions, and offer support through real-time chat.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input 
                      id="name" 
                      type="text" 
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">
                      <MapPin className="inline mr-1" size={16} />
                      Location *
                    </Label>
                    <Input 
                      id="location" 
                      type="text" 
                      placeholder="e.g., Accra, Kumasi, Cape Coast"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Tell us about yourself *</Label>
                  <Textarea 
                    id="bio" 
                    placeholder="Share your background, experience in Ghana, and why you want to help newcomers..."
                    value={formData.bio}
                    onChange={(e) => handleInputChange('bio', e.target.value)}
                    required
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="specialties">Areas of Expertise *</Label>
                  <Input 
                    id="specialties" 
                    type="text" 
                    placeholder="e.g., Business, Education, Healthcare, Local customs (separate with commas)"
                    value={formData.specialties}
                    onChange={(e) => handleInputChange('specialties', e.target.value)}
                    required
                  />
                  <p className="text-sm text-gray-600">Separate multiple specialties with commas</p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="languages">Languages Spoken *</Label>
                    <Input 
                      id="languages" 
                      type="text" 
                      placeholder="e.g., English, Twi, Ga, French"
                      value={formData.languages}
                      onChange={(e) => handleInputChange('languages', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="response_time">
                      <Clock className="inline mr-1" size={16} />
                      Expected Response Time
                    </Label>
                    <Select value={formData.response_time} onValueChange={(value) => handleInputChange('response_time', value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Usually responds within 30 minutes">Within 30 minutes</SelectItem>
                        <SelectItem value="Usually responds within 1 hour">Within 1 hour</SelectItem>
                        <SelectItem value="Usually responds within 2 hours">Within 2 hours</SelectItem>
                        <SelectItem value="Usually responds within 4 hours">Within 4 hours</SelectItem>
                        <SelectItem value="Usually responds within 1 day">Within 1 day</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="avatar_url">Profile Picture URL (Optional)</Label>
                  <Input 
                    id="avatar_url" 
                    type="url" 
                    placeholder="https://example.com/your-photo.jpg"
                    value={formData.avatar_url}
                    onChange={(e) => handleInputChange('avatar_url', e.target.value)}
                  />
                  <p className="text-sm text-gray-600">Leave blank to use an auto-generated avatar</p>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h3 className="font-semibold text-yellow-800 mb-2">Vetting Process & Next Steps</h3>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• You'll receive an email with required documents</li>
                    <li>• Submit ID, proof of residence, and references</li>
                    <li>• Background verification (3-5 business days)</li>
                    <li>• Video interview with our team</li>
                    <li>• Final approval typically takes 7-10 days</li>
                  </ul>
                </div>

                <Button 
                  type="submit" 
                  className="w-full ghana-gradient hover:opacity-90 transition-opacity"
                  disabled={loading}
                >
                  {loading ? "Submitting Application..." : "Submit Buddy Application"}
                  <UserPlus className="ml-2" size={16} />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BuddySignup;
