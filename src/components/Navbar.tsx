import { Link } from "react-router-dom";
import { Wine } from "lucide-react";
import { CartDrawer } from "./CartDrawer";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-serif text-xl font-bold text-primary">
          <Wine className="h-6 w-6" />
          Viñedos Ribeira Sacra
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
            Inicio
          </Link>
          <Link to="/historia" className="text-sm font-medium transition-colors hover:text-primary">
            Historia
          </Link>
          <Link to="/vinos" className="text-sm font-medium transition-colors hover:text-primary">
            Nuestros Vinos
          </Link>
          <Link to="/enoturismo" className="text-sm font-medium transition-colors hover:text-primary">
            Enoturismo
          </Link>
          <Link to="/contacto" className="text-sm font-medium transition-colors hover:text-primary">
            Contacto
          </Link>
        </div>

        <CartDrawer />
      </nav>
    </header>
  );
};
