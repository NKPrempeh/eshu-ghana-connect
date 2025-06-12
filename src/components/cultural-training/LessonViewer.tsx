
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, CheckCircle, Clock, BookOpen } from "lucide-react";
import { Lesson } from "@/types/cultural-training";

interface LessonViewerProps {
  lesson: Lesson;
  onComplete: () => void;
  onClose: () => void;
}

const lessonDetails: { [key: string]: { [key: number]: string } } = {
  "Basic Greetings and Language": {
    0: "In Ghana, greetings are fundamental to social interaction. Common Twi greetings include 'Maakye' (Good morning), 'Maaha' (Good afternoon), and 'Mema wo akye' (Good evening). The Ga people say 'Misida' (Good morning) and 'Migbonaa' (Good afternoon). Always greet elders first and use both hands when shaking hands as a sign of respect.",
    1: "Greetings in Ghana are more than just words - they're expressions of respect, community, and cultural identity. Taking time to properly greet someone shows you value the relationship. Never rush through greetings, and always ask about family and health. This builds trust and shows genuine interest in others' wellbeing.",
    2: "Pronunciation matters in Ghanaian languages. Twi is tonal, so the same word can have different meanings based on tone. Practice saying 'Wo ho te sɛn?' (How are you?) with the right intonation. Listen to native speakers and don't be afraid to ask for correction - Ghanaians appreciate the effort to learn their languages.",
    3: "Formal greetings are used with elders, authority figures, and in professional settings. Add titles like 'Nana' (Chief), 'Opanin' (Elder), or 'Maame' (Mother) before names. Informal greetings work with peers and younger people. Always match the level of formality to the situation and relationship.",
    4: "Age and gender influence greetings significantly. Younger people should greet elders first and may need to slightly bow or curtsy. Men and women may have different greeting customs, especially in traditional settings. Observe and follow local customs, and when in doubt, err on the side of being more formal and respectful."
  },
  "Food Culture and Dining Etiquette": {
    0: "Ghanaian meals typically follow three main times: breakfast (around 6-8 AM), lunch (12-2 PM), and dinner (6-8 PM). However, many families have a light snack around 4 PM. Always wash your hands before eating - this is both hygienic and culturally important. Wait for the eldest person to start eating before you begin.",
    1: "Fufu (pounded cassava/plantain) is eaten with soup using your right hand only. Banku (fermented corn/cassava) is often paired with tilapia and pepper sauce. Kenkey (fermented corn dumpling) is a coastal favorite. Jollof rice is beloved across West Africa - each country claims the best version! These foods represent Ghana's diverse regional cuisines.",
    2: "Eating together strengthens family and community bonds. Food is often served in communal bowls or large platters. Sharing meals shows unity and care for one another. It's common to invite visitors to join meals, even if unexpected. Refusing food can be seen as rejecting hospitality, so accept graciously even if you eat just a small amount.",
    3: "Always wash hands with soap and water before and after meals. Many homes provide a bowl of water, soap, and towel specifically for this purpose. Use your right hand for eating and greeting - the left hand is considered unclean. Don't point with utensils or put them in your mouth when not eating.",
    4: "Some foods have cultural or religious significance. Certain meats may be taboo for specific ethnic groups. During Ramadan, Muslims fast during daylight hours. Some traditional festivals have special foods. Always ask about dietary restrictions or preferences when hosting, and respect others' food customs without question."
  },
  "Music and Dance Traditions": {
    0: "Highlife emerged in the early 20th century, blending Western instruments with traditional rhythms. Artists like E.T. Mensah pioneered this genre. Hiplife (Hip-hop + Highlife) emerged in the 1990s, with artists like Reggie Rockstone leading the movement. Both genres reflect Ghana's ability to blend tradition with modernity while maintaining cultural identity.",
    1: "The kagan (talking drum) can 'speak' by mimicking tonal languages. Atumpan drums are sacred in Ashanti culture, used in royal ceremonies. The seperewa (Ghanaian harp-lute) has ancient origins and requires great skill. These instruments aren't just for entertainment - they communicate messages, tell stories, and connect communities to ancestors.",
    2: "Music accompanies all major life events: naming ceremonies, marriages, funerals, and festivals. Each occasion has specific songs and rhythms. Funeral music celebrates the deceased's life and comforts mourners. Festival music honors deities and ancestors. Wedding songs bless the couple and involve the entire community in celebration.",
    3: "Ghana has produced internationally acclaimed artists like Amakye Dede, Daddy Lumba, Sarkodie, and Stonebwoy. These musicians have taken Ghanaian sounds global while staying rooted in local culture. They've collaborated with international artists, bringing African rhythms to world music and inspiring a new generation of Ghanaian musicians.",
    4: "Adowa dance represents the antelope's graceful movements and is popular among the Akan people. Agbadza is an energetic war dance from the Ewe people. Bambaya comes from the north and tells stories through movement. Each dance has specific meanings, costumes, and occasions. Learning these dances connects you to Ghana's rich storytelling traditions."
  },
  "Social Customs and Etiquette": {
    0: "Respect for elders is paramount in Ghanaian society. Stand when an elder enters the room, offer your seat if none are available, and always greet them first. Use honorific titles and speak in a respectful tone. Elders' wisdom is valued, and their decisions carry significant weight in family and community matters.",
    1: "In Ghana, your family extends far beyond parents and siblings. Cousins are often called brothers and sisters. Community members may be considered family. This creates a strong support network but also means responsibility for many people's welfare. Major decisions often involve extended family consultation and consensus.",
    2: "In professional settings, punctuality shows respect, though 'African time' allows some flexibility. Dress conservatively and formally. Greet everyone individually when entering a room. Business cards should be received with both hands. Building personal relationships often precedes business discussions - take time to know your colleagues personally.",
    3: "Gift-giving shows respect and strengthens relationships. Bring gifts when visiting homes - items like drinks, fruit, or small tokens are appreciated. Expensive gifts may create obligation or embarrassment. Gifts should be given and received with both hands. Always reciprocate kindness and hospitality when possible.",
    4: "Ghanaians prefer indirect communication to avoid confrontation. Issues are often discussed through intermediaries or community leaders. Public disagreement can cause loss of face. When conflicts arise, seek mediation through respected community members. Patience and diplomacy usually resolve disputes better than direct confrontation."
  },
  "Geography and Regions": {
    0: "Ghana's 16 regions each have distinct characteristics: Greater Accra (commercial hub), Ashanti (cultural heartland), Northern regions (Islamic influence), Volta (mountainous terrain), Central and Western (coastal areas with historical significance). Each region has unique languages, customs, foods, and economic activities that reflect their geographical advantages.",
    1: "Accra is the bustling capital and largest city, home to government and major businesses. Kumasi, the 'Garden City,' is the Ashanti cultural capital and second-largest city. Tamale serves as the northern region's commercial center. Cape Coast and Elmina are historical coastal towns with UNESCO World Heritage slave castles.",
    2: "The coastal region features beaches, lagoons, and historical forts. The forest belt has cocoa farms, gold mines, and lush vegetation. The northern savanna is characterized by grasslands, traditional architecture, and different cultural practices. Each zone supports different agriculture, wildlife, and ways of life.",
    3: "Visit Kakum National Park's canopy walkway, Mole National Park for wildlife viewing, Lake Volta (one of the world's largest artificial lakes), and the slave trade castles at Cape Coast and Elmina. The Ashanti royal palace in Kumasi and the vibrant markets throughout the country offer cultural immersion opportunities.",
    4: "Ghana has two main seasons: wet (April-October) and dry (November-March). The south is more humid with two rainy seasons, while the north has one distinct wet season. Harmattan winds from the Sahara bring dust and cooler temperatures December-February. Climate affects farming, festivals, and daily activities across regions."
  },
  "History and Heritage": {
    0: "Before European contact, powerful kingdoms like the Ashanti Empire, Kingdom of Dagbon, and Ga states flourished. These societies had sophisticated political systems, trade networks, and cultural traditions. The Ashanti Golden Stool symbolized royal authority, while traditional rulers (chiefs) governed local communities with councils of elders providing guidance.",
    1: "From the 15th-19th centuries, Ghana's coast became a major hub for the trans-Atlantic slave trade. Europeans built over 40 forts and castles, including Cape Coast and Elmina castles. Millions of Africans were forcibly taken from these shores to the Americas. This traumatic period profoundly impacted African societies and created the African diaspora.",
    2: "Britain gradually gained control over coastal areas and eventually the interior, establishing the Gold Coast colony in 1874. Colonial rule disrupted traditional governance, imposed new economic systems focused on raw material export, and introduced Western education and Christianity. However, traditional cultures and beliefs persisted alongside colonial influences.",
    3: "Kwame Nkrumah led Ghana's independence movement through the Convention People's Party (CPP). Using non-violent resistance, strikes, and political organization, Ghana became the first African colony to gain independence in 1957. Nkrumah's vision of Pan-Africanism inspired liberation movements across Africa and made Ghana a symbol of African freedom.",
    4: "Post-independence Ghana experienced military coups, economic challenges, and eventual return to democracy in 1992. The country has become a stable democracy with peaceful transfers of power. Ghana's economy has diversified beyond gold and cocoa to include oil, services, and technology. The nation continues balancing traditional values with modern development."
  }
};

