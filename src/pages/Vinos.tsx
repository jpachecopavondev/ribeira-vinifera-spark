import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Loader2 } from "lucide-react";
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

      <main className="flex-1">
        <section className="py-20 bg-wine-gradient text-primary-foreground">
          <div className="container text-center">
            <h1 className="font-serif text-5xl font-bold mb-4">Nuestros Vinos</h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Descubre nuestra selección de vinos Mencía y Godello, 
              cultivados en las terrazas de la Ribeira Sacra
            </p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container">
            {loading ? (
              <div className="flex items-center justify-center py-20">
                <Loader2 className="h-12 w-12 animate-spin text-primary" />
              </div>
            ) : products.length === 0 ? (
              <div className="text-center py-20">
                <h2 className="font-serif text-3xl font-bold mb-4">No hay productos disponibles</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Estamos preparando nuestro catálogo. Vuelve pronto.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                  <Card key={product.node.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                    <Link to={`/producto/${product.node.handle}`}>
                      <div className="aspect-[3/4] overflow-hidden bg-muted">
                        {product.node.images?.edges?.[0]?.node ? (
                          <img
                            src={product.node.images.edges[0].node.url}
                            alt={product.node.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-muted">
                            <span className="text-muted-foreground">Sin imagen</span>
                          </div>
                        )}
                      </div>
                    </Link>
                    
                    <CardHeader>
                      <CardTitle className="font-serif">
                        <Link to={`/producto/${product.node.handle}`} className="hover:text-primary transition-colors">
                          {product.node.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        {product.node.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="text-2xl font-bold text-primary">
                        {product.node.priceRange.minVariantPrice.currencyCode} {parseFloat(product.node.priceRange.minVariantPrice.amount).toFixed(2)}
                      </p>
                    </CardContent>
                    
                    <CardFooter>
                      <Button 
                        className="w-full" 
                        onClick={() => handleAddToCart(product)}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
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
