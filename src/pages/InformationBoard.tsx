
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import { InfoCard } from "@/components/information/InfoCard";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Phone, Clock, Globe, Users, FileText, Home, Car, Briefcase, Heart, GraduationCap, Shield, Banknote, Wifi, Utensils, ShoppingBag } from "lucide-react";
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
          id: 1,
          title: "Finding Rental Properties",
          description: "Comprehensive guide to finding safe and affordable housing across Ghana's major cities.",
          category: "housing",
          urgency: "medium",
          details: [
            "Popular rental websites: Meqasa.com, PropertyFinder, Tonaton.com",
            "Average costs: Studio (GHS 800-1,500), 1BR (GHS 1,200-2,500), 2BR (GHS 2,000-4,000)",
            "Accra neighborhoods: East Legon (upscale), Tema (port city), Dansoman (affordable)",
            "Kumasi areas: KNUST campus area, Ahodwo (residential), Ridge (central)",
            "Required documents: 2-3 months advance, guarantor letter, valid ID",
            "Inspection checklist: Water pressure, electricity stability, security features"
          ],
          contact: {
            website: "https://meqasa.com",
            phone: "+233 302 123 456",
            email: "info@meqasa.com"
          },
          links: [
            { label: "Meqasa Ghana", url: "https://meqasa.com" },
            { label: "Tonaton Properties", url: "https://tonaton.com/properties" }
          ]
        },
        {
          id: 2,
          title: "Utilities & Services Setup",
          description: "Step-by-step guide to setting up essential utilities and services in your new home.",
          category: "housing",
          urgency: "high",
          details: [
            "Electricity (ECG): Visit nearest office with tenancy agreement and ID",
            "Water (Ghana Water Company): Connection fee GHS 200-500 depending on area",
            "Internet providers: MTN (fiber), Vodafone (4G/fiber), Surfline (wireless)",
            "Waste collection: Contact local assembly for collection schedule",
            "Security: Consider private security companies in residential areas",
            "Gas supply: LPG cylinders widely available, piped gas in select areas"
          ],
          contact: {
            phone: "+233 302 611 611",
            email: "customercare@ecggh.com",
            website: "https://www.ecggh.com"
          }
        },
        {
          id: 3,
          title: "Neighborhood Safety & Amenities",
          description: "Understanding different neighborhoods and their safety profiles across major cities.",
          category: "housing",
          urgency: "medium",
          details: [
            "Accra safe areas: Airport Residential, East Legon, Labone, Cantonments",
            "Kumasi safe areas: KNUST, Ahodwo, Asokwa, Ridge",
            "Cape Coast: University area, residential estates near UCC",
            "Security tips: Use registered taxi services, avoid displaying valuables",
            "Emergency contacts: Police 191, Fire 192, Ambulance 193",
            "Nearby amenities to check: Banks, hospitals, schools, markets"
          ]
        }
      ]
    },
    {
      title: "Transportation & Getting Around",
      icon: Car,
      color: "bg-green-500",
      items: [
        {
          id: 4,
          title: "Public Transportation Guide",
          description: "Complete overview of Ghana's public transport system including costs and routes.",
          category: "transport",
          urgency: "low",
          details: [
            "Tro tros: Most common, GHS 2-8 depending on distance, board at designated stations",
            "Shared taxis: GHS 3-15, faster than tro tros, negotiate fare beforehand",
            "Uber/Bolt: Available in Accra, Kumasi, Takoradi - safer option for newcomers",
            "STC buses: Inter-city travel, air-conditioned, GHS 15-50 depending on route",
            "Metro Mass Transit: Government buses, cheaper option for longer distances",
            "Motorbikes (Okada): Banned in Accra, available in other cities, negotiate fare"
          ],
          contact: {
            phone: "+233 302 684 636",
            website: "https://stc.gov.gh"
          }
        },
        {
          id: 5,
          title: "Driving & Vehicle Registration",
          description: "Everything you need to know about driving in Ghana and vehicle ownership.",
          category: "transport",
          urgency: "medium",
          details: [
            "International license valid for 6 months, then must convert to Ghanaian license",
            "DVLA offices: Accra (37), Kumasi, Takoradi for license conversion",
            "Driving test required: Theory (GHS 50) and practical (GHS 100)",
            "Vehicle registration: Must register within 14 days of import/purchase",
            "Insurance mandatory: Third-party minimum, comprehensive recommended",
            "Road conditions: Main highways good, rural roads challenging in rainy season"
          ],
          contact: {
            address: "Driver and Vehicle Licensing Authority, Liberation Road, Accra",
            phone: "+233 302 684 920"
          }
        },
        {
          id: 6,
          title: "Airport & Travel Connections",
          description: "Information about Ghana's airports and connecting to other regions.",
          category: "transport",
          urgency: "low",
          details: [
            "Kotoka International Airport (ACC): Main gateway, 45 mins from Accra center",
            "Kumasi Airport: Domestic flights, limited international connections",
            "Airport taxi services: Official taxis GHS 80-120 to city center",
            "Regional travel: STC buses connect major cities, domestic flights available",
            "Border crossings: Aflao (Togo), Elubo (Côte d'Ivoire), Paga (Burkina Faso)",
            "Travel documents: Valid passport required, visa may be needed for some countries"
          ]
        }
      ]
    },
    {
      title: "Healthcare & Medical Services",
      icon: Heart,
      color: "bg-red-500",
      items: [
        {
          id: 7,
          title: "Finding Healthcare Providers",
          description: "Directory of major hospitals, clinics, and medical facilities across Ghana.",
          category: "healthcare",
          urgency: "high",
          details: [
            "Major hospitals: Korle Bu (Accra), 37 Military Hospital, KATH (Kumasi)",
            "Private hospitals: Trust Hospital, LEKMA Hospital, Nyaho Medical Centre",
            "Pharmacies: Entrance Pharmacy, PharmAccess, Ernest Chemist widely available",
            "Emergency services: 24/7 at major hospitals, ambulance service available",
            "Specialist care: Cardiology, oncology available at teaching hospitals",
            "Dental care: University of Ghana Dental School, private clinics available"
          ],
          contact: {
            phone: "193 (Emergency Ambulance)",
            address: "Korle Bu Teaching Hospital, Accra",
            website: "https://kbth.gov.gh"
          }
        },
        {
          id: 8,
          title: "Health Insurance Options",
          description: "Understanding health insurance systems and coverage options in Ghana.",
          category: "healthcare",
          urgency: "medium",
          details: [
            "National Health Insurance Scheme (NHIS): For residents, covers basic services GHS 25/year",
            "International health insurance: Recommended for expatriates, comprehensive coverage",
            "Private insurance: Glico, Enterprise Insurance, SIC Insurance available",
            "Coverage typically includes: Outpatient care, hospitalization, emergency services",
            "Excluded services: Cosmetic procedures, some specialist treatments",
            "Payment: Many facilities require upfront payment, then reimbursement"
          ],
          contact: {
            phone: "+233 302 661 622",
            website: "https://www.nhis.gov.gh"
          }
        },
        {
          id: 9,
          title: "Preventive Health & Vaccinations",
          description: "Important health precautions and vaccination requirements for living in Ghana.",
          category: "healthcare",
          urgency: "high",
          details: [
            "Required vaccines: Yellow fever (mandatory), Hepatitis A/B recommended",
            "Malaria prevention: Use mosquito nets, repellent, consider prophylaxis",
            "Water safety: Drink bottled or boiled water, avoid ice in drinks",
            "Food safety: Eat at reputable establishments, avoid street food initially",
            "Climate health: Stay hydrated, use sunscreen, gradual acclimatization",
            "Regular checkups: Annual malaria test, blood pressure monitoring recommended"
          ]
        }
      ]
    },
    {
      title: "Banking & Financial Services",
      icon: Banknote,
      color: "bg-purple-500",
      items: [
        {
          id: 10,
          title: "Opening Bank Accounts",
          description: "Complete guide to banking services and account requirements in Ghana.",
          category: "finance",
          urgency: "medium",
          details: [
            "Major banks: GCB Bank, Ecobank, Standard Chartered, Fidelity Bank, CAL Bank",
            "Required documents: Passport, proof of address, residence permit, introduction letter",
            "Account types: Savings (GHS 50 minimum), Current (GHS 200-500 minimum)",
            "Services: Online banking, mobile money integration, international transfers",
            "Fees: Monthly maintenance GHS 5-15, ATM withdrawals GHS 1-2",
            "Interest rates: Savings accounts 8-15% annually, term deposits higher"
          ],
          contact: {
            phone: "+233 302 664 910",
            website: "https://gcb.com.gh"
          }
        },
        {
          id: 11,
          title: "Mobile Money & Digital Payments",
          description: "Understanding Ghana's mobile money ecosystem and digital payment options.",
          category: "finance",
          urgency: "low",
          details: [
            "MTN Mobile Money (MoMo): Most popular, widely accepted, easy registration",
            "Vodafone Cash: Good coverage, competitive rates, bank linkage",
            "AirtelTigo Money: Growing network, good for cross-border transfers",
            "Services: Send money, pay bills, buy airtime, merchant payments",
            "Fees: Typically 0.5-1% for transfers, free for small amounts",
            "Cash-out points: Agents available everywhere, banks, ATMs"
          ]
        },
        {
          id: 12,
          title: "International Money Transfers",
          description: "Options for sending and receiving money internationally.",
          category: "finance",
          urgency: "medium",
          details: [
            "Western Union: Extensive agent network, instant transfers available",
            "MoneyGram: Good rates, pickup at banks and agents",
            "Remitly, WorldRemit: Online services, mobile app integration",
            "Bank wire transfers: Secure but slower, higher fees GHS 50-150",
            "Cryptocurrency: Growing acceptance, use with caution",
            "Required for pickup: Valid ID, transfer reference number"
          ]
        }
      ]
    },
    {
      title: "Education & Schools",
      icon: GraduationCap,
      color: "bg-indigo-500",
      items: [
        {
          id: 13,
          title: "International Schools",
          description: "List of international schools offering various curricula for expatriate families.",
          category: "education",
          urgency: "medium",
          details: [
            "Accra: Lincoln Community School, Ghana International School, SOS Hermann Gmeiner",
            "British curriculum: Achimota School, Tema International School",
            "American curriculum: Lincoln Community School, International Community School",
            "IB programs: Available at select international schools",
            "Fees: Range from GHS 15,000-60,000 per year depending on school and level",
            "Application: Early application recommended, waiting lists common"
          ],
          contact: {
            phone: "+233 302 742 049",
            website: "https://www.lincoln.edu.gh"
          }
        },
        {
          id: 14,
          title: "Universities & Higher Education",
          description: "Ghana's top universities and higher education opportunities.",
          category: "education",
          urgency: "low",
          details: [
            "Public universities: University of Ghana (Legon), KNUST (Kumasi), UCC (Cape Coast)",
            "Private universities: Ashesi University, Central University, Presbyterian",
            "Programs: Business, engineering, medicine, liberal arts widely available",
            "International students: Welcome, competitive fees compared to Western countries",
            "Application periods: September intake (main), January intake (limited programs)",
            "Student visa: Required for international students, apply early"
          ]
        }
      ]
    },
    {
      title: "Legal & Documentation",
      icon: Shield,
      color: "bg-orange-500",
      items: [
        {
          id: 15,
          title: "Visa & Residence Permits",
          description: "Understanding visa requirements and residence permit processes.",
          category: "legal",
          urgency: "high",
          details: [
            "Tourist visa: 30 days, extendable once for additional 30 days",
            "Business visa: Multiple entry, 30-90 days depending on purpose",
            "Work permit: Required for employment, employer must initiate application",
            "Residence permit: For stays over 90 days, renewable annually",
            "Documents needed: Passport, application form, photos, fee payment",
            "Processing time: 2-4 weeks for most applications"
          ],
          contact: {
            address: "Ghana Immigration Service, Independence Avenue, Accra",
            phone: "+233 302 258 250",
            website: "https://gis.gov.gh"
          }
        },
        {
          id: 16,
          title: "Legal Services & Documentation",
          description: "Finding legal assistance and understanding document requirements.",
          category: "legal",
          urgency: "medium",
          details: [
            "Legal services: Ghana Bar Association can provide lawyer referrals",
            "Notary services: Available at law firms, banks, some government offices",
            "Document authentication: Ministry of Foreign Affairs for international use",
            "Property law: Use registered lawyers for real estate transactions",
            "Employment law: Know your rights, contracts should be in writing",
            "Consumer protection: Consumer Protection Agency handles disputes"
          ]
        }
      ]
    },
    {
      title: "Shopping & Daily Essentials",
      icon: ShoppingBag,
      color: "bg-teal-500",
      items: [
        {
          id: 17,
          title: "Supermarkets & Shopping Centers",
          description: "Where to find international products and everyday essentials.",
          category: "shopping",
          urgency: "low",
          details: [
            "Major supermarkets: Shoprite, Palace Mall, MaxMart, Melcom",
            "International products: Available at upscale supermarkets, specialty stores",
            "Local markets: Makola Market (Accra), Kejetia Market (Kumasi) for fresh produce",
            "Shopping malls: Accra Mall, West Hills Mall, Kumasi City Mall",
            "Opening hours: Most supermarkets 8am-10pm, markets 6am-6pm",
            "Payment: Cash preferred at markets, cards accepted at malls"
          ]
        },
        {
          id: 18,
          title: "Food & Dining Options",
          description: "Restaurant guide and food shopping for different dietary needs.",
          category: "food",
          urgency: "low",
          details: [
            "International cuisine: Chinese, Lebanese, Indian, European restaurants available",
            "Local specialties: Jollof rice, fufu, banku, kenkey - must-try dishes",
            "Dietary restrictions: Vegetarian options growing, halal food available",
            "Fine dining: Santoku, Buka, Bloom Bar for upscale dining experiences",
            "Street food: Popular and affordable, but ensure hygiene standards",
            "Grocery delivery: Jumia Food, Glovo available in major cities"
          ]
        }
      ]
    },
    {
      title: "Communication & Internet",
      icon: Wifi,
      color: "bg-cyan-500",
      items: [
        {
          id: 19,
          title: "Internet & Mobile Services",
          description: "Setting up phone service and internet connectivity.",
          category: "communication",
          urgency: "medium",
          details: [
            "Mobile networks: MTN (best coverage), Vodafone, AirtelTigo",
            "SIM registration: Required by law, bring passport and proof of address",
            "Data packages: MTN 1GB GHS 10, unlimited evening/weekend packages available",
            "Home internet: Fiber available in major cities, 4G dongles for rural areas",
            "Internet cafes: Available but declining, most use mobile data",
            "International calling: Competitive rates, WhatsApp calling very popular"
          ],
          contact: {
            phone: "100 (MTN Customer Care)",
            website: "https://mtn.com.gh"
          }
        },
        {
          id: 20,
          title: "Postal & Courier Services",
          description: "Mail delivery and package shipping options in Ghana.",
          category: "communication",
          urgency: "low",
          details: [
            "Ghana Post: National postal service, P.O. boxes recommended for reliable delivery",
            "Courier services: DHL, FedEx, UPS available for international shipping",
            "Local couriers: Speedy Express, Zipline (drone delivery for medical supplies)",
            "Delivery times: International packages 5-14 days depending on service",
            "Costs: DHL document GHS 100-200, packages vary by weight and destination",
            "Customs: Packages may incur duties, keep receipts for declared value"
          ]
        }
      ]
    }
  ];

  const filteredCategories = informationCategories.map(category => ({
    ...category,
    items: category.items.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.details?.some(detail => detail.toLowerCase().includes(searchTerm.toLowerCase()))
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
                Your comprehensive guide to living, working, and thriving in Ghana
              </p>
            </div>
          )}

          {!user && (
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Ghana Living Guide</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to know about living in Ghana - from housing and healthcare to banking and education. Your complete expatriate resource guide.
              </p>
            </div>
          )}

          {/* Search Bar */}
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              type="text"
              placeholder="Search for information about living in Ghana..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3 text-lg"
            />
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white rounded-lg shadow-sm border p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">{informationCategories.length}</div>
              <div className="text-sm text-gray-600">Categories</div>
            </div>
            <div className="bg-white rounded-lg shadow-sm border p-4 text-center">
              <div className="text-2xl font-bold text-green-600">
                {informationCategories.reduce((total, cat) => total + cat.items.length, 0)}
              </div>
              <div className="text-sm text-gray-600">Information Items</div>
            </div>
            <div className="bg-white rounded-lg shadow-sm border p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">3</div>
              <div className="text-sm text-gray-600">Major Cities Covered</div>
            </div>
            <div className="bg-white rounded-lg shadow-sm border p-4 text-center">
              <div className="text-2xl font-bold text-orange-600">24/7</div>
              <div className="text-sm text-gray-600">Emergency Support</div>
            </div>
          </div>

          {/* Information Categories */}
          <div className="space-y-8">
            {filteredCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mr-4`}>
                    <category.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                    <p className="text-gray-600">{category.items.length} resources available</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {category.items.map((item, itemIndex) => (
                    <InfoCard
                      key={itemIndex}
                      item={item}
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
              <p className="text-gray-500">Try searching with different keywords or browse our categories above</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InformationBoard;
