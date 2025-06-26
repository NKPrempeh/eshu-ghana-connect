
-- Update the cultural_lessons table to better support rich content
-- First, let's clear existing lessons and add the new expanded content

-- Clear existing lessons
DELETE FROM cultural_lessons;

-- Reset the sequence
ALTER SEQUENCE cultural_lessons_id_seq RESTART WITH 1;

-- Insert the new expanded lessons with rich content
INSERT INTO cultural_lessons (title, description, icon, content, duration, difficulty) VALUES
(
  'Ghanaian Greetings & Social Etiquette',
  'Learn the essential greetings and social customs that form the foundation of Ghanaian interactions.',
  'Users',
  '[
    {
      "type": "heading",
      "content": "Respect Starts with Greetings"
    },
    {
      "type": "text",
      "content": "Greetings are a must—it''s rude to ignore someone when entering a room or starting a conversation."
    },
    {
      "type": "text",
      "content": "In local languages:"
    },
    {
      "type": "list",
      "content": [
        "Twi: Maakye (morning), Maaha (afternoon), Maadwo (evening)",
        "Ga: Ojekoo (well done)",
        "Ewe: Ndi (morning), Woezor (welcome)"
      ]
    },
    {
      "type": "heading",
      "content": "Elders First"
    },
    {
      "type": "list",
      "content": [
        "Always greet elders before others in a group",
        "Offer a slight bow or bend slightly when greeting them as a sign of humility"
      ]
    },
    {
      "type": "heading",
      "content": "Hand Gestures"
    },
    {
      "type": "list",
      "content": [
        "Use the right hand when greeting, giving or receiving items",
        "Avoid pointing with fingers—gesture with the whole hand"
      ]
    },
    {
      "type": "heading",
      "content": "Social Norms"
    },
    {
      "type": "list",
      "content": [
        "In group settings, it''s polite to greet everyone present before sitting or speaking",
        "Even short interactions begin with greetings and light small talk"
      ]
    }
  ]'::jsonb,
  '20 minutes',
  'Beginner'
),
(
  'Traditional Foods & Dining Culture',
  'Discover Ghanaian cuisine and the cultural significance of food in social interactions.',
  'Utensils',
  '[
    {
      "type": "heading",
      "content": "What We Eat"
    },
    {
      "type": "text",
      "content": "Ghanaian cuisine is hearty and spicy. Common dishes include:"
    },
    {
      "type": "list",
      "content": [
        "Fufu & light soup/groundnut soup",
        "Banku & okro stew",
        "Kenkey & fried fish with pepper",
        "Jollof rice (a national treasure)",
        "Waakye (rice & beans combo)"
      ]
    },
    {
      "type": "heading",
      "content": "How We Eat"
    },
    {
      "type": "list",
      "content": [
        "Many traditional meals are eaten with the right hand (no cutlery)",
        "Washing stations or bowls of water are provided before meals",
        "Food is often shared communally—don''t hoard"
      ]
    },
    {
      "type": "heading",
      "content": "Dining Manners"
    },
    {
      "type": "list",
      "content": [
        "Wait to be invited before eating",
        "It''s polite to say \"Medaase\" (thank you) after eating, especially in someone''s home",
        "In formal settings, modern dining etiquette (cutlery, napkins) is followed"
      ]
    }
  ]'::jsonb,
  '25 minutes',
  'Beginner'
),
(
  'Music, Dance & Cultural Celebrations',
  'Explore Ghana''s rich musical heritage and vibrant cultural celebrations.',
  'Music',
  '[
    {
      "type": "heading",
      "content": "Sounds of Ghana"
    },
    {
      "type": "list",
      "content": [
        "Traditional music: played at funerals, festivals, and storytelling sessions",
        "Modern genres: highlife, hiplife, afrobeat, drill, and gospel",
        "Local instruments: fontomfrom, talking drums, shekere, xylophone"
      ]
    },
    {
      "type": "heading",
      "content": "Dance as Expression"
    },
    {
      "type": "list",
      "content": [
        "Dance reflects joy, grief, prayer, or protest",
        "Community dances like Adowa (Ashanti) and Agbadza (Ewe) are often performed in groups with drums"
      ]
    },
    {
      "type": "heading",
      "content": "Cultural Celebrations"
    },
    {
      "type": "list",
      "content": [
        "Homowo (Ga) – festival against hunger",
        "Aboakyer (Efutu) – deer hunting festival",
        "Damba (Northern Region) – Islamic-rooted celebration with dancing and drumming",
        "Chale Wote – modern arts festival in Accra with graffiti, fashion, and music"
      ]
    },
    {
      "type": "heading",
      "content": "Dress Code"
    },
    {
      "type": "text",
      "content": "Celebratory wear includes Kente, smocks, beads, and cloths representing family or region."
    }
  ]'::jsonb,
  '30 minutes',
  'Intermediate'
),
(
  'Languages & Communication',
  'Navigate Ghana''s linguistic diversity and learn effective communication strategies.',
  'Languages',
  '[
    {
      "type": "heading",
      "content": "Diversity of Tongues"
    },
    {
      "type": "list",
      "content": [
        "Over 70 languages spoken in Ghana",
        "English is official, but Twi, Ga, Ewe, Dagbani, and Fante are widely used"
      ]
    },
    {
      "type": "heading",
      "content": "Everyday Phrases"
    },
    {
      "type": "list",
      "content": [
        "\"Medaase\" (Thank you – Twi)",
        "\"Akpe\" (Thank you – Ewe)",
        "\"Oyiwala don\" (Thank you – Ga)",
        "\"Ɛte sɛn?\" (How are you? – Twi)"
      ]
    },
    {
      "type": "heading",
      "content": "Speaking with Care"
    },
    {
      "type": "list",
      "content": [
        "Avoid direct confrontation—use tact and diplomacy",
        "It''s better to say, \"Let''s think about it\" than \"No, that''s wrong.\"",
        "Humour and local proverbs are respected ways of making a point"
      ]
    }
  ]'::jsonb,
  '18 minutes',
  'Beginner'
),
(
  'Business Culture & Professional Etiquette',
  'Master professional interactions and workplace customs in Ghana.',
  'Users',
  '[
    {
      "type": "heading",
      "content": "Office Behavior"
    },
    {
      "type": "list",
      "content": [
        "Be respectful of hierarchy—use titles like Mr., Madam, Dr., etc.",
        "Stand when greeting a senior colleague or visitor"
      ]
    },
    {
      "type": "heading",
      "content": "Punctuality & Time"
    },
    {
      "type": "list",
      "content": [
        "Be on time, even if others are not. It shows respect",
        "Confirm meetings beforehand and follow up afterward"
      ]
    },
    {
      "type": "heading",
      "content": "Email & Phone Manners"
    },
    {
      "type": "list",
      "content": [
        "Use a professional tone: start with greetings, end with \"Regards\" or \"Thank you.\"",
        "Answer phone calls politely and introduce yourself"
      ]
    },
    {
      "type": "heading",
      "content": "Building Trust"
    },
    {
      "type": "list",
      "content": [
        "Ghanaians value relationships—take time to connect",
        "Handshakes, thank-yous, and even food-sharing build goodwill"
      ]
    }
  ]'::jsonb,
  '22 minutes',
  'Intermediate'
),
(
  'Transportation & Getting Around',
  'Learn how to navigate Ghana''s transportation system safely and effectively.',
  'MapPin',
  '[
    {
      "type": "heading",
      "content": "Types of Transport"
    },
    {
      "type": "list",
      "content": [
        "Trotros – Shared minivans, cheap but crowded",
        "Taxis – Negotiated price; no meter",
        "Uber/Bolt/Yango – App-based, more comfortable",
        "Okadas – Motorbike taxis, faster but riskier"
      ]
    },
    {
      "type": "heading",
      "content": "Navigating the System"
    },
    {
      "type": "list",
      "content": [
        "Ask locals for directions—addresses may not be well-marked",
        "Landmarks are often used instead of street names"
      ]
    },
    {
      "type": "heading",
      "content": "Transit Etiquette"
    },
    {
      "type": "list",
      "content": [
        "Greet the driver and other passengers politely",
        "Offer help to the elderly or mothers with children",
        "Don''t take up too much space or argue loudly in public transport"
      ]
    },
    {
      "type": "heading",
      "content": "Safety First"
    },
    {
      "type": "list",
      "content": [
        "Keep your belongings secure in crowds",
        "Avoid late-night walks alone in unfamiliar areas",
        "Trust your instincts—if a ride feels unsafe, skip it"
      ]
    }
  ]'::jsonb,
  '25 minutes',
  'Beginner'
);
