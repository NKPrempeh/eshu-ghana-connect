
-- Update cultural lessons with real Ghanaian cultural information
UPDATE cultural_lessons SET 
  content = '["Learn traditional Ghanaian greetings in Twi, Ga, and Ewe languages", "Understand the importance of greetings in Ghanaian social interactions", "Practice proper pronunciation and context for common greetings", "Master formal vs informal greeting protocols", "Learn age-appropriate and gender-specific greeting customs"]'::jsonb
WHERE title = 'Basic Greetings and Language';

UPDATE cultural_lessons SET 
  content = '["Understand Ghanaian meal times and dining etiquette", "Learn about staple foods like fufu, banku, kenkey, and jollof rice", "Discover the significance of communal eating and sharing meals", "Master proper hand-washing rituals before and after meals", "Learn about food taboos and dietary customs in different regions"]'::jsonb
WHERE title = 'Food Culture and Dining Etiquette';

UPDATE cultural_lessons SET 
  content = '["Explore traditional Ghanaian music genres like Highlife and Hiplife", "Learn about traditional instruments: kagan, atumpan, and seperewa", "Understand the role of music in ceremonies and festivals", "Discover contemporary Ghanaian artists and their global influence", "Practice traditional dance moves and their cultural meanings"]'::jsonb
WHERE title = 'Music and Dance Traditions';

UPDATE cultural_lessons SET 
  content = '["Learn about respect for elders and hierarchical social structures", "Understand the concept of extended family and community responsibility", "Master workplace etiquette and professional relationships", "Learn about gift-giving customs and social reciprocity", "Understand conflict resolution and community harmony practices"]'::jsonb
WHERE title = 'Social Customs and Etiquette';

UPDATE cultural_lessons SET 
  content = '["Explore Ghana''s 16 administrative regions and their unique characteristics", "Learn about major cities: Accra, Kumasi, Tamale, and Cape Coast", "Understand geographical features: coast, forest, and savanna regions", "Discover important landmarks and historical sites", "Learn about climate patterns and seasonal variations across regions"]'::jsonb
WHERE title = 'Geography and Regions';

UPDATE cultural_lessons SET 
  content = '["Learn about Ghana''s pre-colonial kingdoms: Ashanti, Dagbon, and Ga", "Understand the impact of the trans-Atlantic slave trade", "Explore the colonial period under British rule", "Discover Ghana''s independence movement led by Kwame Nkrumah", "Learn about post-independence political and economic development"]'::jsonb
WHERE title = 'History and Heritage';
