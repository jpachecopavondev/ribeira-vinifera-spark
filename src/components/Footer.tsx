import { Link } from "react-router-dom";
import { Wine, Facebook, Instagram, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Wine className="h-5 w-5 text-primary" />
              <span className="font-serif font-bold text-lg">Viñedos Ribeira Sacra</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Bodega familiar en el corazón de la Ribeira Sacra. 
              Tradición vinícola desde 1920.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/historia" className="text-muted-foreground hover:text-primary transition-colors">
                  Nuestra Historia
                </Link>
              </li>
              <li>
                <Link to="/vinos" className="text-muted-foreground hover:text-primary transition-colors">
                  Catálogo de Vinos
                </Link>
              </li>
              <li>
                <Link to="/enoturismo" className="text-muted-foreground hover:text-primary transition-colors">
                  Enoturismo
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-muted-foreground hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Calle del Viñedo, 12</li>
              <li>27400 Monforte de Lemos, Lugo</li>
              <li>Tel: +34 982 123 456</li>
              <li>info@ribeiravinedos.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p className="mb-2">
            © {new Date().getFullYear()} Viñedos Ribeira Sacra. Todos los derechos reservados.
          </p>
          <p className="italic">
            "Tecnología de ciudad, trato de pueblo"
          </p>
        </div>
      </div>
    </footer>
  );
};
