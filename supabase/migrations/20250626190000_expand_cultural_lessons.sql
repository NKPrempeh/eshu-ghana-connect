
-- Add more comprehensive lessons with detailed content
INSERT INTO cultural_lessons (title, description, icon, content, duration, difficulty) VALUES
(
  'Traditional Markets & Shopping Culture',
  'Navigate Ghana''s vibrant markets and understand local shopping customs and bargaining etiquette.',
  'MapPin',
  '[
    {
      "type": "heading",
      "content": "Types of Markets"
    },
    {
      "type": "list",
      "content": [
        "Kejetia Market (Kumasi) - West Africa''s largest market",
        "Makola Market (Accra) - Central trading hub for textiles and food",
        "Kaneshie Market - Popular for wholesale goods",
        "Madina Market - Known for fresh produce and local crafts"
      ]
    },
    {
      "type": "heading",
      "content": "Bargaining Basics"
    },
    {
      "type": "text",
      "content": "Bargaining is expected and part of the cultural experience. Start by offering 50-60% of the asking price."
    },
    {
      "type": "list",
      "content": [
        "Always greet the seller first - ''Maakye'' (Good morning)",
        "Show interest but not desperation",
        "Be prepared to walk away if needed",
        "Cash payments are preferred, especially small denominations"
      ]
    },
    {
      "type": "heading",
      "content": "What to Buy"
    },
    {
      "type": "list",
      "content": [
        "Kente cloth and traditional textiles",
        "Hand-carved wooden masks and sculptures",
        "Shea butter and black soap",
        "Adinkra symbols and jewelry",
        "Fresh tropical fruits and spices"
      ]
    },
    {
      "type": "heading",
      "content": "Shopping Etiquette"
    },
    {
      "type": "list",
      "content": [
        "Dress modestly when visiting markets",
        "Keep valuables secure and be aware of surroundings",
        "Don''t touch items unless you''re seriously interested",
        "Respect the seller''s time and effort"
      ]
    }
  ]'::jsonb,
  '25 minutes',
  'Intermediate'
),
(
  'Religious Practices & Spiritual Beliefs',
  'Understand Ghana''s diverse religious landscape and respectful practices across different faiths.',
  'Users',
  '[
    {
      "type": "heading",
      "content": "Religious Diversity"
    },
    {
      "type": "text",
      "content": "Ghana is religiously diverse with Christianity (71%), Islam (18%), and traditional African religions (5%)."
    },
    {
      "type": "list",
      "content": [
        "Christianity: Predominantly Protestant denominations",
        "Islam: Mostly Sunni, concentrated in northern regions",
        "Traditional religions: Ancestor worship and nature spirits",
        "Syncretic practices: Blending of traditional and modern beliefs"
      ]
    },
    {
      "type": "heading",
      "content": "Religious Observances"
    },
    {
      "type": "list",
      "content": [
        "Sunday church services are important social gatherings",
        "Friday prayers (Jummah) for Muslims",
        "Ramadan observance in Muslim communities",
        "Traditional festivals often have spiritual components"
      ]
    },
    {
      "type": "heading",
      "content": "Respectful Practices"
    },
    {
      "type": "list",
      "content": [
        "Dress conservatively when visiting religious sites",
        "Remove shoes before entering mosques",
        "Ask permission before photographing religious ceremonies",
        "Participate respectfully if invited to religious events"
      ]
    },
    {
      "type": "heading",
      "content": "Common Phrases"
    },
    {
      "type": "list",
      "content": [
        "''Insha Allah'' - God willing (Muslim)",
        "''By God''s grace'' - Common Christian expression",
        "''The ancestors guide us'' - Traditional belief reference"
      ]
    }
  ]'::jsonb,
  '20 minutes',
  'Intermediate'
),
(
  'Family Structure & Social Hierarchy',
  'Learn about Ghanaian family dynamics, social structures, and community relationships.',
  'Users',
  '[
    {
      "type": "heading",
      "content": "Extended Family System"
    },
    {
      "type": "text",
      "content": "Ghanaian families are typically extended, including grandparents, aunts, uncles, and cousins in daily life."
    },
    {
      "type": "list",
      "content": [
        "Multiple generations often live together",
        "Children may be raised by various family members",
        "Financial responsibilities are shared across the family",
        "Decision-making often involves family consultation"
      ]
    },
    {
      "type": "heading",
      "content": "Respect for Elders"
    },
    {
      "type": "list",
      "content": [
        "Age brings automatic respect and authority",
        "Elders are consulted for important decisions",
        "Children are expected to care for aging parents",
        "Traditional knowledge is passed down through elders"
      ]
    },
    {
      "type": "heading",
      "content": "Gender Roles"
    },
    {
      "type": "text",
      "content": "Traditional gender roles exist but are evolving with modernization and education."
    },
    {
      "type": "list",
      "content": [
        "Women often manage household finances and small businesses",
        "Men traditionally seen as heads of households",
        "Both genders increasingly pursue higher education",
        "Women play significant roles in market trading"
      ]
    },
    {
      "type": "heading",
      "content": "Community Bonds"
    },
    {
      "type": "list",
      "content": [
        "''Ubuntu'' philosophy - ''I am because we are''",
        "Community members support each other during crises",
        "Collective responsibility for children''s upbringing",
        "Shared celebrations and mourning practices"
      ]
    }
  ]'::jsonb,
  '30 minutes',
  'Advanced'
),
(
  'Traditional Clothing & Fashion',
  'Explore Ghana''s rich textile traditions, clothing styles, and appropriate dress for different occasions.',
  'Users',
  '[
    {
      "type": "heading",
      "content": "Traditional Fabrics"
    },
    {
      "type": "list",
      "content": [
        "Kente - Hand-woven silk and cotton with symbolic patterns",
        "Adinkra - Cotton fabric with stamped traditional symbols",
        "Batakari - Hand-woven smock from northern Ghana",
        "Ankara/Wax print - Colorful cotton fabric with bold designs"
      ]
    },
    {
      "type": "heading",
      "content": "Men''s Traditional Wear"
    },
    {
      "type": "list",
      "content": [
        "Kente cloth draped like a toga",
        "Batakari (smock) with embroidered designs",
        "Formal suits for business and church",
        "Casual shirts and trousers for daily wear"
      ]
    },
    {
      "type": "heading",
      "content": "Women''s Traditional Wear"
    },
    {
      "type": "list",
      "content": [
        "Kaba and slit - Blouse and wrap-around skirt",
        "Kente draped as a dress or wrap",
        "Head wraps (gele) for special occasions",
        "Modern dresses with traditional prints"
      ]
    },
    {
      "type": "heading",
      "content": "Occasion-Appropriate Dress"
    },
    {
      "type": "list",
      "content": [
        "Funerals: Black, red, or dark colors",
        "Weddings: Bright, festive colors and patterns",
        "Church: Conservative, modest clothing",
        "Festivals: Traditional fabrics and bright colors",
        "Business: Western-style formal wear"
      ]
    },
    {
      "type": "heading",
      "content": "Cultural Significance"
    },
    {
      "type": "text",
      "content": "Each pattern and color in traditional fabrics tells a story or represents specific meanings."
    },
    {
      "type": "list",
      "content": [
        "Gold in Kente represents wealth and royalty",
        "Green symbolizes growth and harvest",
        "Adinkra symbols convey proverbs and wisdom",
        "Wearing traditional clothes shows cultural pride"
      ]
    }
  ]'::jsonb,
  '25 minutes',
  'Intermediate'
),
(
  'Health & Wellness Practices',
  'Understand healthcare systems, traditional medicine, and wellness practices in Ghana.',
  'Users',
  '[
    {
      "type": "heading",
      "content": "Healthcare System Overview"
    },
    {
      "type": "list",
      "content": [
        "National Health Insurance Scheme (NHIS) available",
        "Mix of public and private healthcare facilities",
        "Teaching hospitals in major cities",
        "Community health centers in rural areas"
      ]
    },
    {
      "type": "heading",
      "content": "Traditional Medicine"
    },
    {
      "type": "text",
      "content": "Traditional healing practices coexist with modern medicine and are widely respected."
    },
    {
      "type": "list",
      "content": [
        "Herbal remedies from local plants and roots",
        "Traditional healers (medicine men/women)",
        "Spiritual healing practices",
        "Massage and physical therapy techniques"
      ]
    },
    {
      "type": "heading",
      "content": "Common Health Practices"
    },
    {
      "type": "list",
      "content": [
        "Drinking lots of water, especially during hot weather",
        "Using natural ingredients like ginger and garlic",
        "Regular physical activity through daily tasks",
        "Steam baths with medicinal leaves"
      ]
    },
    {
      "type": "heading",
      "content": "Health Precautions"
    },
    {
      "type": "list",
      "content": [
        "Malaria prevention with mosquito nets and repellent",
        "Safe drinking water - boiled or bottled",
        "Sun protection during peak hours (10am-4pm)",
        "Proper food hygiene, especially street food"
      ]
    },
    {
      "type": "heading",
      "content": "Mental Health & Wellness"
    },
    {
      "type": "list",
      "content": [
        "Community support systems for stress management",
        "Religious and spiritual practices for mental peace",
        "Extended family networks provide emotional support",
        "Growing awareness of professional mental health services"
      ]
    }
  ]'::jsonb,
  '22 minutes',
  'Beginner'
),
(
  'Education System & Learning Culture',
  'Navigate Ghana''s education system and understand the cultural importance of learning.',
  'BookOpen',
  '[
    {
      "type": "heading",
      "content": "Education Structure"
    },
    {
      "type": "list",
      "content": [
        "6 years Primary School (ages 6-12)",
        "3 years Junior High School (JHS)",
        "3 years Senior High School (SHS)",
        "4 years University or Technical education"
      ]
    },
    {
      "type": "heading",
      "content": "Language of Instruction"
    },
    {
      "type": "text",
      "content": "Education is primarily in English, with local languages used in early primary years."
    },
    {
      "type": "list",
      "content": [
        "Local language instruction in first 3 years",
        "English becomes primary language from Grade 4",
        "French as a second foreign language",
        "ICT (Computer Studies) increasingly important"
      ]
    },
    {
      "type": "heading",
      "content": "Cultural Values in Education"
    },
    {
      "type": "list",
      "content": [
        "Education seen as key to family advancement",
        "Respect for teachers and learning",
        "Community investment in children''s education",
        "Merit-based progression and competition"
      ]
    },
    {
      "type": "heading",
      "content": "Higher Education"
    },
    {
      "type": "list",
      "content": [
        "University of Ghana (Legon) - oldest and most prestigious",
        "Kwame Nkrumah University of Science and Technology",
        "University of Cape Coast - known for education programs",
        "Growing number of private universities and colleges"
      ]
    },
    {
      "type": "heading",
      "content": "Adult Learning & Skills"
    },
    {
      "type": "list",
      "content": [
        "Non-formal education programs for adults",
        "Vocational and technical training institutes",
        "Apprenticeship systems in trades",
        "Literacy programs in local languages"
      ]
    }
  ]'::jsonb,
  '20 minutes',
  'Beginner'
);

