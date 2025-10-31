import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Wine, MapPin, Calendar } from "lucide-react";
import enoturismoImage from "@/assets/enoturismo.jpg";
import heroImage from "@/assets/hero-vineyards.jpg";

const Enoturismo = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative py-32 bg-earth-gradient overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
          </div>
          <div className="container text-center relative z-10 px-4">
            <div className="inline-block px-4 py-2 bg-secondary/10 backdrop-blur-sm rounded-full mb-6">
              <span className="text-sm font-medium text-secondary tracking-wide">EXPERIENCIAS</span>
            </div>
            <h1 className="font-serif text-6xl md:text-7xl font-light mb-6 text-foreground">Enoturismo</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto font-light text-muted-foreground leading-relaxed">
              Vive la esencia de la Ribeira Sacra en una experiencia única
            </p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-24 bg-background">
          <div className="container px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="font-serif text-5xl font-light leading-tight">
                  Descubre el alma<br />de nuestros viñedos
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
                  <p>
                    Te invitamos a vivir la magia de la Ribeira Sacra. Camina entre 
                    nuestras terrazas centenarias, conoce el proceso de elaboración del 
                    vino y degusta nuestras mejores añadas en un entorno único.
                  </p>
                  <p>
                    Cada experiencia incluye visita guiada por los viñedos, recorrido 
                    por la bodega histórica, cata comentada y maridaje con productos 
                    artesanales de la región gallega.
                  </p>
                </div>
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-lg px-8 py-6">
                  <Calendar className="h-5 w-5 mr-2" />
                  Reserva tu visita
                </Button>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-lg transform rotate-3 group-hover:rotate-6 transition-transform duration-500" />
                <img 
                  src={enoturismoImage} 
                  alt="Cata de vinos" 
                  className="relative w-full h-[600px] object-cover rounded-lg shadow-elegant"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Experiences Section */}
        <section className="py-24 bg-muted/30">
          <div className="container px-4">
            <div className="text-center mb-16">
              <h2 className="font-serif text-5xl font-light mb-6">Nuestras Experiencias</h2>
              <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
                Elige la experiencia que mejor se adapte a tus preferencias
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="hover-lift bg-card border-none shadow-elegant overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-primary to-primary/60" />
                <CardHeader className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Wine className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-serif text-2xl">Visita Básica</CardTitle>
                  <CardDescription className="text-base">Duración: 1.5 horas</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3 text-sm font-light">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Paseo por los viñedos
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Visita a la bodega centenaria
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Cata de 3 vinos
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Pan y queso artesanal
                    </li>
                  </ul>
                  <div className="pt-6 border-t">
                    <p className="text-3xl font-serif font-semibold text-primary mb-6">25€</p>
                    <Button className="w-full" variant="outline">Reservar</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift bg-card border-2 border-primary shadow-glow overflow-hidden relative">
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-accent text-accent-foreground">Recomendado</Badge>
                </div>
                <div className="h-2 bg-gradient-to-r from-primary via-accent to-primary" />
                <CardHeader className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-serif text-2xl">Experiencia Premium</CardTitle>
                  <CardDescription className="text-base">Duración: 3 horas</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3 text-sm font-light">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Todo lo de la Visita Básica
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Cata de 5 vinos selectos
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Maridaje completo
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Vendimia manual (temporada)
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Botella de regalo
                    </li>
                  </ul>
                  <div className="pt-6 border-t">
                    <p className="text-3xl font-serif font-semibold text-primary mb-6">55€</p>
                    <Button className="w-full">Reservar</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift bg-card border-none shadow-elegant overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-secondary to-secondary/60" />
                <CardHeader className="space-y-4">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                    <MapPin className="h-8 w-8 text-secondary" />
                  </div>
                  <CardTitle className="font-serif text-2xl">Ruta de Viñedos</CardTitle>
                  <CardDescription className="text-base">Duración: 4-5 horas</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3 text-sm font-light">
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      Senderismo por terrazas
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      Vistas del cañón del Sil
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      Visita a 2 bodegas
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      Almuerzo tradicional gallego
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      Cata de vinos locales
                    </li>
                  </ul>
                  <div className="pt-6 border-t">
                    <p className="text-3xl font-serif font-semibold text-secondary mb-6">75€</p>
                    <Button className="w-full" variant="secondary">Reservar</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Practical Info Section */}
        <section className="py-24 bg-background">
          <div className="container px-4">
            <div 
              className="rounded-lg overflow-hidden shadow-elegant relative h-[500px]"
              style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60 flex items-center justify-center">
                <div className="text-center text-white px-4 max-w-4xl">
                  <h3 className="font-serif text-4xl md:text-5xl font-light mb-12">
                    Información Práctica
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="space-y-4">
                      <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto">
                        <Clock className="h-8 w-8" />
                      </div>
                      <p className="font-semibold text-lg">Horarios</p>
                      <p className="text-sm font-light opacity-90">Sábado y Domingo<br />10:00 - 18:00</p>
                    </div>
                    <div className="space-y-4">
                      <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto">
                        <Users className="h-8 w-8" />
                      </div>
                      <p className="font-semibold text-lg">Grupos</p>
                      <p className="text-sm font-light opacity-90">Mínimo 2 personas<br />Máximo 12 personas</p>
                    </div>
                    <div className="space-y-4">
                      <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto">
                        <Calendar className="h-8 w-8" />
                      </div>
                      <p className="font-semibold text-lg">Reservas</p>
                      <p className="text-sm font-light opacity-90">Con 48 horas<br />de antelación</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Enoturismo;
