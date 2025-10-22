import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Wine, MapPin, Award, Clock } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import heroImage from "@/assets/hero-vineyards.jpg";
import bodegaImage from "@/assets/bodega-exterior.jpg";
import enoturismoImage from "@/assets/enoturismo.jpg";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
          </div>
          
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              El alma del vino nace en la Ribeira Sacra
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-light">
              Vinos de tradición familiar desde 1920
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/vinos">Descubre nuestros vinos</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20">
                <Link to="/enoturismo">Visita nuestra bodega</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Wine className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-serif font-semibold text-lg mb-2">Vinos Artesanales</h3>
                <p className="text-sm text-muted-foreground">
                  Mencía y Godello de viñedos en terrazas centenarias
                </p>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <MapPin className="h-12 w-12 mx-auto mb-4 text-secondary" />
                <h3 className="font-serif font-semibold text-lg mb-2">Ribeira Sacra</h3>
                <p className="text-sm text-muted-foreground">
                  Denominación de Origen en el corazón de Galicia
                </p>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-serif font-semibold text-lg mb-2">Premios</h3>
                <p className="text-sm text-muted-foreground">
                  Reconocidos en concursos nacionales e internacionales
                </p>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Clock className="h-12 w-12 mx-auto mb-4 text-secondary" />
                <h3 className="font-serif font-semibold text-lg mb-2">Tradición</h3>
                <p className="text-sm text-muted-foreground">
                  Más de 100 años de historia familiar vinícola
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* About Preview */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-4xl font-bold mb-6">
                  Nuestra Historia
                </h2>
                <p className="text-lg mb-4 leading-relaxed">
                  Desde 1920, nuestra familia cultiva las empinadas terrazas de viñedos 
                  que descienden hacia el río Sil. Generación tras generación, hemos 
                  preservado las técnicas tradicionales mientras abrazamos la innovación.
                </p>
                <p className="text-lg mb-6 leading-relaxed">
                  Cada botella cuenta la historia de nuestra tierra, del esfuerzo de 
                  nuestros antepasados y de la pasión que ponemos en cada vendimia.
                </p>
                <Button asChild variant="outline" size="lg">
                  <Link to="/historia">Conoce nuestra historia completa</Link>
                </Button>
              </div>
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src={bodegaImage} 
                  alt="Bodega familiar" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Enoturismo Preview */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src={enoturismoImage} 
                  alt="Experiencia enoturística" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="font-serif text-4xl font-bold mb-6">
                  Enoturismo
                </h2>
                <p className="text-lg mb-4 leading-relaxed">
                  Vive la experiencia completa del vino en nuestras instalaciones. 
                  Visitas guiadas por los viñedos, catas comentadas en nuestra 
                  bodega centenaria y maridajes con productos locales.
                </p>
                <p className="text-lg mb-6 leading-relaxed">
                  Descubre el paisaje único de la Ribeira Sacra mientras disfrutas 
                  de nuestros mejores vinos en un entorno incomparable.
                </p>
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
                  <Link to="/enoturismo">Reserva tu experiencia</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-wine-gradient text-primary-foreground">
          <div className="container text-center">
            <h2 className="font-serif text-4xl font-bold mb-6">
              Descubre el sabor de Galicia
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Cada botella es un viaje a las terrazas de la Ribeira Sacra. 
              Compra online y recibe nuestros vinos donde estés.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/vinos">Ver catálogo de vinos</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
