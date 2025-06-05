
-- Remove the invalid buddy profiles that reference non-existent users
DELETE FROM public.buddy_profiles;

-- We'll let real users create their own buddy profiles through the app
-- Or we can create them when users sign up with a trigger if needed

-- Add a trigger to optionally create buddy profiles for new users
CREATE OR REPLACE FUNCTION public.create_buddy_profile_for_new_user()
RETURNS TRIGGER AS $$
BEGIN
  -- Only create buddy profile if user has specified they want to be a buddy
  -- This could be based on user metadata or a separate flag
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create an optional trigger (commented out for now)
-- CREATE TRIGGER on_auth_user_created_buddy
--   AFTER INSERT ON auth.users
--   FOR EACH ROW EXECUTE PROCEDURE public.create_buddy_profile_for_new_user();
