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
            <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">Did You Know?</h4>
              <p className="text-sm text-yellow-700">
                Ghana has more than 100 indigenous languages, making it one of the most linguistically diverse countries in West Africa. 
                The constitution recognizes 11 languages as government-sponsored languages, including Akan, Dagaare, Dagbani, Dangme, Ewe, Ga, Gonja, Kasem, Konkomba, Mampruli, and Nzema.
                Despite this diversity, English serves as the lingua franca, facilitating communication across different ethnic groups.
              </p>
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
        title: "Professional Communication Styles",
        content: (
          <div className="space-y-4">
            <p className="text-gray-700">Effective communication in Ghanaian business settings requires cultural sensitivity and professionalism:</p>
            <div className="space-y-3">
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-purple-800">Verbal Communication</h4>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• Speak clearly and at moderate pace</li>
                  <li>• Use formal titles (Mr., Mrs., Dr., Chief)</li>
                  <li>• Allow others to finish speaking completely</li>
                  <li>• Avoid direct confrontation or criticism</li>
                  <li>• Use diplomatic and respectful language</li>
                  <li>• Ask about family and health before business</li>
                </ul>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg">
                <h4 className="font-semibold text-orange-800">Written Communication</h4>
                <ul className="text-sm text-orange-700 space-y-1">
                  <li>• Use formal business letter format with proper headers</li>
                  <li>• Include appropriate salutations and closings</li>
                  <li>• Be clear, concise, and courteous in tone</li>
                  <li>• Use professional email signatures with full contact information</li>
                  <li>• Follow up important conversations in writing within 24 hours</li>
                  <li>• Avoid overly casual language or abbreviations</li>
                </ul>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800">Non-Verbal Communication</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Maintain appropriate eye contact while showing respect</li>
                  <li>• Use both hands when exchanging business cards or documents</li>
                  <li>• Stand when greeting senior colleagues or clients</li>
                  <li>• Dress professionally and conservatively</li>
                  <li>• Show respect through attentive body language and posture</li>
                  <li>• Avoid pointing with a single finger - use open hand instead</li>
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
                    <li>• Schedule meetings at least 48 hours in advance</li>
                    <li>• Confirm attendance 24 hours prior by phone or email</li>
                    <li>• Prepare detailed agenda and supporting materials</li>
                    <li>• Arrive 5-10 minutes early to show respect</li>
                    <li>• Bring business cards and relevant documents</li>
                  </ul>
                </div>
                <div>
                  <strong>During the Meeting:</strong>
                  <ul className="mt-1 space-y-1">
                    <li>• Greet everyone individually with handshakes</li>
                    <li>• Wait to be seated or ask where to sit</li>
                    <li>• Allow senior members to speak first</li>
                    <li>• Take detailed notes to show engagement</li>
                    <li>• Ask thoughtful questions and listen actively</li>
                    <li>• Avoid interrupting or rushing discussions</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Networking Best Practices</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Join professional associations like Ghana Chamber of Commerce</li>
                <li>• Attend industry conferences, seminars, and trade shows</li>
                <li>• Build relationships through social activities and informal gatherings</li>
                <li>• Exchange contact information professionally with quality business cards</li>
                <li>• Follow up within 48 hours with personalized messages</li>
                <li>• Maintain long-term professional relationships through regular contact</li>
                <li>• Offer help and value before asking for favors</li>
              </ul>
            </div>
            <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">Business Gift Etiquette</h4>
              <p className="text-sm text-yellow-700">
                Small, tasteful gifts from your home country are appreciated but not expected. Avoid expensive items which may be misunderstood. 
                Popular gifts include books about your country, quality pens, or local crafts. Present gifts with both hands and accept any gifts graciously, 
                expressing genuine gratitude even if not opened immediately.
              </p>
            </div>
          </div>
        )
      },
      3: {
        title: "Workplace Hierarchy and Decision Making",
        content: (
          <div className="space-y-4">
            <p className="text-gray-700">Understanding organizational structure and decision-making processes in Ghanaian businesses:</p>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg mb-4">
              <h4 className="font-semibold text-purple-800 mb-3">Hierarchy and Authority</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <strong>Respect for Seniority:</strong> Age and experience are highly valued. Senior employees and executives should be addressed formally and given deference in meetings and decision-making processes.
                </div>
                <div>
                  <strong>Chain of Command:</strong> Follow proper reporting structures. Bypassing immediate supervisors can be seen as disrespectful and may damage working relationships.
                </div>
                <div>
                  <strong>Decision Making:</strong> Important decisions often involve consultation with multiple stakeholders. Be patient as consensus-building takes time but leads to stronger buy-in.
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800">Leadership Styles</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Collaborative approach is preferred</li>
                  <li>• Leaders often mentor and guide team members</li>
                  <li>• Face-saving is important in conflicts</li>
                  <li>• Paternalistic leadership is common</li>
                  <li>• Group harmony takes precedence over individual achievement</li>
                </ul>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800">Team Dynamics</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Team success is valued over individual recognition</li>
                  <li>• Open disagreement in public should be avoided</li>
                  <li>• Private consultations help resolve conflicts</li>
                  <li>• Regular team building activities are important</li>
                  <li>• Personal relationships strengthen professional bonds</li>
                </ul>
              </div>
            </div>
          </div>
        )
      },
      4: {
        title: "Business Negotiations and Contracts",
        content: (
          <div className="space-y-4">
            <p className="text-gray-700">Effective negotiation strategies and contract management in the Ghanaian business environment:</p>
            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg mb-4">
              <h4 className="font-semibold text-orange-800 mb-3">Negotiation Approach</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <strong>Relationship First:</strong> Invest time in building personal relationships before discussing business terms. Trust and mutual respect are foundations for successful negotiations.
                </div>
                <div>
                  <strong>Patience and Persistence:</strong> Negotiations may take longer than expected. Rushing can be counterproductive and may be seen as disrespectful to the process.
                </div>
                <div>
                  <strong>Win-Win Mentality:</strong> Seek solutions that benefit all parties. Aggressive tactics or ultimatums are generally ineffective and can damage relationships.
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800">Contract Considerations</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Include detailed payment terms and schedules</li>
                  <li>• Specify dispute resolution mechanisms</li>
                  <li>• Consider local laws and regulations</li>
                  <li>• Include force majeure clauses</li>
                  <li>• Use clear, unambiguous language</li>
                  <li>• Have contracts reviewed by local legal counsel</li>
                </ul>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800">Cultural Sensitivity</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Allow face-saving opportunities during tough negotiations</li>
                  <li>• Use intermediaries when appropriate</li>
                  <li>• Respect religious and cultural holidays in scheduling</li>
                  <li>• Understand that "yes" might mean "I understand" not "I agree"</li>
                  <li>• Be prepared for indirect communication styles</li>
                  <li>• Show flexibility on non-critical issues</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">Follow-up and Relationship Management</h4>
              <p className="text-sm text-yellow-700">
                After successful negotiations, maintain regular contact with business partners. Send periodic updates, holiday greetings, and 
                invitations to relevant events. Strong ongoing relationships often lead to additional business opportunities and smoother operations.
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
              Ghana has various transportation options, from traditional tro-tros to modern ride-sharing services. Understanding the system will help you navigate efficiently and safely.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800">Popular Transport Options</h4>
                <ul className="text-sm text-blue-700 mt-2 space-y-1">
                  <li>• <strong>Tro-tro:</strong> Shared minibus, cheapest option (GHS 2-8)</li>
                  <li>• <strong>Taxi:</strong> Private cars, negotiate fare beforehand</li>
                  <li>• <strong>Uber/Bolt:</strong> App-based rides in Accra and Kumasi</li>
                  <li>• <strong>STC/VIP Bus:</strong> Long-distance luxury buses</li>
                  <li>• <strong>Metro Mass Transit:</strong> Government subsidized buses</li>
                  <li>• <strong>Okada:</strong> Motorcycle taxis (illegal in some areas)</li>
                </ul>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800">Safety and Security Tips</h4>
                <ul className="text-sm text-green-700 mt-2 space-y-1">
                  <li>• Keep valuables secure and out of sight</li>
                  <li>• Travel during daylight hours when possible</li>
                  <li>• Know your destination and route beforehand</li>
                  <li>• Have small bills ready for easy payment</li>
                  <li>• Trust your instincts about safety situations</li>
                  <li>• Keep emergency contacts readily available</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">Mobile Apps and Technology</h4>
              <p className="text-sm text-yellow-700">
                Download useful apps like Uber, Bolt, and Google Maps for navigation. Many tro-tro stations now have digital boards showing routes and fares. 
                Mobile money (MTN Mobile Money, AirtelTigo Money) is widely accepted for transport payments.
              </p>
            </div>
          </div>
        )
      },
      1: {
        title: "Using Tro-tros and Shared Transport",
        content: (
          <div className="space-y-4">
            <p className="text-gray-700">Tro-tros are the backbone of Ghana's public transport system. Here's your complete guide to using them effectively and safely:</p>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-3">Complete Tro-tro Guide</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>How to Board:</strong>
                  <ul className="mt-1 space-y-1">
                    <li>• Find the appropriate station or roadside stop</li>
                    <li>• Ask the mate (conductor) for your destination</li>
                    <li>• Wait for confirmation before boarding</li>
                    <li>• Pay the mate once seated (keep small bills)</li>
                    <li>• Hold onto something when vehicle is moving</li>
                  </ul>
                </div>
                <div>
                  <strong>Cultural Etiquette:</strong>
                  <ul className="mt-1 space-y-1">
                    <li>• Give up seats for elders, pregnant women, and children</li>
                    <li>• Keep personal belongings on your lap</li>
                    <li>• Signal clearly when you want to get off</li>
                    <li>• Be patient with delays and traffic</li>
                    <li>• Greet fellow passengers politely</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Major Routes from Accra</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• <strong>Circle:</strong> To Madina, Legon, Adenta (GHS 3-5)</li>
                  <li>• <strong>Kaneshie:</strong> To Kasoa, Weija, Cape Coast (GHS 4-15)</li>
                  <li>• <strong>Tema Station:</strong> To Tema, Ashaiman (GHS 3-4)</li>
                  <li>• <strong>Lapaz:</strong> To Dome, Achimota, Nsawam (GHS 2-6)</li>
                  <li>• <strong>37 Station:</strong> To Airport, East Legon (GHS 2-4)</li>
                </ul>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Fare Guidelines</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Short distance (within city): GHS 2-4</li>
                  <li>• Medium distance: GHS 4-8</li>
                  <li>• Long distance (intercity): GHS 10-50</li>
                  <li>• Night fares may be 20-30% higher</li>
                  <li>• Always confirm fare before boarding</li>
                </ul>
              </div>
            </div>
          </div>
        )
      },
      2: {
        title: "Taxi Services and Ride-Sharing",
        content: (
          <div className="space-y-4">
            <p className="text-gray-700">Understanding taxi services and modern ride-sharing options in Ghana's major cities:</p>
            <div className="space-y-3">
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-purple-800">Traditional Taxis</h4>
                <div className="text-sm text-purple-700 space-y-2">
                  <p><strong>Negotiation Tips:</strong> Always agree on fare before entering. Standard rates: Airport to city center (GHS 40-60), short city trips (GHS 15-25), longer distances (GHS 30-80).</p>
                  <p><strong>Shared vs Private:</strong> Shared taxis (dropping) are cheaper but take longer. Private taxis (charter) cost more but go directly to your destination.</p>
                  <p><strong>Peak Hours:</strong> Expect higher fares during rush hours (6-9 AM, 5-8 PM) and late nights.</p>
                </div>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800">Ride-Sharing Apps</h4>
                <div className="text-sm text-blue-700 space-y-2">
                  <p><strong>Uber:</strong> Available in Accra and Kumasi. Clean vehicles, fixed pricing, cashless payment options. Premium service costs 20-40% more than traditional taxis.</p>
                  <p><strong>Bolt (formerly Taxify):</strong> Cheaper alternative to Uber, widely available in major cities. Good for airport transfers and reliable city transport.</p>
                  <p><strong>Yango:</strong> Newer option with competitive pricing. Cash and mobile money payment accepted.</p>
                </div>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800">Safety Guidelines</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Check driver details and license plate before entering</li>
                  <li>• Share trip details with friends or family</li>
                  <li>• Sit in the back seat for safety</li>
                  <li>• Keep emergency contacts easily accessible</li>
                  <li>• Use ride-sharing apps for night travel when possible</li>
                  <li>• Trust your instincts about drivers and situations</li>
                </ul>
              </div>
            </div>
          </div>
        )
      },
      3: {
        title: "Long-Distance Travel Options",
        content: (
          <div className="space-y-4">
            <p className="text-gray-700">Comprehensive guide to traveling between cities and regions in Ghana:</p>
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-lg mb-4">
              <h4 className="font-semibold text-orange-800 mb-3">Intercity Bus Services</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>VIP/STC Bus Lines:</strong>
                  <ul className="mt-1 space-y-1">
                    <li>• Air-conditioned luxury buses</li>
                    <li>• Reserved seating with booking required</li>
                    <li>• Accra to Kumasi: GHS 45-60 (4-5 hours)</li>
                    <li>• Accra to Tamale: GHS 80-100 (8-10 hours)</li>
                    <li>• Regular schedules, reliable service</li>
                  </ul>
                </div>
                <div>
                  <strong>Other Bus Companies:</strong>
                  <ul className="mt-1 space-y-1">
                    <li>• KPONE Express, Metro Mass Transit</li>
                    <li>• More affordable but less comfortable</li>
                    <li>• Frequent departures throughout the day</li>
                    <li>• Cash payments, first-come basis</li>
                    <li>• Good option for budget travelers</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800">Major Routes and Destinations</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• <strong>Accra ↔ Kumasi:</strong> Most popular route, every hour</li>
                  <li>• <strong>Accra ↔ Cape Coast:</strong> 3 hours, GHS 25-35</li>
                  <li>• <strong>Accra ↔ Tamale:</strong> 8-10 hours, GHS 70-100</li>
                  <li>• <strong>Kumasi ↔ Tamale:</strong> 6-8 hours, GHS 50-70</li>
                  <li>• <strong>Cross-border:</strong> To Togo, Burkina Faso, Côte d'Ivoire</li>
                </ul>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800">Booking and Travel Tips</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Book VIP/STC tickets 1-2 days in advance</li>
                  <li>• Arrive at station 30 minutes before departure</li>
                  <li>• Bring snacks and water for long journeys</li>
                  <li>• Keep valuables in carry-on luggage</li>
                  <li>• Check weather conditions for northern routes</li>
                  <li>• Have local contact numbers for emergencies</li>
                </ul>
              </div>
            </div>
          </div>
        )
      },
      4: {
        title: "Driving and Car Ownership",
        content: (
          <div className="space-y-4">
            <p className="text-gray-700">Complete guide to driving in Ghana, including legal requirements, road conditions, and practical considerations:</p>
            <div className="space-y-3">
              <div className="p-4 bg-red-50 rounded-lg">
                <h4 className="font-semibold text-red-800">Legal Requirements and Documentation</h4>
                <div className="text-sm text-red-700 space-y-2">
                  <p><strong>Driver's License:</strong> Valid international driving permit or Ghana license required. International permits valid for 6 months, then must convert to local license.</p>
                  <p><strong>Vehicle Documentation:</strong> Must have vehicle registration, comprehensive insurance, and roadworthy certificate. Police checkpoints are common.</p>
                  <p><strong>Insurance:</strong> Third-party insurance mandatory. Comprehensive coverage recommended (GHS 800-2,000 annually).</p>
                </div>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg">
                <h4 className="font-semibold text-orange-800">Road Conditions and Driving Tips</h4>
                <div className="text-sm text-orange-700 space-y-2">
                  <p><strong>Road Quality:</strong> Major highways generally good condition. Urban roads often congested with potholes. Rural roads may be unpaved.</p>
                  <p><strong>Traffic Patterns:</strong> Heavy congestion in cities during rush hours. Plan extra time for journeys. Weekend travel often smoother.</p>
                  <p><strong>Driving Style:</strong> Defensive driving essential. Watch for pedestrians, cyclists, and street vendors. Be patient with slower traffic.</p>
                </div>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800">Practical Considerations</h4>
                <div className="text-sm text-green-700 space-y-2">
                  <p><strong>Fuel and Maintenance:</strong> Fuel stations widely available in cities. Regular maintenance crucial due to road conditions. Cost: Petrol ~GHS 7-8/liter.</p>
                  <p><strong>Parking:</strong> Street parking common but use secured lots when possible. Parking fees: GHS 2-5 for short term, GHS 10-20 for day parking.</p>
                  <p><strong>Car Purchase:</strong> Used cars popular. Check documentation carefully. Budget GHS 15,000-40,000 for reliable used vehicle.</p>
                </div>
              </div>
            </div>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Emergency Contacts and Resources</h4>
              <div className="text-sm text-blue-700 grid md:grid-cols-2 gap-4">
                <div>
                  <strong>Emergency Services:</strong>
                  <ul className="mt-1 space-y-1">
                    <li>• Police: 191 or 18555</li>
                    <li>• Fire Service: 192</li>
                    <li>• Ambulance: 193</li>
                    <li>• National Emergency: 199</li>
                  </ul>
                </div>
                <div>
                  <strong>Useful Resources:</strong>
                  <ul className="mt-1 space-y-1">
                    <li>• AA Ghana: +233 302 221 744</li>
                    <li>• DVLA: Vehicle registration info</li>
                    <li>• Insurance companies hotlines</li>
                    <li>• Mechanic contacts for breakdowns</li>
                  </ul>
                </div>
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
