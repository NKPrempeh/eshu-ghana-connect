
import React from "react";

interface LessonContentItem {
  title: string;
  content: React.ReactNode;
}

export const getLessonContent = (lessonId: number, stepIndex: number): LessonContentItem => {
  const lessonContents: { [key: number]: LessonContentItem[] } = {
    1: [
      {
        title: "Common Greetings",
        content: (
          <div className="space-y-4">
            <p>In Ghana, greetings are extremely important and show respect. Here are the most common greetings:</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">English Greetings:</h4>
              <ul className="space-y-2">
                <li><strong>Good morning:</strong> "Good morning" (used until 12 PM)</li>
                <li><strong>Good afternoon:</strong> "Good afternoon" (12 PM - 6 PM)</li>
                <li><strong>Good evening:</strong> "Good evening" (after 6 PM)</li>
                <li><strong>How are you?:</strong> "How are you?" or "How do you do?"</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Twi Greetings:</h4>
              <ul className="space-y-2">
                <li><strong>Good morning:</strong> "Maakye" (MAH-cheh)</li>
                <li><strong>Good afternoon:</strong> "Maaha" (MAH-hah)</li>
                <li><strong>Good evening:</strong> "Maadwo" (MAH-joh)</li>
                <li><strong>How are you?:</strong> "Wo ho te sɛn?" (Woh-hoh-teh-sen)</li>
              </ul>
            </div>
          </div>
        )
      },
      {
        title: "Pronunciation Guide",
        content: (
          <div className="space-y-4">
            <p>Proper pronunciation is key to effective communication. Here's how to pronounce common Twi phrases:</p>
            <div className="space-y-3">
              <div className="border-l-4 border-green-500 pl-4">
                <p><strong>Maakye</strong> - MAH-cheh (Good morning)</p>
                <p className="text-sm text-gray-600">The 'aa' is pronounced as a long 'a' sound</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <p><strong>Medaase</strong> - meh-DAH-seh (Thank you)</p>
                <p className="text-sm text-gray-600">Emphasis on the middle syllable</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <p><strong>Akwaaba</strong> - ah-KWAH-bah (Welcome)</p>
                <p className="text-sm text-gray-600">This is Ghana's most famous greeting</p>
              </div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800">Pro Tip:</h4>
              <p>Practice these greetings daily. Ghanaians appreciate when foreigners make an effort to speak local languages!</p>
            </div>
          </div>
        )
      },
      {
        title: "Cultural Context",
        content: (
          <div className="space-y-4">
            <p>Understanding when and how to use greetings is crucial in Ghanaian culture:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">Do's</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Always greet elders first</li>
                  <li>• Use both hands when shaking hands</li>
                  <li>• Smile and make eye contact</li>
                  <li>• Ask about family and health</li>
                  <li>• Take time for proper greetings</li>
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">Don'ts</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Don't rush greetings</li>
                  <li>• Don't use left hand only</li>
                  <li>• Don't ignore people you know</li>
                  <li>• Don't be too casual with elders</li>
                  <li>• Don't skip traditional responses</li>
                </ul>
              </div>
            </div>
            <p className="text-center font-medium text-green-700">Remember: Greetings are the foundation of all social interactions in Ghana!</p>
          </div>
        )
      }
    ],
    2: [
      {
        title: "Traditional Ghanaian Dishes",
        content: (
          <div className="space-y-4">
            <p>Ghana's cuisine is rich and diverse, with each region offering unique flavors and specialties:</p>
            <div className="grid gap-4">
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">Jollof Rice</h4>
                <p>Ghana's national pride! A one-pot rice dish cooked with tomatoes, onions, and spices. Often served with chicken, beef, or fish.</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Fufu with Light Soup</h4>
                <p>Pounded cassava and plantain served with a spicy soup containing meat, fish, and vegetables. Eaten with hands.</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">Kenkey</h4>
                <p>Fermented corn dough wrapped in corn husks or banana leaves. A staple food often served with pepper sauce and fried fish.</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">Banku</h4>
                <p>Made from fermented corn and cassava dough. Similar to kenkey but with a different texture. Popular in southern Ghana.</p>
              </div>
            </div>
          </div>
        )
      },
      {
        title: "Dining Etiquette",
        content: (
          <div className="space-y-4">
            <p>Understanding proper dining etiquette is essential for social integration:</p>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Before Eating</h4>
                <ul className="space-y-2">
                  <li>• Always wash your hands before meals</li>
                  <li>• Wait for elders to start eating first</li>
                  <li>• Say a prayer or give thanks if invited</li>
                  <li>• Sit properly and avoid lounging</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">During the Meal</h4>
                <ul className="space-y-2">
                  <li>• Use right hand for eating (left hand is considered unclean)</li>
                  <li>• Take moderate portions, don't waste food</li>
                  <li>• Eat slowly and engage in conversation</li>
                  <li>• Try everything offered to you</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">After Eating</h4>
                <ul className="space-y-2">
                  <li>• Thank the host for the meal</li>
                  <li>• Wash hands again</li>
                  <li>• Offer to help with cleaning (though may be declined)</li>
                  <li>• Stay for a while to socialize</li>
                </ul>
              </div>
            </div>
          </div>
        )
      },
      {
        title: "Street Food Safety",
        content: (
          <div className="space-y-4">
            <p>Street food is an integral part of Ghanaian culture, but safety is important:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Safe Street Foods</h4>
                <ul className="space-y-2">
                  <li>• Kelewele (spiced fried plantain)</li>
                  <li>• Roasted corn</li>
                  <li>• Boiled eggs</li>
                  <li>• Fresh coconut water</li>
                  <li>• Roasted groundnuts</li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">Safety Tips</h4>
                <ul className="space-y-2">
                  <li>• Choose busy vendors (high turnover)</li>
                  <li>• Look for cleanliness</li>
                  <li>• Eat food that's cooked fresh</li>
                  <li>• Avoid ice in drinks</li>
                  <li>• Carry hand sanitizer</li>
                </ul>
              </div>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
              <h4 className="font-semibold text-red-800 mb-2">⚠️ Foods to Approach with Caution</h4>
              <p>As a newcomer, be careful with very spicy foods, unfamiliar meats, and foods that have been sitting out for long periods.</p>
            </div>
          </div>
        )
      }
    ],
    3: [
      {
        title: "Business Meeting Culture",
        content: (
          <div className="space-y-4">
            <p>Understanding Ghana's business culture is crucial for professional success:</p>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Meeting Preparation</h4>
                <ul className="space-y-2">
                  <li>• Arrive 10-15 minutes early</li>
                  <li>• Dress formally and conservatively</li>
                  <li>• Bring business cards in English</li>
                  <li>• Prepare for extended greetings</li>
                  <li>• Research attendees' backgrounds</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">During Meetings</h4>
                <ul className="space-y-2">
                  <li>• Begin with extensive greetings and small talk</li>
                  <li>• Show respect to senior members first</li>
                  <li>• Be patient - decisions take time</li>
                  <li>• Avoid direct confrontation</li>
                  <li>• Build relationships before business</li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">Communication Style</h4>
                <ul className="space-y-2">
                  <li>• Use indirect communication</li>
                  <li>• Be diplomatic and respectful</li>
                  <li>• Allow for longer discussions</li>
                  <li>• Use proverbs and stories when appropriate</li>
                  <li>• Maintain eye contact with speakers</li>
                </ul>
              </div>
            </div>
          </div>
        )
      },
      {
        title: "Hierarchy and Respect",
        content: (
          <div className="space-y-4">
            <p>Ghana has a strong respect for hierarchy and age in professional settings:</p>
            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Organizational Hierarchy</h4>
                <ul className="space-y-2">
                  <li>• Senior positions are highly respected</li>
                  <li>• Age often correlates with seniority</li>
                  <li>• Decisions flow from top to bottom</li>
                  <li>• Junior staff rarely challenge seniors publicly</li>
                  <li>• Titles are important and should be used</li>
                </ul>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">Showing Respect</h4>
                <ul className="space-y-2">
                  <li>• Use titles (Mr., Mrs., Dr., Chief, etc.)</li>
                  <li>• Stand when senior people enter</li>
                  <li>• Wait to be seated or asked to sit</li>
                  <li>• Use both hands when giving/receiving items</li>
                  <li>• Avoid interrupting senior speakers</li>
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <h4 className="font-semibold text-red-800 mb-2">Important Note</h4>
                <p>While respecting hierarchy, modern Ghanaian businesses are becoming more collaborative. Find the balance between respect and active participation.</p>
              </div>
            </div>
          </div>
        )
      },
      {
        title: "Networking and Relationships",
        content: (
          <div className="space-y-4">
            <p>Business in Ghana is built on relationships and trust:</p>
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Building Professional Networks</h4>
                <ul className="space-y-2">
                  <li>• Join professional associations</li>
                  <li>• Attend business networking events</li>
                  <li>• Participate in community activities</li>
                  <li>• Maintain regular contact with colleagues</li>
                  <li>• Be genuine in your interest in others</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Business Entertainment</h4>
                <ul className="space-y-2">
                  <li>• Business lunches are common</li>
                  <li>• Family events may include business contacts</li>
                  <li>• Golf and other sports for networking</li>
                  <li>• Cultural events and festivals</li>
                  <li>• After-work social gatherings</li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">Gift Giving</h4>
                <ul className="space-y-2">
                  <li>• Small gifts from your home country</li>
                  <li>• Quality items rather than expensive ones</li>
                  <li>• Present gifts with both hands</li>
                  <li>• Avoid leather products (religious reasons)</li>
                  <li>• Business gifts should be modest</li>
                </ul>
              </div>
            </div>
          </div>
        )
      }
    ],
    4: [
      {
        title: "Transportation Options",
        content: (
          <div className="space-y-4">
            <p>Ghana offers various transportation options to suit different needs and budgets:</p>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Trotro (Shared Minibus)</h4>
                <p className="mb-2">The most common and affordable public transport</p>
                <ul className="space-y-1 text-sm">
                  <li>• Cost: 1-5 GHS depending on distance</li>
                  <li>• Fixed routes throughout cities</li>
                  <li>• Can be crowded during peak hours</li>
                  <li>• Pay the mate (conductor), not the driver</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Taxi Services</h4>
                <p className="mb-2">More comfortable but more expensive</p>
                <ul className="space-y-1 text-sm">
                  <li>• Uber and Bolt available in major cities</li>
                  <li>• Regular taxis: negotiate fare before riding</li>
                  <li>• Dropping taxis: shared ride, cheaper</li>
                  <li>• Charter taxis: exclusive use, more expensive</li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">Inter-city Travel</h4>
                <p className="mb-2">For traveling between cities</p>
                <ul className="space-y-1 text-sm">
                  <li>• STC and VIP buses for long distances</li>
                  <li>• Metro Mass Transit for shorter routes</li>
                  <li>• Domestic flights between major cities</li>
                  <li>• Car rentals available but expensive</li>
                </ul>
              </div>
            </div>
          </div>
        )
      },
      {
        title: "Using Public Transport",
        content: (
          <div className="space-y-4">
            <p>Tips for safely and effectively using Ghana's public transportation:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Safety Tips</h4>
                <ul className="space-y-2">
                  <li>• Keep valuables secure and hidden</li>
                  <li>• Avoid displaying expensive items</li>
                  <li>• Sit near the driver when possible</li>
                  <li>• Have exact change ready</li>
                  <li>• Trust your instincts about situations</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Practical Tips</h4>
                <ul className="space-y-2">
                  <li>• Learn common destinations in local language</li>
                  <li>• Ask locals for directions</li>
                  <li>• Allow extra time for travel</li>
                  <li>• Carry small denominations of money</li>
                  <li>• Download offline maps</li>
                </ul>
              </div>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-800 mb-2">Common Phrases</h4>
              <ul className="space-y-2">
                <li>• "Where are you going?" - Standard greeting from drivers</li>
                <li>• "I'm going to [destination]" - Your response</li>
                <li>• "How much?" - "Ɛyɛ sɛn?" in Twi</li>
                <li>• "Stop here" - "Gyae ha" in Twi</li>
              </ul>
            </div>
          </div>
        )
      },
      {
        title: "Alternative Transportation",
        content: (
          <div className="space-y-4">
            <p>Other transportation options available in Ghana:</p>
            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Motorbikes (Okada)</h4>
                <ul className="space-y-2">
                  <li>• Fast and affordable for short distances</li>
                  <li>• Can navigate through traffic easily</li>
                  <li>• Always wear the provided helmet</li>
                  <li>• Not legal in all areas (check local laws)</li>
                  <li>• Negotiate price before riding</li>
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">Walking and Cycling</h4>
                <ul className="space-y-2">
                  <li>• Walking is common for short distances</li>
                  <li>• Be cautious of traffic and road conditions</li>
                  <li>• Cycling is increasing in urban areas</li>
                  <li>• Bike lanes are limited</li>
                  <li>• Always carry water and sun protection</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Car Ownership</h4>
                <ul className="space-y-2">
                  <li>• Requires Ghana driver's license</li>
                  <li>• International permits valid for 1 year</li>
                  <li>• Insurance is mandatory</li>
                  <li>• Road conditions vary greatly</li>
                  <li>• Fuel costs are significant</li>
                </ul>
              </div>
            </div>
          </div>
        )
      }
    ],
    5: [
      {
        title: "Traditional Music Styles",
        content: (
          <div className="space-y-4">
            <p>Ghana has a rich musical heritage with diverse traditional styles:</p>
            <div className="space-y-4">
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">Highlife</h4>
                <p>Ghana's most famous musical genre, blending traditional Akan music with Western instruments. Features brass bands, guitars, and jazz influences.</p>
                <p className="text-sm mt-2"><strong>Famous Artists:</strong> E.T. Mensah, Amakye Dede, Pat Thomas</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Adowa</h4>
                <p>Traditional dance music of the Akan people, performed at funerals and festivals. Characterized by slow, graceful movements.</p>
                <p className="text-sm mt-2"><strong>Instruments:</strong> Fontomfrom drums, bells, and traditional singing</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Kpanlogo</h4>
                <p>A modern traditional dance from the Ga people, featuring energetic movements and contemporary themes.</p>
                <p className="text-sm mt-2"><strong>Occasions:</strong> Social gatherings, cultural events, celebrations</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Dagbani Music</h4>
                <p>Traditional music from Northern Ghana, featuring talking drums and praise singing.</p>
                <p className="text-sm mt-2"><strong>Characteristics:</strong> Complex rhythms, storytelling, praise poetry</p>
              </div>
            </div>
          </div>
        )
      },
      {
        title: "Musical Instruments",
        content: (
          <div className="space-y-4">
            <p>Traditional Ghanaian instruments are integral to the country's musical identity:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">Drums</h4>
                <ul className="space-y-2">
                  <li><strong>Djembe:</strong> Sacred goblet-shaped drum</li>
                  <li><strong>Talking Drum:</strong> Can mimic speech patterns</li>
                  <li><strong>Fontomfrom:</strong> Set of drums for royal music</li>
                  <li><strong>Atumpan:</strong> Pair of large drums</li>
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">String Instruments</h4>
                <ul className="space-y-2">
                  <li><strong>Kora:</strong> 21-string harp-lute</li>
                  <li><strong>Seprewa:</strong> Traditional harp</li>
                  <li><strong>Kontomire:</strong> Musical bow</li>
                  <li><strong>Guitar:</strong> Adapted for highlife music</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Wind Instruments</h4>
                <ul className="space-y-2">
                  <li><strong>Atenteben:</strong> Bamboo flute</li>
                  <li><strong>Mmenson:</strong> Horn ensemble</li>
                  <li><strong>Trumpets:</strong> Brass instruments in highlife</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Percussion</h4>
                <ul className="space-y-2">
                  <li><strong>Dawuro:</strong> Iron bell</li>
                  <li><strong>Shakers:</strong> Various rattles and shakers</li>
                  <li><strong>Castanets:</strong> Finger percussion</li>
                </ul>
              </div>
            </div>
          </div>
        )
      },
      {
        title: "Dance and Cultural Expression",
        content: (
          <div className="space-y-4">
            <p>Dance is inseparable from music in Ghanaian culture and serves various social functions:</p>
            <div className="space-y-4">
              <div className="bg-pink-50 p-4 rounded-lg">
                <h4 className="font-semibold text-pink-800 mb-2">Social Functions of Dance</h4>
                <ul className="space-y-2">
                  <li>• <strong>Ceremonial:</strong> Weddings, funerals, festivals</li>
                  <li>• <strong>Religious:</strong> Spiritual expressions and rituals</li>
                  <li>• <strong>Social:</strong> Community bonding and entertainment</li>
                  <li>• <strong>Educational:</strong> Teaching history and values</li>
                  <li>• <strong>Therapeutic:</strong> Healing and emotional release</li>
                </ul>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h4 className="font-semibold text-indigo-800 mb-2">Popular Dances</h4>
                <ul className="space-y-2">
                  <li>• <strong>Azonto:</strong> Modern popular dance with hip movements</li>
                  <li>• <strong>Kete:</strong> Royal dance of the Ashanti people</li>
                  <li>• <strong>Bambaya:</strong> Northern Ghana warrior dance</li>
                  <li>• <strong>Agbadza:</strong> Ewe traditional dance</li>
                </ul>
              </div>
              <div className="bg-teal-50 p-4 rounded-lg">
                <h4 className="font-semibold text-teal-800 mb-2">Learning Opportunities</h4>
                <ul className="space-y-2">
                  <li>• Join cultural centers and dance groups</li>
                  <li>• Attend festivals and cultural events</li>
                  <li>• Take lessons from traditional masters</li>
                  <li>• Practice with local communities</li>
                  <li>• Watch and participation in celebrations</li>
                </ul>
              </div>
            </div>
            <div className="bg-orange-100 p-4 rounded-lg border-l-4 border-orange-500">
              <p className="font-medium">Remember: Music and dance in Ghana are community activities. Don't be shy about joining in - Ghanaians love to share their culture!</p>
            </div>
          </div>
        )
      }
    ],
    6: [
      {
        title: "Religious Landscape",
        content: (
          <div className="space-y-4">
            <p>Ghana is a religiously diverse country with strong spiritual traditions:</p>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Christianity (71%)</h4>
                <ul className="space-y-2">
                  <li>• Protestant denominations are most common</li>
                  <li>• Catholic Church has significant presence</li>
                  <li>• Pentecostal churches are growing rapidly</li>
                  <li>• Sunday services are major social events</li>
                  <li>• Many holidays are Christian-based</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Islam (18%)</h4>
                <ul className="space-y-2">
                  <li>• Concentrated mainly in Northern Ghana</li>
                  <li>• Five daily prayers observed</li>
                  <li>• Friday prayers at mosques</li>
                  <li>• Ramadan widely observed</li>
                  <li>• Islamic holidays are public holidays</li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">Traditional African Religion (5%)</h4>
                <ul className="space-y-2">
                  <li>• Ancestor veneration practices</li>
                  <li>• Connection with nature and spirits</li>
                  <li>• Traditional priests and shrines</li>
                  <li>• Festivals honoring deities</li>
                  <li>• Often blended with other religions</li>
                </ul>
              </div>
            </div>
          </div>
        )
      },
      {
        title: "Religious Etiquette",
        content: (
          <div className="space-y-4">
            <p>Understanding religious etiquette helps you navigate social situations respectfully:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Church Etiquette</h4>
                <ul className="space-y-2">
                  <li>• Dress modestly and formally</li>
                  <li>• Arrive on time or slightly early</li>
                  <li>• Participate in singing and responses</li>
                  <li>• Turn off mobile phones</li>
                  <li>• Contribute to offerings if comfortable</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Mosque Etiquette</h4>
                <ul className="space-y-2">
                  <li>• Remove shoes before entering</li>
                  <li>• Dress conservatively, cover arms/legs</li>
                  <li>• Women may need to cover hair</li>
                  <li>• Face Mecca during prayers</li>
                  <li>• Maintain quiet and respectful demeanor</li>
                </ul>
              </div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">General Religious Sensitivity</h4>
              <ul className="space-y-2">
                <li>• Respect all religious beliefs</li>
                <li>• Ask before photographing religious ceremonies</li>
                <li>• Be aware of religious holidays and fasting periods</li>
                <li>• Avoid religious debates or criticism</li>
                <li>• Accept invitations to religious events graciously</li>
              </ul>
            </div>
          </div>
        )
      },
      {
        title: "Religious Holidays and Celebrations",
        content: (
          <div className="space-y-4">
            <p>Ghana's calendar includes numerous religious holidays that affect daily life:</p>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">Christian Holidays</h4>
                <ul className="space-y-2">
                  <li>• <strong>Christmas (December 25):</strong> Major celebration with family gatherings</li>
                  <li>• <strong>Easter:</strong> Good Friday and Easter Monday are public holidays</li>
                  <li>• <strong>Harvest Festivals:</strong> Thanksgiving services in churches</li>
                  <li>• <strong>Watch Night Services:</strong> New Year's Eve church services</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Islamic Holidays</h4>
                <ul className="space-y-2">
                  <li>• <strong>Eid al-Fitr:</strong> End of Ramadan celebration</li>
                  <li>• <strong>Eid al-Adha:</strong> Festival of sacrifice</li>
                  <li>• <strong>Ramadan:</strong> Month of fasting and prayer</li>
                  <li>• <strong>Mawlid:</strong> Prophet Muhammad's birthday</li>
                </ul>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">Traditional Festivals</h4>
                <ul className="space-y-2">
                  <li>• <strong>Homowo:</strong> Ga people's harvest festival</li>
                  <li>• <strong>Odwira:</strong> Akuapem festival of purification</li>
                  <li>• <strong>Aboakyir:</strong> Deer hunting festival in Winneba</li>
                  <li>• <strong>Kundum:</strong> Ahanta and Nzema harvest festival</li>
                </ul>
              </div>
            </div>
            <div className="bg-yellow-100 p-4 rounded-lg border-l-4 border-yellow-500">
              <p className="font-medium">Tip: Many Ghanaians practice religious syncretism, blending Christian or Islamic beliefs with traditional practices. This is normal and widely accepted.</p>
            </div>
          </div>
        )
      }
    ]
  };

  return lessonContents[lessonId]?.[stepIndex] || {
    title: "Content Coming Soon",
    content: <p>This lesson content is being prepared. Please check back soon!</p>
  };
};
