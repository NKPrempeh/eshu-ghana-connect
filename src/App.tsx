
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import CulturalTraining from "./pages/CulturalTraining";
import BuddySystem from "./pages/BuddySystem";
import BuddySignup from "./pages/BuddySignup";
import BuddyDashboard from "./pages/BuddyDashboard";
import InformationBoard from "./pages/InformationBoard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import EventsAndPlaces from "./pages/EventsAndPlaces";
import AuthCallback from "./pages/AuthCallback";
import NotFound from "./pages/NotFound";
import BuddyAvailability from "@/pages/BuddyAvailability";
import BuddyRequests from "@/pages/BuddyRequests";
import Profile from "./pages/Profile";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="min-h-screen bg-background">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/cultural-training" element={<CulturalTraining />} />
                <Route path="/buddy-system" element={<BuddySystem />} />
                <Route path="/buddy-signup" element={<BuddySignup />} />
                <Route path="/buddy-dashboard" element={<BuddyDashboard />} />
                <Route path="/information-board" element={<InformationBoard />} />
                <Route path="/information" element={<InformationBoard />} />
                <Route path="/events" element={<EventsAndPlaces />} />
                <Route path="/events-places" element={<EventsAndPlaces />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/auth/callback" element={<AuthCallback />} />
                <Route path="/buddy-availability" element={<BuddyAvailability />} />
                <Route path="/buddy-requests" element={<BuddyRequests />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
