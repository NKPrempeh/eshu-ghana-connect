
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileText, 
  Home, 
  Heart, 
  GraduationCap, 
  Briefcase, 
  CreditCard, 
  Phone, 
  Car,
  ExternalLink,
  AlertTriangle,
  Clock
} from "lucide-react";

const InformationBoard = () => {
  const categories = [
    {
      id: "visa-immigration",
      title: "Visa & Immigration",
      icon: FileText,
      items: [
        {
          title: "Ghana Immigration Service",
          description: "Official visa applications and residence permits",
          url: "https://gis.gov.gh",
          priority: "High",
          category: "Official"
        },
        {
          title: "Tourist Visa Requirements",
          description: "Documents needed for tourist visa application",
          priority: "High",
          details: ["Valid passport (6+ months)", "Passport photos", "Yellow fever certificate", "Return ticket"]
        },
        {
          title: "Work Permit Application",
          description: "Steps to obtain work authorization in Ghana",
          priority: "Medium",
          details: ["Job offer letter", "Educational certificates", "Medical certificate", "Police clearance"]
        }
      ]
    },
    {
      id: "housing",
      title: "Housing",
      icon: Home,
      items: [
        {
          title: "Popular Residential Areas",
          description: "Best neighborhoods for expats in major cities",
          priority: "High",
          details: ["Accra: East Legon, Airport Residential", "Kumasi: KNUST Area, Ahodwo", "Takoradi: Sekondi, European Town"]
        },
        {
          title: "Average Rental Costs",
          description: "Monthly rent ranges across different areas",
          priority: "Medium",
          details: ["Studio: GHS 800-2000", "1BR: GHS 1200-3500", "2BR: GHS 2000-6000", "3BR: GHS 3000-12000"]
        },
        {
          title: "Housing Platforms",
          description: "Websites and apps for finding accommodation",
          priority: "Medium",
          details: ["Meqasa.com", "Tonaton.com", "Facebook groups", "Local real estate agents"]
        }
      ]
    },
    {
      id: "healthcare",
      title: "Healthcare",
      icon: Heart,
      items: [
        {
          title: "National Health Insurance (NHIS)",
          description: "Healthcare coverage for residents",
          priority: "High",
          url: "https://nhis.gov.gh",
          details: ["Required for all residents", "Covers basic medical care", "Premium hospitals may require additional payment"]
        },
        {
          title: "Major Hospitals",
          description: "Quality healthcare facilities",
          priority: "High",
          details: ["Korle-Bu (Accra)", "37 Military Hospital (Accra)", "Komfo Anokye (Kumasi)", "Trust Hospital (Multiple locations)"]
        },
        {
          title: "Emergency Numbers",
          description: "Important contacts for medical emergencies",
          priority: "Critical",
          details: ["Police: 191", "Fire Service: 192", "Ambulance: 193", "Emergency: 999"]
        }
      ]
    },
    {
      id: "education",
      title: "Education",
      icon: GraduationCap,
      items: [
        {
          title: "International Schools",
          description: "Schools for expat children",
          priority: "High",
          details: ["Ghana International School", "SOS Hermann Gmeiner", "American International School", "British International School"]
        },
        {
          title: "Universities",
          description: "Higher education institutions",
          priority: "Medium",
          details: ["University of Ghana", "KNUST", "University of Cape Coast", "Ashesi University"]
        }
      ]
    },
    {
      id: "banking",
      title: "Banking",
      icon: CreditCard,
      items: [
        {
          title: "Opening a Bank Account",
          description: "Requirements for banking services",
          priority: "High",
          details: ["Valid ID/Passport", "Proof of address", "Reference letter", "Minimum deposit varies by bank"]
        },
        {
          title: "Major Banks",
          description: "Reliable banking institutions",
          priority: "Medium",
          details: ["GCB Bank", "Ecobank", "Standard Chartered", "Stanbic Bank", "Zenith Bank"]
        },
        {
          title: "Mobile Money",
          description: "Popular digital payment systems",
          priority: "High",
          details: ["MTN MoMo", "AirtelTigo Money", "Vodafone Cash", "Zeepay"]
        }
      ]
    },
    {
      id: "transportation",
      title: "Transportation",
      icon: Car,
      items: [
        {
          title: "Getting Around",
          description: "Transportation options in Ghana",
          priority: "High",
          details: ["Uber/Bolt available in cities", "Trotro (shared minibus)", "Taxi services", "STC intercity buses"]
        },
        {
          title: "Driving License",
          description: "Requirements for driving in Ghana",
          priority: "Medium",
          details: ["International driving permit valid for 1 year", "Ghana DVLA license for long-term", "Written and practical tests required"]
        }
      ]
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Critical": return "bg-red-100 text-red-800 border-red-200";
      case "High": return "bg-orange-100 text-orange-800 border-orange-200";
      case "Medium": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getPriorityIcon = (priority: string) => {
    if (priority === "Critical") return <AlertTriangle size={16} />;
    if (priority === "High") return <Clock size={16} />;
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Information Board
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know for living in Ghana. From visa requirements to daily essentials, 
            we've got you covered with the most up-to-date information.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-primary">191</div>
              <p className="text-sm text-gray-600">Police Emergency</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-primary">193</div>
              <p className="text-sm text-gray-600">Ambulance</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-primary">GHS</div>
              <p className="text-sm text-gray-600">Local Currency</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-primary">GMT</div>
              <p className="text-sm text-gray-600">Time Zone</p>
            </CardContent>
          </Card>
        </div>

        {/* Information Categories */}
        <Tabs defaultValue="visa-immigration" className="space-y-6">
          <TabsList className="grid grid-cols-3 lg:grid-cols-6 w-full h-auto p-1">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="flex flex-col gap-2 p-3 h-auto data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  <IconComponent size={20} />
                  <span className="text-xs">{category.title}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid gap-6">
                {category.items.map((item, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg flex items-center gap-2">
                            {item.title}
                            {item.url && (
                              <Button variant="ghost" size="sm" asChild>
                                <a href={item.url} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink size={16} />
                                </a>
                              </Button>
                            )}
                          </CardTitle>
                          <CardDescription>{item.description}</CardDescription>
                        </div>
                        <Badge className={getPriorityColor(item.priority)}>
                          <div className="flex items-center gap-1">
                            {getPriorityIcon(item.priority)}
                            {item.priority}
                          </div>
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {item.details && (
                        <div className="space-y-2">
                          <h4 className="font-medium text-sm">Key Information:</h4>
                          <ul className="space-y-1">
                            {item.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-start gap-2 text-sm text-gray-600">
                                <span className="text-primary mt-1">•</span>
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Emergency Contact Card */}
        <Card className="mt-8 bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-800">
              <AlertTriangle className="text-red-600" size={24} />
              Emergency Contacts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">191</div>
                <p className="text-sm">Police</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">192</div>
                <p className="text-sm">Fire Service</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">193</div>
                <p className="text-sm">Ambulance</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InformationBoard;
