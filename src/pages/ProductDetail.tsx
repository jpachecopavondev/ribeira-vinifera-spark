import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, ArrowLeft, Loader2 } from "lucide-react";
import { getProductByHandle } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

const ProductDetail = () => {
  const { handle } = useParams<{ handle: string }>();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState<any>(null);
  const addItem = useCartStore(state => state.addItem);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!handle) return;
      
      try {
        const data = await getProductByHandle(handle);
        setProduct(data);
        setSelectedVariant(data.variants.edges[0].node);
      } catch (error) {
        console.error('Error fetching product:', error);
        toast.error("Error al cargar el producto");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [handle]);

  const handleAddToCart = () => {
    if (!product || !selectedVariant) return;

    const cartItem = {
      product: { node: product },
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity: 1,
      selectedOptions: selectedVariant.selectedOptions || []
    };
    
    addItem(cartItem);
    toast.success("Añadido al carrito", {
      description: product.title,
      position: "top-center",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
        </div>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold mb-4">Producto no encontrado</h2>
            <Button asChild>
              <Link to="/vinos">Volver al catálogo</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-12">
        <div className="container">
          <Button asChild variant="ghost" className="mb-8">
            <Link to="/vinos">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al catálogo
            </Link>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="aspect-[3/4] rounded-lg overflow-hidden bg-muted">
                {product.images?.edges?.[0]?.node ? (
                  <img
                    src={product.images.edges[0].node.url}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-muted-foreground">Sin imagen</span>
                  </div>
                )}
              </div>

              {product.images?.edges?.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                  {product.images.edges.slice(1, 5).map((image: any, idx: number) => (
                    <div key={idx} className="aspect-square rounded-lg overflow-hidden bg-muted">
                      <img
                        src={image.node.url}
                        alt={`${product.title} ${idx + 2}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="font-serif text-4xl font-bold mb-2">{product.title}</h1>
                <Badge variant="secondary" className="mb-4">
                  Ribeira Sacra D.O.
                </Badge>
              </div>

              <div className="text-3xl font-bold text-primary">
                {selectedVariant.price.currencyCode} {parseFloat(selectedVariant.price.amount).toFixed(2)}
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  {product.description || "Vino elaborado artesanalmente en nuestra bodega familiar de la Ribeira Sacra, siguiendo técnicas tradicionales transmitidas de generación en generación."}
                </p>
              </div>

              {product.variants?.edges?.length > 1 && (
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Variante
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.variants.edges.map((variant: any) => (
                      <Button
                        key={variant.node.id}
                        variant={selectedVariant.id === variant.node.id ? "default" : "outline"}
                        onClick={() => setSelectedVariant(variant.node)}
                      >
                        {variant.node.title}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              <Button 
                size="lg" 
                className="w-full"
                onClick={handleAddToCart}
                disabled={!selectedVariant.availableForSale}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                {selectedVariant.availableForSale ? "Añadir al carrito" : "No disponible"}
              </Button>

              <div className="border-t pt-6 space-y-6">
                <h3 className="font-serif text-2xl font-semibold">Características del Vino</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex flex-col items-center p-4 rounded-lg bg-gradient-subtle border border-border/50 hover:border-primary/30 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <span className="text-2xl">🍷</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">Tipo</p>
                    <p className="font-semibold text-center">Vino Tinto</p>
                  </div>
                  
                  <div className="flex flex-col items-center p-4 rounded-lg bg-gradient-subtle border border-border/50 hover:border-primary/30 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <span className="text-2xl">💪</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">Cuerpo</p>
                    <p className="font-semibold text-center text-sm">Ligero a Medio</p>
                  </div>
                  
                  <div className="flex flex-col items-center p-4 rounded-lg bg-gradient-subtle border border-border/50 hover:border-primary/30 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <span className="text-2xl">🍇</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">Variedad</p>
                    <p className="font-semibold text-center">Mencía</p>
                  </div>
                  
                  <div className="flex flex-col items-center p-4 rounded-lg bg-gradient-subtle border border-border/50 hover:border-primary/30 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <span className="text-2xl">📏</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">Volumen</p>
                    <p className="font-semibold text-center">75cl</p>
                  </div>
                  
                  <div className="flex flex-col items-center p-4 rounded-lg bg-gradient-subtle border border-border/50 hover:border-primary/30 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <span className="text-2xl">📅</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">Consumo</p>
                    <p className="font-semibold text-center text-sm">Ahora - 2032</p>
                  </div>
                  
                  <div className="flex flex-col items-center p-4 rounded-lg bg-gradient-subtle border border-border/50 hover:border-primary/30 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <span className="text-2xl">🌡️</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">Alcohol</p>
                    <p className="font-semibold text-center">12% vol.</p>
                  </div>
                  
                  <div className="flex flex-col items-center p-4 rounded-lg bg-gradient-subtle border border-border/50 hover:border-primary/30 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <span className="text-2xl">🪵</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">Roble</p>
                    <p className="font-semibold text-center text-sm">Sin influencia</p>
                  </div>
                  
                  <div className="flex flex-col items-center p-4 rounded-lg bg-gradient-subtle border border-border/50 hover:border-primary/30 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <span className="text-2xl">🍾</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">Cierre</p>
                    <p className="font-semibold text-center text-sm">Corcho Natural</p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6 space-y-6">
                <h3 className="font-serif text-2xl font-semibold">Maridaje Recomendado</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-primary/5 to-secondary/5 p-6 border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🥩</div>
                    <h4 className="font-semibold mb-1">Carnes Rojas</h4>
                    <p className="text-xs text-muted-foreground">Chuletón, cordero asado</p>
                  </div>
                  
                  <div className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-primary/5 to-secondary/5 p-6 border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🧀</div>
                    <h4 className="font-semibold mb-1">Quesos</h4>
                    <p className="text-xs text-muted-foreground">Tetilla, San Simón da Costa</p>
                  </div>
                  
                  <div className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-primary/5 to-secondary/5 p-6 border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🍝</div>
                    <h4 className="font-semibold mb-1">Pasta</h4>
                    <p className="text-xs text-muted-foreground">Ragú, pasta al horno</p>
                  </div>
                  
                  <div className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-primary/5 to-secondary/5 p-6 border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🍄</div>
                    <h4 className="font-semibold mb-1">Guisos</h4>
                    <p className="text-xs text-muted-foreground">Estofados, cocidos</p>
                  </div>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-4 border border-border/50">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">Temperatura de servicio:</span> 16-18°C. 
                    Se recomienda abrir la botella 30 minutos antes de servir para que el vino respire y exprese todo su potencial aromático.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
