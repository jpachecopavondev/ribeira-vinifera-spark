import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, Wine, MapPin, Calendar } from "lucide-react";
import enoturismoImage from "@/assets/enoturismo.jpg";
import heroImage from "@/assets/hero-vineyards.jpg";

const Enoturismo = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <section className="py-20 bg-earth-gradient">
          <div className="container text-center">
            <h1 className="font-serif text-5xl font-bold mb-4 text-foreground">Enoturismo</h1>
            <p className="text-xl max-w-2xl mx-auto text-muted-foreground">
              Vive la experiencia completa del vino en la Ribeira Sacra
            </p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="font-serif text-3xl font-bold mb-6">
                  Descubre nuestros viñedos
                </h2>
                <p className="text-lg leading-relaxed mb-4">
                  Te invitamos a vivir la magia de la Ribeira Sacra. Camina entre 
                  nuestras terrazas centenarias, conoce el proceso de elaboración del 
                  vino y degusta nuestras mejores añadas en un entorno único.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Cada experiencia incluye visita guiada por los viñedos, recorrido 
                  por la bodega histórica, cata comentada y maridaje con productos 
                  artesanales de la región.
                </p>
                <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                  <Calendar className="h-5 w-5 mr-2" />
                  Reserva tu visita
                </Button>
              </div>
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src={enoturismoImage} 
                  alt="Cata de vinos" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Wine className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-serif">Visita Básica</CardTitle>
                  <CardDescription>Duración: 1.5 horas</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4 text-sm">
                    <li>• Paseo por los viñedos</li>
                    <li>• Visita a la bodega centenaria</li>
                    <li>• Cata de 3 vinos</li>
                    <li>• Pan y queso artesanal</li>
                  </ul>
                  <p className="text-2xl font-bold text-primary mb-4">25€/persona</p>
                  <Button className="w-full" variant="outline">Reservar</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-primary">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-serif">Experiencia Premium</CardTitle>
                  <CardDescription>Duración: 3 horas</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4 text-sm">
                    <li>• Todo lo de la Visita Básica</li>
                    <li>• Cata de 5 vinos selectos</li>
                    <li>• Maridaje completo</li>
                    <li>• Vendimia manual (temporada)</li>
                    <li>• Botella de regalo</li>
                  </ul>
                  <p className="text-2xl font-bold text-primary mb-4">55€/persona</p>
                  <Button className="w-full">Reservar</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="font-serif">Ruta de Viñedos</CardTitle>
                  <CardDescription>Duración: 4-5 horas</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4 text-sm">
                    <li>• Senderismo por terrazas</li>
                    <li>• Vistas del cañón del Sil</li>
                    <li>• Visita a 2 bodegas</li>
                    <li>• Almuerzo tradicional gallego</li>
                    <li>• Cata de vinos locales</li>
                  </ul>
                  <p className="text-2xl font-bold text-secondary mb-4">75€/persona</p>
                  <Button className="w-full" variant="secondary">Reservar</Button>
                </CardContent>
              </Card>
            </div>

            <div 
              className="rounded-lg overflow-hidden shadow-2xl relative h-96"
              style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <h3 className="font-serif text-3xl font-bold mb-4">
                    Información práctica
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                    <div>
                      <Clock className="h-8 w-8 mx-auto mb-2" />
                      <p className="font-semibold mb-1">Horarios</p>
                      <p className="text-sm">Sáb-Dom: 10:00-18:00</p>
                    </div>
                    <div>
                      <Users className="h-8 w-8 mx-auto mb-2" />
                      <p className="font-semibold mb-1">Grupos</p>
                      <p className="text-sm">Mínimo 2, máximo 12 personas</p>
                    </div>
                    <div>
                      <Calendar className="h-8 w-8 mx-auto mb-2" />
                      <p className="font-semibold mb-1">Reservas</p>
                      <p className="text-sm">Con 48h de antelación</p>
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