-- Update existing lessons with more comprehensive content
UPDATE cultural_lessons SET 
  content = '[
    {
      "type": "heading",
      "content": "The Foundation of Respect"
    },
    {
      "type": "text",
      "content": "Greetings are more than pleasantries in Ghana - they are expressions of respect, acknowledgment, and community bonding."
    },
    {
      "type": "heading",
      "content": "Essential Daily Greetings"
    },
    {
      "type": "text",
      "content": "In Twi (most widely spoken):"
    },
    {
      "type": "list",
      "content": [
        "Maakye - Good morning",
        "Maaha - Good afternoon", 
        "Maadwo - Good evening",
        "Ɛte sɛn? - How are you?",
        "Ɛyɛ - I am fine"
      ]
    },
    {
      "type": "text",
      "content": "In Ga (Accra region):"
    },
    {
      "type": "list",
      "content": [
        "Ojekoo - Well done/Hello",
        "Ojekoo nakai - Good morning",
        "Ojekoo asha - Good afternoon"
      ]
    },
    {
      "type": "text",
      "content": "In Ewe (Volta region):"
    },
    {
      "type": "list",
      "content": [
        "Ndi - Good morning",
        "Ŋdɔ - Good afternoon",
        "Fiẽ - Good evening"
      ]
    },
    {
      "type": "heading",
      "content": "Greeting Protocols"
    },
    {
      "type": "list",
      "content": [
        "Always greet elders first before others",
        "Use your right hand for handshakes",
        "Slight bow or nod shows respect to seniors",
        "Make eye contact but not prolonged staring",
        "In group settings, greet everyone present"
      ]
    },
    {
      "type": "heading",
      "content": "Beyond Basic Greetings"
    },
    {
      "type": "list",
      "content": [
        "Ask about family - ''Wo fie ho te sɛn?'' (How is your family?)",
        "Inquire about work or health appropriately",
        "Listen actively to responses",
        "Use ''Medaase'' (Thank you) frequently"
      ]
    },
    {
      "type": "heading",
      "content": "Cultural Significance"
    },
    {
      "type": "text",
      "content": "Failing to greet is considered extremely rude and can damage relationships. Even brief encounters require acknowledgment."
    }
  ]'::jsonb,
  duration = '25 minutes'
