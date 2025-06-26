import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import { InfoCard } from "@/components/information/InfoCard";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Phone, Clock, Globe, Users, FileText, Home, Car, Briefcase, Heart } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";

const InformationBoard = () => {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [userProfile, setUserProfile] = useState<any>(null);

  useEffect(() => {
    if (user) {
      fetchUserProfile();
    }
  }, [user]);

  const fetchUserProfile = async () => {
    if (!user) return;
    
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('full_name')
        .eq('id', user.id)
        .single();
      
      if (error) {
        console.error('Error fetching user profile:', error);
      } else {
        setUserProfile(data);
      }
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  const getUserDisplayName = () => {
    if (userProfile?.full_name) {
      return userProfile.full_name;
    }
    return user?.email?.split('@')[0] || 'User';
  };

  const informationCategories = [
    {
      title: "Housing & Accommodation",
      icon: Home,
      color: "bg-blue-500",
      items: [
        {
          title: "Finding Rental Properties",
          description: "Tips for finding safe and affordable housing in major cities like Accra, Kumasi, and Cape Coast.",
          content: "Popular rental websites include Meqasa.com and PropertyFinder. Average rental costs range from $200-800/month depending on location and amenities."
        },
        {
          title: "Utilities Setup",
          description: "How to set up electricity, water, internet, and other essential services.",
          content: "Contact ECG for electricity, Ghana Water Company for water services. Internet providers include MTN, Vodafone, and AirtelTigo."
        }
      ]
    },
    {
      title: "Transportation",
      icon: Car,
      color: "bg-green-500",
      items: [
        {
          title: "Public Transportation Options",
          description: "Overview of transportation options including tro tros, taxis, and ride-sharing services.",
          content: "Tro tros are the most common and affordable option. Taxis are readily available but negotiate the fare beforehand. Ride-sharing apps like Uber and Bolt also operate in major cities."
        },
        {
          title: "Driving in Ghana",
          description: "Information on obtaining a driver's license, road conditions, and traffic regulations.",
          content: "An international driver's license is accepted for a limited time. Roads can be challenging, especially during the rainy season. Traffic is heavy in urban areas."
        }
      ]
    },
    {
      title: "Healthcare & Well-being",
      icon: Heart,
      color: "bg-red-500",
      items: [
        {
          title: "Finding Healthcare Services",
          description: "How to locate hospitals, clinics, and pharmacies.",
          content: "Major hospitals include Korle Bu Teaching Hospital and 37 Military Hospital in Accra. Pharmacies are widely available in urban areas."
        },
        {
          title: "Health Insurance",
          description: "Information on health insurance options for expatriates and visitors.",
          content: "Consider obtaining international health insurance or enrolling in the National Health Insurance Scheme (NHIS)."
        }
      ]
    },
    {
      title: "Business & Finance",
      icon: Briefcase,
      color: "bg-purple-500",
      items: [
        {
          title: "Opening a Bank Account",
          description: "Requirements for opening a bank account as a foreigner.",
          content: "You'll typically need a passport, proof of address, and a residence permit. Major banks include GCB Bank, Ecobank, and Standard Chartered Bank."
        },
        {
          title: "Job Opportunities",
          description: "Where to find job listings and networking opportunities.",
          content: "Popular job websites include Jobberman and Tonaton. Networking events are common in Accra and other major cities."
        }
      ]
    }
  ];

  const filteredCategories = informationCategories.map(category => ({
    ...category,
    items: category.items.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.items.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {user && (
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Welcome <span className="text-green-700 italic">{getUserDisplayName()}</span>
              </h1>
              <p className="text-gray-600">
                Find practical information to help you navigate life in Ghana
              </p>
            </div>
          )}

          {!user && (
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Information Board</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your comprehensive guide to living, working, and thriving in Ghana. Find practical information on everything from housing to healthcare.
              </p>
            </div>
          )}

          {/* Search Bar */}
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              type="text"
              placeholder="Search for information..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3 text-lg"
            />
          </div>

          {/* Information Categories */}
          <div className="space-y-8">
            {filteredCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mr-4`}>
                    <category.icon className="text-white" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {category.items.map((item, itemIndex) => (
                    <InfoCard
                      key={itemIndex}
                      title={item.title}
                      description={item.description}
                      content={item.content}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {filteredCategories.length === 0 && searchTerm && (
            <div className="text-center py-12">
              <FileText className="mx-auto text-gray-400 mb-4" size={48} />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No information found</h3>
              <p className="text-gray-500">Try searching with different keywords</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InformationBoard;
