import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import bodegaImage from "@/assets/bodega-exterior.jpg";

const Historia = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <section className="py-20 bg-vineyard-gradient text-primary-foreground">
          <div className="container text-center">
            <h1 className="font-serif text-5xl font-bold mb-4">Nuestra Historia</h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Más de un siglo de tradición familiar en la Ribeira Sacra
            </p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container max-w-4xl">
            <div className="grid gap-12">
              <div>
                <img 
                  src={bodegaImage} 
                  alt="Bodega familiar" 
                  className="w-full rounded-lg shadow-2xl mb-8"
                />
              </div>

              <div className="space-y-6">
                <Card className="p-8 border-l-4 border-primary">
                  <h3 className="font-serif text-2xl font-bold mb-4 flex items-center gap-3">
                    <span className="text-primary text-3xl">1920</span>
                    Los Orígenes
                  </h3>
                  <p className="text-lg leading-relaxed">
                    Todo comenzó con Manuel Rodríguez, nuestro bisabuelo, quien compró 
                    las primeras terrazas de viñedos en las empinadas laderas sobre el río Sil. 
                    Con esfuerzo y dedicación, comenzó a cultivar las variedades autóctonas 
                    Mencía y Godello, siguiendo las técnicas tradicionales transmitidas de 
                    generación en generación.
                  </p>
                </Card>

                <Card className="p-8 border-l-4 border-secondary">
                  <h3 className="font-serif text-2xl font-bold mb-4 flex items-center gap-3">
                    <span className="text-secondary text-3xl">1960</span>
                    Consolidación
                  </h3>
                  <p className="text-lg leading-relaxed">
                    Su hijo, José Rodríguez, expandió los viñedos y construyó la bodega 
                    de piedra que aún hoy utilizamos. Fue pionero en aplicar nuevas técnicas 
                    de vinificación mientras respetaba la esencia tradicional del vino gallego. 
                    En esta época, nuestros vinos comenzaron a ganar reconocimiento en la región.
                  </p>
                </Card>

                <Card className="p-8 border-l-4 border-primary">
                  <h3 className="font-serif text-2xl font-bold mb-4 flex items-center gap-3">
                    <span className="text-primary text-3xl">1995</span>
                    Denominación de Origen
                  </h3>
                  <p className="text-lg leading-relaxed">
                    Con la creación de la Denominación de Origen Ribeira Sacra, nuestra 
                    bodega fue una de las primeras en certificarse. María Rodríguez, 
                    tercera generación, modernizó las instalaciones e introdujo barricas 
                    de roble para la crianza, manteniendo siempre el respeto por la tierra 
                    y las tradiciones familiares.
                  </p>
                </Card>

                <Card className="p-8 border-l-4 border-secondary">
                  <h3 className="font-serif text-2xl font-bold mb-4 flex items-center gap-3">
                    <span className="text-secondary text-3xl">Hoy</span>
                    Presente y Futuro
                  </h3>
                  <p className="text-lg leading-relaxed">
                    Hoy, la cuarta generación lidera la bodega con la misma pasión y 
                    compromiso. Hemos incorporado tecnología sostenible y prácticas 
                    ecológicas, pero cada botella sigue siendo un homenaje a nuestros 
                    antepasados. Cada vendimia manual en nuestras terrazas verticales, 
                    cada proceso de elaboración, lleva el sello de más de cien años de 
                    conocimiento y amor por el vino.
                  </p>
                </Card>
              </div>

              <div className="bg-muted/50 p-8 rounded-lg">
                <blockquote className="text-center italic text-xl font-serif">
                  "El vino es memoria líquida. En cada copa de nuestros vinos 
                  vive el esfuerzo de generaciones, el carácter de la tierra gallega 
                  y la pasión de una familia dedicada al vino."
                  <footer className="mt-4 text-muted-foreground not-italic text-base">
                    — Familia Rodríguez
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Historia;
