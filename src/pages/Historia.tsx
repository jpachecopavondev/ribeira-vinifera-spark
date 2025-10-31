import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import bodegaImage from "@/assets/bodega-exterior.jpg";

const Historia = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative py-32 bg-burgundy-gradient text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
          </div>
          <div className="container text-center relative z-10 px-4">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <span className="text-sm font-medium tracking-wide">NUESTRA HISTORIA</span>
            </div>
            <h1 className="font-serif text-6xl md:text-7xl font-light mb-6">Un legado de tradición</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto font-light opacity-90 leading-relaxed">
              Más de un siglo cultivando las terrazas sagradas de la Ribeira Sacra
            </p>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-32 bg-background">
          <div className="container max-w-5xl px-4">
            <div className="mb-16">
              <img 
                src={bodegaImage} 
                alt="Bodega familiar" 
                className="w-full h-[500px] object-cover rounded-lg shadow-elegant"
              />
            </div>

            <div className="space-y-16">
              {/* 1920 */}
              <div className="relative pl-12 border-l-2 border-primary/20">
                <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-white" />
                </div>
                <div className="space-y-4">
                  <div className="inline-block px-4 py-1 bg-primary/10 rounded-full">
                    <span className="font-serif text-3xl font-semibold text-primary">1920</span>
                  </div>
                  <h3 className="font-serif text-3xl font-semibold">Los Orígenes</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed font-light">
                    Todo comenzó con Manuel Rodríguez, nuestro bisabuelo, quien compró 
                    las primeras terrazas de viñedos en las empinadas laderas sobre el río Sil. 
                    Con esfuerzo y dedicación, comenzó a cultivar las variedades autóctonas 
                    Mencía y Godello, siguiendo las técnicas tradicionales transmitidas de 
                    generación en generación.
                  </p>
                </div>
              </div>

              {/* 1960 */}
              <div className="relative pl-12 border-l-2 border-secondary/20">
                <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-white" />
                </div>
                <div className="space-y-4">
                  <div className="inline-block px-4 py-1 bg-secondary/10 rounded-full">
                    <span className="font-serif text-3xl font-semibold text-secondary">1960</span>
                  </div>
                  <h3 className="font-serif text-3xl font-semibold">Consolidación</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed font-light">
                    Su hijo, José Rodríguez, expandió los viñedos y construyó la bodega 
                    de piedra que aún hoy utilizamos. Fue pionero en aplicar nuevas técnicas 
                    de vinificación mientras respetaba la esencia tradicional del vino gallego. 
                    En esta época, nuestros vinos comenzaron a ganar reconocimiento en la región.
                  </p>
                </div>
              </div>

              {/* 1995 */}
              <div className="relative pl-12 border-l-2 border-primary/20">
                <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-white" />
                </div>
                <div className="space-y-4">
                  <div className="inline-block px-4 py-1 bg-primary/10 rounded-full">
                    <span className="font-serif text-3xl font-semibold text-primary">1995</span>
                  </div>
                  <h3 className="font-serif text-3xl font-semibold">Denominación de Origen</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed font-light">
                    Con la creación de la Denominación de Origen Ribeira Sacra, nuestra 
                    bodega fue una de las primeras en certificarse. María Rodríguez, 
                    tercera generación, modernizó las instalaciones e introdujo barricas 
                    de roble para la crianza, manteniendo siempre el respeto por la tierra 
                    y las tradiciones familiares.
                  </p>
                </div>
              </div>

              {/* Today */}
              <div className="relative pl-12 border-l-2 border-accent/20">
                <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-white" />
                </div>
                <div className="space-y-4">
                  <div className="inline-block px-4 py-1 bg-accent/10 rounded-full">
                    <span className="font-serif text-3xl font-semibold text-accent">Hoy</span>
                  </div>
                  <h3 className="font-serif text-3xl font-semibold">Presente y Futuro</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed font-light">
                    Hoy, la cuarta generación lidera la bodega con la misma pasión y 
                    compromiso. Hemos incorporado tecnología sostenible y prácticas 
                    ecológicas, pero cada botella sigue siendo un homenaje a nuestros 
                    antepasados. Cada vendimia manual en nuestras terrazas verticales, 
                    cada proceso de elaboración, lleva el sello de más de cien años de 
                    conocimiento y amor por el vino.
                  </p>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="mt-24 bg-gradient-to-br from-muted/50 to-muted/30 p-12 rounded-lg border border-border/50">
              <blockquote className="text-center">
                <p className="font-serif text-2xl md:text-3xl font-light italic text-foreground mb-6 leading-relaxed">
                  "El vino es memoria líquida. En cada copa vive el esfuerzo de generaciones, 
                  el carácter de la tierra gallega y la pasión de una familia dedicada al vino."
                </p>
                <footer className="text-muted-foreground font-medium tracking-wide">
                  — Familia Rodríguez
                </footer>
              </blockquote>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Historia;
