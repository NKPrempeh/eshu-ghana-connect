import React from 'react';

interface LessonContentProps {
  lessonId: number;
  step: number;
}

export const getLessonContent = (lessonId: number, step: number) => {
  const contentMap: { [key: number]: { [key: number]: any } } = {
    1: { // Languages lesson
      0: {
        title: "Ghana's Linguistic Diversity",
        content: (
          <div className="space-y-4">
            <p className="text-gray-700">
              Ghana is home to over 100 languages, but English is the official language used in education, government, and business.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Major Languages</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• <strong>Twi (Akan)</strong> - 20% of population</li>
                  <li>• <strong>Ga</strong> - Greater Accra region</li>
                  <li>• <strong>Ewe</strong> - Volta region</li>
                  <li>• <strong>Dagbani</strong> - Northern regions</li>
                </ul>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Language Tips</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• English is widely spoken</li>
                  <li>• Learning basic Twi helps</li>
                  <li>• Each region has preferences</li>
                  <li>• Be patient with accents</li>
                </ul>
              </div>
            </div>
          </div>
        )
      },
      1: {
        title: "Basic Twi Phrases",
        content: (
          <div className="space-y-4">
            <p className="text-gray-700">Here are essential Twi phrases that will help you connect with locals:</p>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Greetings</h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Maakye</strong> - Good morning</li>
                    <li><strong>Maaha</strong> - Good afternoon</li>
                    <li><strong>Maadwo</strong> - Good evening</li>
                    <li><strong>Wo ho te sɛn?</strong> - How are you?</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Courtesy</h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Medaase</strong> - Thank you</li>
                    <li><strong>Kosɛ</strong> - Excuse me</li>
                    <li><strong>Mepa wo kyɛw</strong> - Please</li>
                    <li><strong>Aane</strong> - Yes</li>
                    <li><strong>Daabi</strong> - No</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )
      },
      2: {
        title: "Communication Etiquette",
        content: (
          <div className="space-y-4">
            <p className="text-gray-700">Understanding Ghanaian communication styles:</p>
            <div className="grid gap-4">
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Do's</h4>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• Use both hands when greeting elders</li>
                  <li>• Speak softly and respectfully</li>
                  <li>• Allow others to finish speaking</li>
                  <li>• Show interest in family and health</li>
                  <li>• Use titles like "Auntie" or "Uncle" for older people</li>
                </ul>
              </div>
              <div className="p-4 bg-red-50 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">Don'ts</h4>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• Don't rush conversations</li>
                  <li>• Avoid pointing with one finger</li>
                  <li>• Don't interrupt elders</li>
                  <li>• Don't discuss sensitive topics immediately</li>
                  <li>• Avoid being too direct - be diplomatic</li>
                </ul>
              </div>
            </div>
          </div>
        )
      },
      3: {
        title: "Regional Language Variations",
        content: (
          <div className="space-y-4">
            <p className="text-gray-700">Understanding how language use varies across Ghana:</p>
            <div className="space-y-3">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800">Northern Regions</h4>
                <p className="text-sm text-blue-700">Dagbani, Hausa, and other northern languages are common. English is widely used for business.</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800">Ashanti Region</h4>
                <p className="text-sm text-green-700">Twi is the dominant local language. Learning basic Twi will be very helpful here.</p>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg">
                <h4 className="font-semibold text-yellow-800">Greater Accra</h4>
                <p className="text-sm text-yellow-700">Ga and English are most common. Very cosmopolitan with many languages spoken.</p>
              </div>
            </div>
          </div>
        )
      },
      4: {
        title: "Language Learning Resources",
        content: (
          <div className="space-y-4">
            <p className="text-gray-700">Resources to help you learn local languages:</p>
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-3">Learning Resources</h4>
              <ul className="space-y-2 text-sm text-purple-700">
                <li>• <strong>Language exchange groups:</strong> Join local conversation clubs</li>
                <li>• <strong>Mobile apps:</strong> Nemo Twi, 50 Languages</li>
                <li>• <strong>Local classes:</strong> Alliance Française, Goethe Institut</li>
                <li>• <strong>Practice with locals:</strong> Most Ghanaians love to teach their language</li>
                <li>• <strong>Media consumption:</strong> Watch local TV, listen to radio</li>
              </ul>
            </div>
          </div>
        )
      }
    },
    2: { // Food lesson
      0: {
        title: "Ghanaian Cuisine Basics",
        content: (
          <div className="space-y-4">
            <p className="text-gray-700">
              Ghanaian cuisine is rich and diverse, with each region having its own specialties. Staple foods include rice, yam, plantain, and cassava.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-orange-50 rounded-lg">
                <h4 className="font-semibold text-orange-800">Popular Dishes</h4>
                <ul className="text-sm text-orange-700 mt-2 space-y-1">
                  <li>• <strong>Jollof Rice</strong> - Spiced rice with tomatoes</li>
                  <li>• <strong>Fufu</strong> - Pounded cassava/yam with soup</li>
                  <li>• <strong>Banku</strong> - Fermented corn and cassava dough</li>
                  <li>• <strong>Kelewele</strong> - Spiced fried plantain</li>
                  <li>• <strong>Red Red</strong> - Bean stew with plantain</li>
                </ul>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800">Dining Etiquette</h4>
                <ul className="text-sm text-green-700 mt-2 space-y-1">
                  <li>• Wash hands before eating</li>
                  <li>• Use right hand for eating</li>
                  <li>• Share food with others</li>
                  <li>• Show appreciation to the cook</li>
                  <li>• Wait for elders to start eating</li>
                </ul>
              </div>
            </div>
          </div>
        )
      },
      1: {
        title: "Regional Specialties",
        content: (
          <div className="space-y-4">
            <p className="text-gray-700">Each region of Ghana has unique culinary traditions:</p>
            <div className="space-y-3">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800">Northern Ghana</h4>
                <p className="text-sm text-blue-700">Known for Tuo Zaafi (TZ), shea butter dishes, and spicy stews with plenty of meat. Rice is a staple here.</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800">Ashanti Region (Central)</h4>
                <p className="text-sm text-green-700">Famous for Fufu with light soup, Ampesi, palm nut soup, and the best cocoa in the world.</p>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg">
                <h4 className="font-semibold text-yellow-800">Coastal Areas (South)</h4>
                <p className="text-sm text-yellow-700">Seafood dishes, Banku with grilled tilapia, fresh fish preparations, and coconut-based dishes.</p>
              </div>
            </div>
          </div>
        )
      },
      2: {
        title: "Food Markets and Shopping",
        content: (
          <div className="space-y-4">
            <p className="text-gray-700">Learning to navigate Ghanaian markets and food shopping:</p>
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-lg">
              <h4 className="font-semibold text-orange-800 mb-3">Market Tips</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Bargaining:</strong> Expected in most markets, start at 50-70% of asking price
                </div>
                <div>
                  <strong>Best Times:</strong> Early morning (6-9 AM) for freshest produce
                </div>
                <div>
                  <strong>Payment:</strong> Carry small bills (GHS 1, 2, 5, 10 notes)
                </div>
                <div>
                  <strong>Relationships:</strong> Build rapport with regular vendors for better prices
                </div>
              </div>
              <div className="mt-4 p-3 bg-white rounded border-l-4 border-orange-400">
                <h5 className="font-semibold text-orange-800">Popular Markets:</h5>
                <ul className="text-sm text-orange-700 mt-1">
                  <li>• Makola Market (Accra) - Largest market</li>
                  <li>• Kumasi Central Market - Second largest in West Africa</li>
                  <li>• Kejetia Market - Modern shopping experience</li>
                </ul>
              </div>
            </div>
          </div>
        )
      },
      3: {
        title: "Cooking at Home",
        content: (
          <div className="space-y-4">
            <p className="text-gray-700">Essential ingredients and cooking tips for Ghanaian cuisine:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-red-50 rounded-lg">
                <h4 className="font-semibold text-red-800">Essential Ingredients</h4>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• Palm oil and groundnut oil</li>
                  <li>• Tomatoes, onions, ginger, garlic</li>
                  <li>• Scotch bonnet peppers</li>
                  <li>• Dawadawa (fermented locust beans)</li>
                  <li>• Shito (black pepper sauce)</li>
                </ul>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800">Cooking Tips</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Start with simple recipes like rice and stew</li>
                  <li>• Ask locals for family recipes</li>
                  <li>• Join cooking classes</li>
                  <li>• Practice making basic tomato base</li>
                  <li>• Learn to pound fufu gradually</li>
                </ul>
              </div>
            </div>
          </div>
        )
      },
      4: {
        title: "Food Safety and Health",
        content: (
          <div className="space-y-4">
            <p className="text-gray-700">Important considerations for eating safely in Ghana:</p>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-3">Food Safety Tips</h4>
              <ul className="space-y-2 text-sm text-blue-700">
                <li>• <strong>Water:</strong> Drink bottled or properly filtered water</li>
                <li>• <strong>Street food:</strong> Choose busy vendors with high turnover</li>
                <li>• <strong>Fruits:</strong> Peel fruits yourself or wash thoroughly</li>
                <li>• <strong>Meat:</strong> Ensure meat is well-cooked and hot</li>
                <li>• <strong>Dairy:</strong> Be cautious with unpasteurized dairy products</li>
              </ul>
            </div>
            <div className="mt-4 p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-800">Health Benefits</h4>
              <p className="text-sm text-green-700">
                Ghanaian cuisine is naturally healthy with lots of vegetables, lean proteins, and minimal processed foods. 
                The abundant use of ginger, garlic, and peppers provides natural health benefits.
              </p>
            </div>
          </div>
        )
      }
    },
    3: { // Music and Arts lesson
      0: {
        title: "Traditional Music and Dance",
        content: (
          <div className="space-y-4">
            <p className="text-gray-700">
              Music and dance are integral parts of Ghanaian culture, used for celebration, communication, and storytelling.
            </p>
            <div className="bg-gradient-to-r from-red-50 to-yellow-50 p-6 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-3">Traditional Instruments</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <strong>Drums:</strong> Djembe, Talking drums, Atumpan, Fontomfrom
                </div>
                <div>
                  <strong>String:</strong> Kora, Seperewa, Gonje, Prempensua
                </div>
                <div>
                  <strong>Wind:</strong> Atenteben (flute), Horns, Mmenson
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800">Traditional Dances</h4>
                <ul className="text-sm text-blue-700 mt-2 space-y-1">
                  <li>• <strong>Adowa</strong> - Akan funeral dance</li>
                  <li>• <strong>Azonto</strong> - Modern popular dance</li>
                  <li>• <strong>Kpanlogo</strong> - Ga traditional dance</li>
                  <li>• <strong>Agbadza</strong> - Ewe war dance</li>
                </ul>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800">Cultural Significance</h4>
                <ul className="text-sm text-green-700 mt-2 space-y-1">
                  <li>• Communication through rhythm</li>
                  <li>• Storytelling and history</li>
                  <li>• Community bonding</li>
                  <li>• Spiritual connection</li>
                </ul>
              </div>
            </div>
          </div>
        )
      },
      1: {
        title: "Popular Music Genres",
        content: (
          <div className="space-y-4">
            <p className="text-gray-700">Ghana has a rich modern music scene that has influenced African music globally:</p>
            <div className="space-y-3">
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-purple-800">Highlife</h4>
                <p className="text-sm text-purple-700">Ghana's signature genre, blending traditional rhythms with Western instruments. Artists: Amakye Dede, Nana Ampadu.</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800">Hiplife</h4>
                <p className="text-sm text-blue-700">Modern fusion of hip-hop and highlife, very popular among youth. Artists: Sarkodie, Shatta Wale.</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800">Afrobeats/Afrobeat</h4>
                <p className="text-sm text-green-700">Contemporary genre gaining international recognition. Artists: Stonebwoy, King Promise, Kuami Eugene.</p>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg">
                <h4 className="font-semibold text-yellow-800">Gospel</h4>
                <p className="text-sm text-yellow-700">Highly popular genre combining Christian themes with Ghanaian rhythms. Artists: Sonnie Badu, Joe Mettle.</p>
              </div>
            </div>
          </div>
        )
      },
      2: {
        title: "Music in Daily Life",
        content: (
          <div className="space-y-4">
            <p className="text-gray-700">How music integrates into Ghanaian social life:</p>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-3">Cultural Significance</h4>
              <ul className="space-y-2 text-sm text-yellow-700">
                <li>• <strong>Ceremonies:</strong> Weddings, funerals, and festivals always feature music and dance</li>
                <li>• <strong>Communication:</strong> Talking drums convey messages across distances in traditional communities</li>
                <li>• <strong>Social Events:</strong> Dancing is expected at most gatherings - don't be shy!</li>
                <li>• <strong>Religious:</strong> Gospel music is very popular in churches and Christian gatherings</li>
                <li>• <strong>Work Songs:</strong> Traditional songs accompany farming and other communal work</li>
              </ul>
            </div>
            <div className="mt-4 p-4 bg-red-50 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">Music Etiquette Tips</h4>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• It's polite to dance when music is playing at social events</li>
                <li>• Learn basic dance moves - Ghanaians love to teach visitors</li>
                <li>• Show appreciation for live music with clapping and cheering</li>
                <li>• Respect traditional music during ceremonies</li>
              </ul>
            </div>
          </div>
        )
      },
      3: {
        title: "Learning Music and Dance",
        content: (
          <div className="space-y-4">
            <p className="text-gray-700">How to get involved in Ghana's music scene:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-purple-800">Learning Opportunities</h4>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• Music schools and academies</li>
                  <li>• Traditional drumming classes</li>
                  <li>• Dance studios and cultural centers</li>
                  <li>• University of Ghana Music Department</li>
                  <li>• Community cultural groups</li>
                </ul>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800">Popular Venues</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• National Theatre (Accra)</li>
                  <li>• +233 Jazz Bar & Grill</li>
                  <li>• Alliance Française</li>
                  <li>• Local cultural centers</li>
                  <li>• Festival grounds during events</li>
                </ul>
              </div>
            </div>
          </div>
        )
      },
      4: {
        title: "Festivals and Music Events",
        content: (
          <div className="space-y-4">
            <p className="text-gray-700">Major music festivals and cultural events to experience:</p>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-3">Annual Music Festivals</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <strong>Afrochella (December):</strong> Contemporary music festival in Accra featuring Afrobeats, hip-hop, and alternative music
                </div>
                <div>
                  <strong>Ghana Music Awards (Annual):</strong> Biggest music awards ceremony celebrating local and international artists
                </div>
                <div>
                  <strong>Homowo Festival (August):</strong> Ga traditional festival with lots of music and dance
                </div>
                <div>
                  <strong>Panafest (Every 2 years):</strong> Pan-African arts and culture festival with international participation
                </div>
              </div>
            </div>
          </div>
        )
      }
    },
    4: { // Social Customs lesson
      0: {
        title: "Ghanaian Social Customs",
        content: (
          <div className="space-y-4">
            <p className="text-gray-700">
              Understanding Ghanaian social customs will help you integrate better and show respect for local culture.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800">Greetings</h4>
                <ul className="text-sm text-blue-700 mt-2 space-y-1">
                  <li>• Always greet people when you meet them</li>
                  <li>• Handshakes are common</li>
                  <li>• Ask about family and health</li>
                  <li>• Use both hands with elders</li>
                  <li>• Smile and make eye contact</li>
                </ul>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800">Respect for Elders</h4>
                <ul className="text-sm text-green-700 mt-2 space-y-1">
                  <li>• Elders are highly respected</li>
                  <li>• Stand when an elder enters</li>
                  <li>• Let elders speak first</li>
                  <li>• Use titles like "Auntie" or "Uncle"</li>
                  <li>• Seek their blessing and advice</li>
                </ul>
              </div>
            </div>
          </div>
        )
      },
      1: {
        title: "Family and Community Values",
        content: (
          <div className="space-y-4">
            <p className="text-gray-700">Family and community are central to Ghanaian culture:</p>
            <div className="space-y-3">
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-purple-800">Extended Family System</h4>
                <p className="text-sm text-purple-700">Families include grandparents, aunts, uncles, and cousins. Everyone has responsibilities to support each other.</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg">
                <h4 className="font-semibold text-orange-800">Community Support</h4>
                <p className="text-sm text-orange-700">Communities work together for mutual support. Neighbors help with childcare, farming, and celebrations.</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800">Ubuntu Philosophy</h4>
                <p className="text-sm text-green-700">"I am because we are" - Individual success is tied to community wellbeing.</p>
              </div>
            </div>
          </div>
        )
      },
      2: {
        title: "Religious and Spiritual Practices",
        content: (
          <div className="space-y-4">
            <p className="text-gray-700">Ghana is a religious country with diverse spiritual practices:</p>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-3">Religious Landscape</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <strong>Christianity (71%):</strong> Pentecostal, Catholic, Methodist, Presbyterian
                </div>
                <div>
                  <strong>Islam (18%):</strong> Mainly in northern regions
                </div>
                <div>
                  <strong>Traditional (5%):</strong> Ancestral worship, local deities
                </div>
              </div>
            </div>
            <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">Religious Etiquette</h4>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Respect all religious practices</li>
                <li>• Dress modestly when visiting religious sites</li>
                <li>• Many businesses close on Sundays</li>
                <li>• Prayer before meals is common</li>
                <li>• Religious festivals are major celebrations</li>
              </ul>
            </div>
          </div>
        )
      },
      3: {
        title: "Social Events and Celebrations",
        content: (
          <div className="space-y-4">
            <p className="text-gray-700">Understanding how Ghanaians celebrate and socialize:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-red-50 rounded-lg">
                <h4 className="font-semibold text-red-800">Major Celebrations</h4>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• Weddings - Multi-day affairs with traditional and modern ceremonies</li>
                  <li>• Funerals - Important celebrations of life, often lasting days</li>
                  <li>• Naming ceremonies - Welcome new babies to the community</li>
                  <li>• Traditional festivals - Annual cultural celebrations</li>
                </ul>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800">Social Expectations</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Contribute money at celebrations (dash)</li>
                  <li>• Dress appropriately for each occasion</li>
                  <li>• Participate in dancing and festivities</li>
                  <li>• Show respect to organizers and elders</li>
                </ul>
              </div>
            </div>
          </div>
        )
      },
      4: {
        title: "Gift-Giving and Hospitality",
        content: (
          <div className="space-y-4">
            <p className="text-gray-700">Understanding Ghanaian hospitality and gift-giving customs:</p>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-3">Hospitality Culture</h4>
              <ul className="space-y-2 text-sm text-yellow-700">
                <li>• <strong>Welcoming nature:</strong> Ghanaians are known for their warm hospitality to visitors</li>
                <li>• <strong>Food sharing:</strong> Guests are always offered food and drinks</li>
                <li>• <strong>Home visits:</strong> Dropping by unannounced is normal and welcome</li>
                <li>• <strong>Gift appreciation:</strong> Small gifts from your home country are cherished</li>
                <li>• <strong>Reciprocity:</strong> Hospitality should be returned when possible</li>
              </ul>
            </div>
            <div className="mt-4 p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Gift-Giving Etiquette</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Bring small gifts when visiting homes</li>
                <li>• Gifts from your home country are especially appreciated</li>
                <li>• Present gifts with both hands</li>
                <li>• Don't expect gifts to be opened immediately</li>
                <li>• Quality matters more than quantity</li>
              </ul>
            </div>
          </div>
        )
      }
    },
    5: { // Business Culture and Professional Etiquette lesson
      0: {
        title: "Introduction to Business Culture",
        content: (
          <div className="space-y-4">
            <p className="text-gray-700">
              Ghana's business culture blends traditional values with modern practices, emphasizing relationships, respect, and professionalism.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800">Business Hours</h4>
                <ul className="text-sm text-blue-700 mt-2 space-y-1">
                  <li>• Monday-Friday: 8:00 AM - 5:00 PM</li>
                  <li>• Some offices: 8:30 AM - 4:30 PM</li>
                  <li>• Banks: 8:30 AM - 4:00 PM</li>
                  <li>• Government offices: 8:00 AM - 5:00 PM</li>
                  <li>• Lunch break: 12:00 PM - 1:00 PM</li>
                </ul>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800">Key Values</h4>
                <ul className="text-sm text-green-700 mt-2 space-y-1">
                  <li>• Relationship-building is crucial</li>
                  <li>• Respect for hierarchy and age</li>
                  <li>• Patience and diplomacy</li>
                  <li>• Personal connections matter</li>
                  <li>• Trust and reliability are essential</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">First Impressions</h4>
              <p className="text-sm text-yellow-700">
                Ghanaians value punctuality, proper dress, and respectful behavior. Take time to build personal relationships before discussing business matters. A warm greeting and inquiry about family shows cultural awareness and respect.
              </p>
            </div>
          </div>
        )
      },
      1: {
        title: "Professional Communication",
        content: (
          <div className="space-y-4">
            <p className="text-gray-700">Effective communication in Ghanaian business settings requires cultural sensitivity and professionalism:</p>
            <div className="space-y-3">
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-purple-800">Verbal Communication</h4>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• Speak clearly and at moderate pace</li>
                  <li>• Use formal titles (Mr., Mrs., Dr.)</li>
                  <li>• Allow others to finish speaking</li>
                  <li>• Avoid direct confrontation</li>
                  <li>• Use diplomatic language</li>
                </ul>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg">
                <h4 className="font-semibold text-orange-800">Written Communication</h4>
                <ul className="text-sm text-orange-700 space-y-1">
                  <li>• Formal business letter format</li>
                  <li>• Include proper salutations</li>
                  <li>• Be clear and concise</li>
                  <li>• Use professional email signatures</li>
                  <li>• Follow up important conversations in writing</li>
                </ul>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800">Non-Verbal Communication</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Maintain appropriate eye contact</li>
                  <li>• Use both hands when exchanging business cards</li>
                  <li>• Stand when greeting senior colleagues</li>
                  <li>• Dress professionally and conservatively</li>
                  <li>• Show respect through body language</li>
                </ul>
              </div>
            </div>
          </div>
        )
      },
      2: {
        title: "Meeting Etiquette and Networking",
        content: (
          <div className="space-y-4">
            <p className="text-gray-700">Successful business meetings and networking in Ghana follow specific cultural protocols:</p>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mb-4">
              <h4 className="font-semibold text-blue-800 mb-3">Meeting Protocol</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Before the Meeting:</strong>
                  <ul className="mt-1 space-y-1">
                    <li>• Schedule meetings in advance</li>
                    <li>• Confirm attendance 24 hours prior</li>
                    <li>• Prepare agenda and materials</li>
                    <li>• Arrive 5-10 minutes early</li>
                  </ul>
                </div>
                <div>
                  <strong>During the Meeting:</strong>
                  <ul className="mt-1 space-y-1">
                    <li>• Greet everyone individually</li>
                    <li>• Wait to be seated</li>
                    <li>• Let senior members speak first</li>
                    <li>• Take notes to show engagement</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Networking Tips</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Join professional associations and chambers of commerce</li>
                <li>• Attend industry events and conferences</li>
                <li>• Build relationships through social activities</li>
                <li>• Exchange contact information professionally</li>
                <li>• Follow up within 48 hours of meeting</li>
                <li>• Maintain long-term professional relationships</li>
              </ul>
            </div>
            <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">Gift-Giving Etiquette</h4>
              <p className="text-sm text-yellow-700">
                Small gifts from your home country are appreciated but not expected. Avoid expensive gifts which may be seen as inappropriate. When receiving gifts, accept graciously with both hands and express genuine gratitude.
              </p>
            </div>
          </div>
        )
      }
    },
    6: { // Transportation and Getting Around
      0: {
        title: "Public Transportation Overview",
        content: (
          <div className="space-y-4">
            <p className="text-gray-700">
              Ghana has various transportation options, from traditional tro-tros to modern ride-sharing services. Understanding the system will help you navigate efficiently.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800">Popular Transport Options</h4>
                <ul className="text-sm text-blue-700 mt-2 space-y-1">
                  <li>• <strong>Tro-tro:</strong> Shared minibus, cheapest option</li>
                  <li>• <strong>Taxi:</strong> Private cars, negotiate fare</li>
                  <li>• <strong>Uber/Bolt:</strong> App-based rides in major cities</li>
                  <li>• <strong>STC/VIP:</strong> Long-distance luxury buses</li>
                  <li>• <strong>Metro Mass:</strong> Government buses</li>
                </ul>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800">Safety Tips</h4>
                <ul className="text-sm text-green-700 mt-2 space-y-1">
                  <li>• Keep valuables secure</li>
                  <li>• Travel during daylight when possible</li>
                  <li>• Know your destination beforehand</li>
                  <li>• Have small bills ready</li>
                  <li>• Trust your instincts about safety</li>
                </ul>
              </div>
            </div>
          </div>
        )
      },
      1: {
        title: "Using Tro-tros and Shared Transport",
        content: (
          <div className="space-y-4">
            <p className="text-gray-700">Tro-tros are the backbone of Ghana's public transport system. Here's how to use them effectively:</p>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-3">Tro-tro Guide</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>How to Board:</strong>
                  <ul className="mt-1 space-y-1">
                    <li>• Find the station or roadside stop</li>
                    <li>• Ask for your destination</li>
                    <li>• Pay the mate (conductor)</li>
                    <li>• Find a seat or stand if full</li>
                  </ul>
                </div>
                <div>
                  <strong>Etiquette:</strong>
                  <ul className="mt-1 space-y-1">
                    <li>• Give up seats for elders/pregnant women</li>
                    <li>• Keep belongings on your lap</li>
                    <li>• Signal when you want to get off</li>
                    <li>• Be patient with delays</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Common Routes</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Circle to Madina, Legon, Adenta</li>
                <li>• Kaneshie to Kasoa, Weija</li>
                <li>• Tema Station to Tema, Ashaiman</li>
                <li>• Lapaz to Dome, Achimota</li>
              </ul>
            </div>
          </div>
        )
      },
      2: {
        title: "Driving and Car Ownership",
        content: (
          <div className="space-y-4">
            <p className="text-gray-700">If you plan to drive in Ghana, here's what you need to know:</p>
            <div className="space-y-3">
              <div className="p-4 bg-red-50 rounded-lg">
                <h4 className="font-semibold text-red-800">Driving Requirements</h4>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• Valid international driving license</li>
                  <li>• Vehicle registration and insurance</li>
                  <li>• Understanding of local traffic rules</li>
                  <li>• Patience for traffic congestion</li>
                </ul>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg">
                <h4 className="font-semibold text-orange-800">Road Conditions</h4>
                <ul className="text-sm text-orange-700 space-y-1">
                  <li>• Main highways are generally good</li>
                  <li>• City roads can be congested</li>
                  <li>• Some rural roads are unpaved</li>
                  <li>• Watch for potholes and speed bumps</li>
                </ul>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800">Parking and Fuel</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Parking is often street-side</li>
                  <li>• Use secured parking when possible</li>
                  <li>• Fuel stations are widely available</li>
                  <li>• Diesel and petrol are common</li>
                </ul>
              </div>
            </div>
          </div>
        )
      }
    }
  };

  return contentMap[lessonId]?.[step] || {
    title: "Lesson Content",
    content: <p className="text-gray-700">Learn about Ghanaian culture and customs.</p>
  };
};
