
-- First, let's see what lessons already exist
SELECT id, title FROM cultural_lessons ORDER BY id;

-- Add the new Business Culture and Professional Etiquette lesson with the next available ID
INSERT INTO cultural_lessons (title, description, icon, content, duration, difficulty)
VALUES (
  'Business Culture and Professional Etiquette',
  'Learn about professional customs, business practices, and workplace etiquette in Ghana.',
  'Users',
  '["Introduction to Business Culture", "Professional Communication", "Meeting Etiquette and Networking"]'::jsonb,
  '15 minutes',
  'intermediate'
);