WHERE title = 'Ghanaian Greetings & Social Etiquette';

UPDATE cultural_lessons SET 
  content = '[
    {
      "type": "heading",
      "content": "Staple Foods That Define Ghana"
    },
    {
      "type": "text",
      "content": "Ghanaian cuisine is built around starchy staples paired with protein-rich soups and stews."
    },
    {
      "type": "list",
      "content": [
        "Fufu - Pounded cassava and plantain, eaten with hands",
        "Banku - Fermented corn and cassava dough",
        "Kenkey - Fermented corn dough wrapped in corn husks",
        "Rice dishes - Jollof rice, waakye (rice and beans)",
        "Yam - Boiled, fried, or pounded"
      ]
    },
    {
      "type": "heading",
      "content": "Popular Soups and Stews"
    },
    {
      "type": "list",
      "content": [
        "Light soup - Clear broth with vegetables and meat/fish",
        "Groundnut soup - Rich peanut-based soup",
        "Palm nut soup - Made from palm fruit extract",
        "Okro stew - Thick vegetable stew",
        "Red red - Bean stew with palm oil"
      ]
    },
    {
      "type": "heading",
      "content": "Eating Customs and Etiquette"
    },
    {
      "type": "list",
      "content": [
        "Wash hands before and after meals",
        "Eat fufu and banku with your right hand only",
        "Don't chew fufu - swallow it",
        "Share food when offered - refusing can be offensive",
        "Elders are served first"
      ]
    },
    {
      "type": "heading",
      "content": "Street Food Culture"
    },
    {
      "type": "list",
      "content": [
        "Kelewele - Spiced fried plantain",
        "Bofrot - Sweet fried dough balls",
        "Grilled tilapia with banku and pepper",
        "Roasted plantain with groundnuts",
        "Fresh coconut water"
      ]
    },
    {
      "type": "heading",
      "content": "Dining Social Aspects"
    },
    {
      "type": "text",
      "content": "Meals are social events that strengthen community bonds. Sharing food is an expression of hospitality and friendship."
    },
    {
      "type": "list",
      "content": [
        "Family meals are communal experiences",
        "Guests are always offered food and drink",
        "Food preparation is often a community activity",
        "Special dishes prepared for festivals and celebrations"
      ]
    }
  ]'::jsonb,
  duration = '30 minutes'
WHERE title = 'Traditional Foods & Dining Culture';
