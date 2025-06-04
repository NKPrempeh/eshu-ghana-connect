
import { Link, useLocation } from "react-router-dom";
import { Home, BookOpen, Users, Info, Menu, LogIn, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { to: "/", label: "Home", icon: Home },
    { to: "/cultural-training", label: "Cultural Training", icon: BookOpen },
    { to: "/buddy-system", label: "Buddy System", icon: Users },
    { to: "/events-places", label: "Events & Places", icon: Calendar },
    { to: "/information-board", label: "Information Board", icon: Info },
  ];

  const NavLink = ({ to, label, icon: Icon, mobile = false }: any) => (
    <Link
      to={to}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 hover:bg-accent ${
        location.pathname === to ? "bg-primary text-primary-foreground" : ""
      } ${mobile ? "w-full" : ""}`}
    >
      <Icon size={20} />
      <span>{label}</span>
    </Link>
  );

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 ghana-gradient rounded-full"></div>
            <span className="text-xl font-bold text-primary">Eshu</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink key={item.to} {...item} />
            ))}
            <Button asChild variant="outline" size="sm" className="ml-4">
              <Link to="/login">
                <LogIn size={16} className="mr-2" />
                Login
              </Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu size={20} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-2 mt-8">
                {navItems.map((item) => (
                  <NavLink key={item.to} {...item} mobile />
                ))}
                <Link
                  to="/login"
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 hover:bg-accent w-full mt-4 border border-input"
                >
                  <LogIn size={20} />
                  <span>Login</span>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
