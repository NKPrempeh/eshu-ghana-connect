
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
          phone: "+233 302 258 250",
          priority: "High",
          category: "Official",
          details: ["Located at: Ridge, Accra", "Office Hours: 8:00 AM - 5:00 PM", "Email: info@gis.gov.gh"]
        },
        {
          title: "Tourist Visa Requirements",
          description: "Documents needed for tourist visa application",
          priority: "High",
          details: ["Valid passport (6+ months)", "Passport photos", "Yellow fever certificate", "Return ticket", "Hotel booking/invitation letter"]
        },
        {
          title: "Work Permit Application",
          description: "Steps to obtain work authorization in Ghana",
          priority: "Medium",
          phone: "+233 302 258 250",
          details: ["Job offer letter", "Educational certificates", "Medical certificate", "Police clearance", "Processing time: 4-6 weeks"]
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
          details: ["Accra: East Legon, Airport Residential, Cantonments", "Kumasi: KNUST Area, Ahodwo, Asokwa", "Takoradi: Sekondi, European Town, Effia"]
        },
        {
          title: "Average Rental Costs (Monthly)",
          description: "Rent ranges across different areas in GHS",
          priority: "Medium",
          details: ["Studio: GHS 800-2,000", "1BR: GHS 1,200-3,500", "2BR: GHS 2,000-6,000", "3BR: GHS 3,000-12,000", "Prices vary by location and amenities"]
        },
        {
          title: "Housing Platforms & Contacts",
          description: "Websites and contacts for finding accommodation",
          priority: "Medium",
          details: ["Meqasa.com - +233 54 444 4444", "Tonaton.com", "Facebook: Accra Housing Groups", "Local agents: +233 24 XXX XXXX", "Always verify properties before payment"]
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
          phone: "+233 302 244 150",
          details: ["Required for all residents", "Covers basic medical care", "Premium hospitals may require additional payment", "Register within 3 months of arrival"]
        },
        {
          title: "Major Hospitals & Contacts",
          description: "Quality healthcare facilities with contact info",
          priority: "High",
          details: [
            "Korle-Bu Teaching Hospital (Accra) - +233 302 665 401", 
            "37 Military Hospital (Accra) - +233 302 777 777", 
            "Komfo Anokye Teaching Hospital (Kumasi) - +233 322 022 701", 
            "Trust Hospital (Multiple locations) - +233 302 815 050"
          ]
        },
        {
          title: "Emergency Numbers",
          description: "Important contacts for medical emergencies",
          priority: "Critical",
          details: ["Police: 191 or 18555", "Fire Service: 192", "Ambulance: 193", "Emergency (All): 999", "Save these numbers in your phone"]
        }
      ]
    },
    {
      id: "education",
      title: "Education",
      icon: GraduationCap,
      items: [
        {
          title: "International Schools & Contacts",
          description: "Schools for expat children with contact information",
          priority: "High",
          details: [
            "Ghana International School - +233 302 774 165", 
            "SOS Hermann Gmeiner - +233 302 542 930", 
            "American International School - +233 302 782 020", 
            "British International School - +233 302 817 080"
          ]
        },
        {
          title: "Universities & Contact Info",
          description: "Higher education institutions",
          priority: "Medium",
          details: [
            "University of Ghana (Legon) - +233 302 500 381", 
            "KNUST (Kumasi) - +233 322 060 319", 
            "University of Cape Coast - +233 332 132 480", 
            "Ashesi University - +233 302 610 330"
          ]
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
          description: "Requirements and contacts for banking services",
          priority: "High",
          details: ["Valid ID/Passport", "Proof of address", "Reference letter from employer/sponsor", "Minimum deposit varies by bank", "Processing time: 1-3 days"]
        },
        {
          title: "Major Banks & Contact Numbers",
          description: "Reliable banking institutions with phone numbers",
          priority: "Medium",
          details: [
            "GCB Bank - +233 302 664 910", 
            "Ecobank - +233 302 681 681", 
            "Standard Chartered - +233 302 610 000", 
            "Stanbic Bank - +233 302 423 423", 
            "Zenith Bank - +233 302 905 620"
          ]
        },
        {
          title: "Mobile Money Services",
          description: "Popular digital payment systems and setup",
          priority: "High",
          details: [
            "MTN MoMo - Dial *170# or visit MTN shop", 
            "AirtelTigo Money - Dial *110# or visit AirtelTigo shop", 
            "Vodafone Cash - Dial *110# or visit Vodafone shop", 
            "Zeepay - Download app or visit agent locations"
          ]
        }
      ]
    },
    {
      id: "transportation",
      title: "Transportation",
      icon: Car,
      items: [
        {
          title: "Getting Around & Contact Info",
          description: "Transportation options with contact details",
          priority: "High",
          details: [
            "Uber Ghana - Download app or +233 55 000 8237", 
            "Bolt Ghana - Download app", 
            "Trotro (shared minibus) - No booking needed", 
            "STC Intercity Buses - +233 302 229 515", 
            "VIP Transport - +233 302 221 314"
          ]
        },
        {
          title: "Driving License & DVLA Contact",
          description: "Requirements for driving in Ghana",
          priority: "Medium",
          phone: "+233 302 684 444",
          details: [
            "International driving permit valid for 1 year", 
            "Ghana DVLA license for long-term residents", 
            "Written and practical tests required", 
            "DVLA Office: Ring Road East, Accra", 
            "Processing fee: GHS 50-100"
          ]
        },
        {
          title: "Car Rental Services",
          description: "Reliable car rental companies with contacts",
          priority: "Medium",
          details: [
            "Europcar Ghana - +233 302 742 847", 
            "Avis Ghana - +233 302 776 171", 
            "Budget Car Rental - +233 24 444 5555", 
            "Local rentals available from GHS 80/day"
          ]
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
            we've got you covered with the most up-to-date information and contact details.
          </p>
        </div>

        {/* Quick Stats with actual phone numbers */}
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
                            {item.phone && (
                              <Button variant="ghost" size="sm" asChild>
                                <a href={`tel:${item.phone}`}>
                                  <Phone size={16} className="text-green-600" />
                                </a>
                              </Button>
                            )}
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
              Emergency Contacts - Save These Numbers!
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">191</div>
                <p className="text-sm">Police</p>
                <p className="text-xs text-gray-600">or 18555</p>
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
