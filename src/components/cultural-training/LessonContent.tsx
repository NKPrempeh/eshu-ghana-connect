
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
      }
    }
  };

  return contentMap[lessonId]?.[step] || {
    title: "Lesson Content",
    content: <p className="text-gray-700">Learn about Ghanaian culture and customs.</p>
  };
};
