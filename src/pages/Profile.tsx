
import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Upload, User, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Profile = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [profile, setProfile] = useState({
    full_name: "",
    username: "",
    avatar_url: ""
  });
  const [buddyProfile, setBuddyProfile] = useState<any>(null);

  useEffect(() => {
    if (user) {
      fetchProfile();
      fetchBuddyProfile();
    }
  }, [user]);

  const fetchProfile = async () => {
    try {
      console.log('Fetching profile for user:', user?.id);
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user?.id)
        .single();

      if (error && error.code !== 'PGRST116') {
        console.error('Error fetching profile:', error);
        return;
      }

      if (data) {
        console.log('Profile data fetched:', data);
        setProfile({
          full_name: data.full_name || "",
          username: data.username || "",
          avatar_url: data.avatar_url || ""
        });
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  const fetchBuddyProfile = async () => {
    try {
      console.log('Fetching buddy profile for user:', user?.id);
      const { data, error } = await supabase
        .from('buddy_profiles')
        .select('*')
        .eq('user_id', user?.id)
        .single();

      if (error && error.code !== 'PGRST116') {
        console.error('Error fetching buddy profile:', error);
        return;
      }

      if (data) {
        console.log('Buddy profile data fetched:', data);
        setBuddyProfile(data);
      }
    } catch (error) {
      console.error('Error fetching buddy profile:', error);
    }
  };

  const uploadAvatar = async (file: File) => {
    try {
      setUploading(true);
      console.log('Starting avatar upload...');

      const fileExt = file.name.split('.').pop();
      const fileName = `${user?.id}-${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      // Upload to user-avatars bucket (created in migration)
      const { error: uploadError } = await supabase.storage
        .from('user-avatars')
        .upload(filePath, file);

      if (uploadError) {
        console.error('Upload error:', uploadError);
        throw uploadError;
      }

      const { data } = supabase.storage.from('user-avatars').getPublicUrl(filePath);
      console.log('Avatar uploaded successfully:', data.publicUrl);
      return data.publicUrl;
    } catch (error) {
      console.error('Error uploading avatar:', error);
      throw error;
    } finally {
      setUploading(false);
    }
  };

  const handleAvatarChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const avatarUrl = await uploadAvatar(file);
      setProfile(prev => ({ ...prev, avatar_url: avatarUrl }));
      
      toast({
        title: "Avatar uploaded!",
        description: "Don't forget to save your changes.",
      });
    } catch (error) {
      console.error('Avatar upload failed:', error);
      toast({
        title: "Upload failed",
        description: "Failed to upload avatar. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleSaveProfile = async () => {
    if (!user) {
      console.error('No user found');
      toast({
        title: "Error",
        description: "No user session found. Please log in again.",
        variant: "destructive",
      });
      return;
    }

    try {
      setLoading(true);
      console.log('Saving profile for user:', user.id);
      console.log('Profile data to save:', profile);

      // Update main profile
      const { error: profileError } = await supabase
        .from('profiles')
        .upsert({
          id: user.id,
          full_name: profile.full_name,
          username: profile.username,
          avatar_url: profile.avatar_url,
          updated_at: new Date().toISOString()
        });

      if (profileError) {
        console.error('Profile update error:', profileError);
        throw profileError;
      }

      console.log('Profile updated successfully');

      // Update buddy profile if exists
      if (buddyProfile) {
        console.log('Updating buddy profile avatar...');
        const { error: buddyError } = await supabase
          .from('buddy_profiles')
          .update({
            avatar_url: profile.avatar_url
          })
          .eq('user_id', user.id);

        if (buddyError) {
          console.error('Buddy profile update error:', buddyError);
          throw buddyError;
        }
        console.log('Buddy profile updated successfully');
      }

      toast({
        title: "Profile updated!",
        description: "Your profile has been successfully updated.",
      });
    } catch (error: any) {
      console.error('Error updating profile:', error);
      toast({
        title: "Update failed",
        description: error.message || "Failed to update profile. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Helper function to safely render array data
  const renderArrayData = (data: any): string => {
    if (Array.isArray(data)) {
      return data.join(", ");
    }
    if (typeof data === 'string') {
      return data;
    }
    return "None";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Profile Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Avatar Section */}
              <div className="flex flex-col items-center space-y-4">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={profile.avatar_url} />
                  <AvatarFallback>
                    <User className="h-12 w-12" />
                  </AvatarFallback>
                </Avatar>
                
                <div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    className="hidden"
                    id="avatar-upload"
                    disabled={uploading}
                  />
                  <label
                    htmlFor="avatar-upload"
                    className="cursor-pointer inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    {uploading ? "Uploading..." : "Change Avatar"}
                  </label>
                  <p className="text-xs text-gray-500 mt-1">JPG, PNG up to 5MB</p>
                </div>
              </div>

              {/* Profile Information */}
              <div className="space-y-4">
                <div>
                  <label htmlFor="full_name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <Input
                    id="full_name"
                    value={profile.full_name}
                    onChange={(e) => setProfile(prev => ({ ...prev, full_name: e.target.value }))}
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="username" className="block text-sm font-medium mb-2">
                    Username
                  </label>
                  <Input
                    id="username"
                    value={profile.username}
                    onChange={(e) => setProfile(prev => ({ ...prev, username: e.target.value }))}
                    placeholder="Enter your username"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    value={user?.email || ""}
                    disabled
                    className="bg-gray-100"
                  />
                  <p className="text-xs text-gray-500 mt-1">Email cannot be changed here</p>
                </div>
              </div>

              {/* Buddy Profile Info */}
              {buddyProfile && (
                <div className="border-t pt-6">
                  <h3 className="text-lg font-medium mb-2">Buddy Profile</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    You are registered as a cultural buddy. Your profile picture will be updated across both profiles.
                  </p>
                  <div className="bg-green-50 p-3 rounded-md">
                    <p className="text-sm text-green-800">
                      <strong>Location:</strong> {buddyProfile.location || "Not specified"}
                    </p>
                    <p className="text-sm text-green-800">
                      <strong>Specialties:</strong> {renderArrayData(buddyProfile.specialties)}
                    </p>
                  </div>
                </div>
              )}

              {/* Save Button */}
              <Button 
                onClick={handleSaveProfile}
                disabled={loading || uploading}
                className="w-full ghana-gradient"
              >
                {loading ? (
                  <>
                    <Save className="w-4 h-4 mr-2 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
