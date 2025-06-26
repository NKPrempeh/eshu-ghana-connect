
-- Enable RLS on buddy_profiles table
ALTER TABLE buddy_profiles ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read buddy profiles (for browsing buddies)
CREATE POLICY "Allow public read access to buddy profiles" ON buddy_profiles
  FOR SELECT USING (true);

-- Allow anyone to insert new buddy profiles (for signup)
CREATE POLICY "Allow public insert to buddy profiles" ON buddy_profiles
  FOR INSERT WITH CHECK (true);

-- Allow users to update their own buddy profiles
CREATE POLICY "Users can update their own buddy profiles" ON buddy_profiles
  FOR UPDATE USING (auth.uid()::text = user_id::text);

-- Allow users to delete their own buddy profiles
CREATE POLICY "Users can delete their own buddy profiles" ON buddy_profiles
  FOR DELETE USING (auth.uid()::text = user_id::text);
