import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Wine, MapPin, Award, Clock, ArrowRight } from "lucide-react";
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
        {/* Hero Section - Full Screen with Parallax */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center animate-slow-zoom"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
          </div>
          
          <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
            <h1 className="font-serif text-6xl md:text-8xl font-light mb-8 animate-fade-in-up tracking-tight">
              El alma del vino nace<br />en la Ribeira Sacra
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-light tracking-wide opacity-90 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Tradición familiar desde 1920
            </p>
            <div className="flex flex-wrap gap-6 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 shadow-glow">
                <Link to="/vinos">
                  Descubre nuestros vinos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6"
              >
                <Link to="/enoturismo">Visita la bodega</Link>
              </Button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-white/50 rounded-full" />
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-32 bg-background">
          <div className="container max-w-4xl mx-auto text-center px-4">
            <h2 className="font-serif text-5xl md:text-6xl font-light mb-8 text-foreground">
              Donde la naturaleza y el tiempo<br />crean obras maestras
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
              En las terrazas heroicas de la Ribeira Sacra, donde el río Sil esculpe el paisaje,
              cultivamos viñedos centenarios con la misma devoción que nuestros antepasados.
              Cada botella es un tributo al terroir sagrado de Galicia.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-muted/30">
          <div className="container px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="p-8 text-center hover-lift bg-card border-none shadow-elegant">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-primary/10">
                  <Wine className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-xl mb-3">Vinos Artesanales</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  Mencía y Godello de viñedos en terrazas centenarias
                </p>
              </Card>
              
              <Card className="p-8 text-center hover-lift bg-card border-none shadow-elegant">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-secondary/10">
                  <MapPin className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-serif font-semibold text-xl mb-3">Ribeira Sacra</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  Denominación de Origen en el corazón de Galicia
                </p>
              </Card>
              
              <Card className="p-8 text-center hover-lift bg-card border-none shadow-elegant">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-accent/10">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-serif font-semibold text-xl mb-3">Premios</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  Reconocidos en concursos nacionales e internacionales
                </p>
              </Card>
              
              <Card className="p-8 text-center hover-lift bg-card border-none shadow-elegant">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-primary/10">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-xl mb-3">Tradición</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  Más de 100 años de historia familiar vinícola
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Heritage Section */}
        <section className="py-32 bg-background relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-wine-gradient" />
          </div>
          
          <div className="container px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg transform rotate-3 group-hover:rotate-6 transition-transform duration-500" />
                  <img 
                    src={bodegaImage} 
                    alt="Bodega familiar" 
                    className="relative w-full h-[600px] object-cover rounded-lg shadow-elegant"
                  />
                </div>
              </div>
              
              <div className="order-1 lg:order-2 space-y-8">
                <div className="inline-block px-4 py-2 bg-accent/10 rounded-full">
                  <span className="text-sm font-medium text-accent tracking-wide">NUESTRA HISTORIA</span>
                </div>
                
                <h2 className="font-serif text-5xl md:text-6xl font-light leading-tight">
                  Un legado que<br />perdura en el tiempo
                </h2>
                
                <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
                  <p>
                    Desde 1920, nuestra familia cultiva las empinadas terrazas de viñedos 
                    que descienden hacia el río Sil. Generación tras generación, hemos 
                    preservado las técnicas tradicionales mientras abrazamos la innovación.
                  </p>
                  <p>
                    Cada botella cuenta la historia de nuestra tierra, del esfuerzo de 
                    nuestros antepasados y de la pasión que ponemos en cada vendimia.
                    Un viaje sensorial que conecta el pasado con el presente.
                  </p>
                </div>
                
                <Button asChild variant="outline" size="lg" className="group">
                  <Link to="/historia">
                    Descubre nuestra historia
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Enoturismo Section */}
        <section className="py-32 bg-muted/30 relative overflow-hidden">
          <div className="container px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full">
                  <span className="text-sm font-medium text-secondary tracking-wide">EXPERIENCIAS</span>
                </div>
                
                <h2 className="font-serif text-5xl md:text-6xl font-light leading-tight">
                  Vive la esencia<br />de la Ribeira Sacra
                </h2>
                
                <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
                  <p>
                    Sumérgete en la belleza única de nuestros viñedos. Visitas guiadas 
                    por las terrazas centenarias, catas comentadas en nuestra bodega 
                    histórica y maridajes con productos locales de la tierra gallega.
                  </p>
                  <p>
                    Descubre el paisaje sagrado donde nacen nuestros vinos mientras 
                    disfrutas de una experiencia sensorial incomparable. Un viaje 
                    a través del tiempo, la tradición y el sabor.
                  </p>
                </div>
                
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 group">
                  <Link to="/enoturismo">
                    Reserva tu experiencia
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-lg transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500" />
                <img 
                  src={enoturismoImage} 
                  alt="Experiencia enoturística" 
                  className="relative w-full h-[600px] object-cover rounded-lg shadow-elegant"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-wine-gradient text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
          </div>
          
          <div className="container text-center relative z-10 px-4">
            <h2 className="font-serif text-5xl md:text-6xl font-light mb-8 max-w-3xl mx-auto leading-tight">
              Descubre el sabor<br />auténtico de Galicia
            </h2>
            <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-light leading-relaxed opacity-90">
              Cada botella es un viaje a las terrazas sagradas de la Ribeira Sacra. 
              Explora nuestro catálogo y lleva la tradición a tu mesa.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6 shadow-glow">
              <Link to="/vinos">
                Ver catálogo de vinos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
