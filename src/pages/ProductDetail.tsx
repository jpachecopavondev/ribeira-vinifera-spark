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

              <div className="border-t pt-6 space-y-4">
                <h3 className="font-serif text-xl font-semibold">Características</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Tipo</p>
                    <p className="font-medium">Vino tinto</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Denominación</p>
                    <p className="font-medium">Ribeira Sacra</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Variedad</p>
                    <p className="font-medium">Mencía</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Graduación</p>
                    <p className="font-medium">13.5% vol.</p>
                  </div>
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
