import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Wine, Menu, X } from "lucide-react";
import { CartDrawer } from "./CartDrawer";
import { Button } from "./ui/button";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-elegant border-b border-border" 
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className={`flex items-center gap-2 font-serif text-xl font-semibold transition-colors duration-300 ${
              isScrolled ? "text-primary" : "text-white"
            }`}
          >
            <Wine className="h-6 w-6" />
            <span className="hidden sm:inline">Viñedos Ribeira Sacra</span>
            <span className="sm:hidden">VRS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link 
              to="/" 
              className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-accent ${
                isScrolled ? "text-foreground" : "text-white/90"
              }`}
            >
              Inicio
            </Link>
            <Link 
              to="/historia" 
              className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-accent ${
                isScrolled ? "text-foreground" : "text-white/90"
              }`}
            >
              Historia
            </Link>
            <Link 
              to="/vinos" 
              className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-accent ${
                isScrolled ? "text-foreground" : "text-white/90"
              }`}
            >
              Nuestros Vinos
            </Link>
            <Link 
              to="/enoturismo" 
              className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-accent ${
                isScrolled ? "text-foreground" : "text-white/90"
              }`}
            >
              Enoturismo
            </Link>
            <Link 
              to="/contacto" 
              className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-accent ${
                isScrolled ? "text-foreground" : "text-white/90"
              }`}
            >
              Contacto
            </Link>
          </div>

          {/* Right side - Cart & Mobile Menu */}
          <div className="flex items-center gap-4">
            <CartDrawer />
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className={`h-5 w-5 ${isScrolled ? "text-foreground" : "text-white"}`} />
              ) : (
                <Menu className={`h-5 w-5 ${isScrolled ? "text-foreground" : "text-white"}`} />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-border/50 bg-background/95 backdrop-blur-md">
            <div className="flex flex-col gap-4">
              <Link 
                to="/" 
                className="text-sm font-medium tracking-wide text-foreground hover:text-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link 
                to="/historia" 
                className="text-sm font-medium tracking-wide text-foreground hover:text-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Historia
              </Link>
              <Link 
                to="/vinos" 
                className="text-sm font-medium tracking-wide text-foreground hover:text-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Nuestros Vinos
              </Link>
              <Link 
                to="/enoturismo" 
                className="text-sm font-medium tracking-wide text-foreground hover:text-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Enoturismo
              </Link>
              <Link 
                to="/contacto" 
                className="text-sm font-medium tracking-wide text-foreground hover:text-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contacto
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
