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
import InformationBoard from "./pages/InformationBoard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import EventsAndPlaces from "./pages/EventsAndPlaces";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/cultural-training" element={<CulturalTraining />} />
            <Route path="/buddy-system" element={<BuddySystem />} />
            <Route path="/buddy-signup" element={<BuddySignup />} />
            <Route path="/information-board" element={<InformationBoard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/events-places" element={<EventsAndPlaces />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
