import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de envío del formulario
    toast.success("Mensaje enviado", {
      description: "Te responderemos lo antes posible.",
    });
    setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h1 className="font-serif text-5xl font-bold mb-4">Contacto</h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Estamos aquí para ayudarte. Contáctanos para cualquier consulta
            </p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="font-serif text-3xl font-bold mb-6">
                  Envíanos un mensaje
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="nombre">Nombre completo</Label>
                    <Input
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="telefono">Teléfono (opcional)</Label>
                    <Input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="mensaje">Mensaje</Label>
                    <Textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="mt-2"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Enviar mensaje
                  </Button>
                </form>
              </div>

              <div className="space-y-6">
                <h2 className="font-serif text-3xl font-bold mb-6">
                  Información de contacto
                </h2>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-6 w-6 text-primary" />
                      <CardTitle>Dirección</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p>Calle del Viñedo, 12</p>
                    <p>27400 Monforte de Lemos</p>
                    <p>Lugo, Galicia</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Phone className="h-6 w-6 text-primary" />
                      <CardTitle>Teléfono</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p>+34 982 123 456</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Lun-Vie: 9:00-18:00
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Mail className="h-6 w-6 text-primary" />
                      <CardTitle>Email</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p>info@ribeiravinedos.com</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Respuesta en 24-48h
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Clock className="h-6 w-6 text-primary" />
                      <CardTitle>Horario de visitas</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p>Sábados y Domingos</p>
                    <p>10:00 - 18:00</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Reserva previa obligatoria
                    </p>
                  </CardContent>
                </Card>

                <div className="bg-muted/50 p-6 rounded-lg">
                  <h3 className="font-semibold mb-3">Colaboradores y distribuidores</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    ¿Interesado en distribuir nuestros vinos? Contáctanos para conocer 
                    nuestras condiciones comerciales.
                  </p>
                  <Button variant="outline" className="w-full">
                    Información para distribuidores
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-12 rounded-lg overflow-hidden shadow-lg h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11705.819289505447!2d-7.5148!3d42.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd31cfcae9e1e1a7%3A0x40f31e0f4b1f940!2s27400%20Monforte%20de%20Lemos%2C%20Lugo!5e0!3m2!1ses!2ses!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contacto;
