
-- Add email column to buddy_profiles table since it's required but missing
ALTER TABLE buddy_profiles ADD COLUMN email text;

-- Make email required for new entries
ALTER TABLE buddy_profiles ALTER COLUMN email SET NOT NULL;