export const LessonViewer = ({ lesson, onComplete, onClose }: LessonViewerProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = lesson.content.length;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCurrentStepContent = () => {
    const stepDetails = lessonDetails[lesson.title];
    return stepDetails ? stepDetails[currentStep] : "Learn more about this important aspect of Ghanaian culture through practice and observation.";
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-hidden">
        <CardHeader className="border-b">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl">{lesson.title}</CardTitle>
              <div className="flex items-center gap-4 mt-2">
                <Badge className={getDifficultyColor(lesson.difficulty)}>
                  {lesson.difficulty}
                </Badge>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock size={16} />
                  <span className="text-sm">{lesson.duration}</span>
                </div>
              </div>
            </div>
            <Button variant="outline" onClick={onClose}>
              <ArrowLeft className="mr-2" size={16} />
              Back to Lessons
            </Button>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">
                Step {currentStep + 1} of {totalSteps}
              </span>
              <span className="text-sm text-gray-600">
                {Math.round(progress)}% Complete
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </CardHeader>
        <CardContent className="p-8">
          <div className="min-h-[400px] flex flex-col">
            <div className="text-center mb-6">
              <div className="w-16 h-16 ghana-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-6 text-primary">
                {lesson.content[currentStep]}
              </h3>
            </div>
            
            <div className="flex-1 bg-gray-50 rounded-lg p-6 mb-6">
              <p className="text-gray-700 leading-relaxed text-base">
                {getCurrentStepContent()}
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <div className="flex items-start">
                <div className="ml-3">
                  <p className="text-sm text-blue-700">
                    <strong>Cultural Tip:</strong> Take time to practice what you've learned and observe how locals apply these customs in daily life. Don't hesitate to ask questions - Ghanaians appreciate your interest in their culture!
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between items-center pt-6 border-t">
            <Button 
              variant="outline" 
              onClick={handlePrevious}
              disabled={currentStep === 0}
            >
              <ArrowLeft className="mr-2" size={16} />
              Previous
            </Button>
            <div className="flex gap-2">
              {Array.from({ length: totalSteps }, (_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    i <= currentStep ? 'bg-primary' : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>
            <Button onClick={handleNext} className="ghana-gradient">
              {currentStep === totalSteps - 1 ? (
                <>
                  Complete Lesson <CheckCircle className="ml-2" size={16} />
                </>
              ) : (
                <>
                  Next <ArrowRight className="ml-2" size={16} />
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
