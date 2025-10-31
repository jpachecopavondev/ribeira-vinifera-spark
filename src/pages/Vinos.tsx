import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Loader2, Wine } from "lucide-react";
import { getProducts, ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

const Vinos = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const addItem = useCartStore(state => state.addItem);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
        toast.error("Error al cargar los productos");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product: ShopifyProduct) => {
    const variant = product.node.variants.edges[0].node;
    const cartItem = {
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || []
    };
    
    addItem(cartItem);
    toast.success("Añadido al carrito", {
      description: product.node.title,
      position: "top-center",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative py-32 bg-wine-gradient text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
          </div>
          <div className="container text-center relative z-10 px-4">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <span className="text-sm font-medium tracking-wide">CATÁLOGO</span>
            </div>
            <h1 className="font-serif text-6xl md:text-7xl font-light mb-6">Nuestros Vinos</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto font-light opacity-90 leading-relaxed">
              Vinos artesanales de las terrazas centenarias de la Ribeira Sacra
            </p>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-24 bg-background">
          <div className="container px-4">
            {loading ? (
              <div className="flex items-center justify-center py-32">
                <Loader2 className="h-16 w-16 animate-spin text-primary" />
              </div>
            ) : products.length === 0 ? (
              <div className="text-center py-32 max-w-2xl mx-auto">
                <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
                  <Wine className="h-10 w-10 text-muted-foreground" />
                </div>
                <h2 className="font-serif text-4xl font-light mb-4">Catálogo en preparación</h2>
                <p className="text-lg text-muted-foreground font-light">
                  Estamos seleccionando nuestras mejores añadas. Vuelve pronto para descubrir nuestra colección.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                  <Card key={product.node.id} className="group overflow-hidden hover-lift bg-card border-none shadow-elegant">
                    <Link to={`/producto/${product.node.handle}`}>
                      <div className="aspect-[3/4] overflow-hidden bg-muted relative">
                        {product.node.images?.edges?.[0]?.node ? (
                          <>
                            <img
                              src={product.node.images.edges[0].node.url}
                              alt={product.node.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          </>
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-muted">
                            <Wine className="h-12 w-12 text-muted-foreground" />
                          </div>
                        )}
                      </div>
                    </Link>
                    
                    <CardHeader className="space-y-3">
                      <CardTitle className="font-serif text-2xl font-semibold">
                        <Link to={`/producto/${product.node.handle}`} className="hover:text-primary transition-colors">
                          {product.node.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="line-clamp-2 text-base font-light">
                        {product.node.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <p className="text-3xl font-serif font-semibold text-primary">
                        {parseFloat(product.node.priceRange.minVariantPrice.amount).toFixed(2)}€
                      </p>
                    </CardContent>
                    
                    <CardFooter>
                      <Button 
                        className="w-full group/btn" 
                        onClick={() => handleAddToCart(product)}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                        Añadir al carrito
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Vinos;
