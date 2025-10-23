import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/AdminSidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, Edit, Trash2, Plus, Wine } from "lucide-react";
import { getProducts, type ShopifyProduct } from "@/lib/shopify";
import { toast } from "sonner";

const Dashboard = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await getProducts(50);
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
      toast.error("Error al cargar productos");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (productId: string) => {
    if (!confirm("¿Estás seguro de eliminar este producto?")) return;
    
    try {
      // Extract numeric ID from GraphQL ID
      const numericId = productId.split('/').pop();
      await fetch(`/api/shopify/products/${numericId}`, {
        method: 'DELETE',
      });
      toast.success("Producto eliminado");
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
      toast.error("Error al eliminar producto");
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AdminSidebar />
        
        <div className="flex-1 flex flex-col">
          <header className="h-16 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex items-center px-6 gap-4 sticky top-0 z-10">
            <SidebarTrigger />
            <div className="flex-1">
              <h1 className="font-serif text-2xl font-bold">Panel de Administración</h1>
            </div>
            <Button asChild>
              <Link to="/admin/nuevo">
                <Plus className="h-4 w-4 mr-2" />
                Añadir Vino
              </Link>
            </Button>
          </header>

          <main className="flex-1 p-6 bg-muted/30">
            <div className="max-w-7xl mx-auto space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardDescription>Total Productos</CardDescription>
                    <CardTitle className="text-3xl">{products.length}</CardTitle>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardDescription>Categorías</CardDescription>
                    <CardTitle className="text-3xl">4</CardTitle>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardDescription>En Stock</CardDescription>
                    <CardTitle className="text-3xl">{products.length}</CardTitle>
                  </CardHeader>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wine className="h-5 w-5" />
                    Catálogo de Vinos
                  </CardTitle>
                  <CardDescription>
                    Gestiona tu catálogo de productos
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {loading ? (
                    <div className="flex items-center justify-center py-12">
                      <Loader2 className="h-8 w-8 animate-spin text-primary" />
                    </div>
                  ) : products.length === 0 ? (
                    <div className="text-center py-12">
                      <Wine className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground mb-4">No hay productos todavía</p>
                      <Button asChild>
                        <Link to="/admin/nuevo">
                          <Plus className="h-4 w-4 mr-2" />
                          Crear primer vino
                        </Link>
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {products.map((product) => (
                        <div
                          key={product.node.id}
                          className="flex items-center gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                        >
                          <div className="w-20 h-20 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                            {product.node.images?.edges?.[0]?.node ? (
                              <img
                                src={product.node.images.edges[0].node.url}
                                alt={product.node.title}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                <Wine className="h-8 w-8 text-muted-foreground" />
                              </div>
                            )}
                          </div>

                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold truncate">{product.node.title}</h3>
                            <p className="text-sm text-muted-foreground truncate">
                              {product.node.description || "Sin descripción"}
                            </p>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant="secondary">
                                {product.node.priceRange.minVariantPrice.currencyCode}{" "}
                                {parseFloat(product.node.priceRange.minVariantPrice.amount).toFixed(2)}
                              </Badge>
                              <Badge variant="outline">
                                {product.node.variants.edges.length} variante(s)
                              </Badge>
                            </div>
                          </div>

                          <div className="flex gap-2 flex-shrink-0">
                            <Button variant="outline" size="sm" asChild>
                              <Link to={`/admin/editar/${product.node.handle}`}>
                                <Edit className="h-4 w-4" />
                              </Link>
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleDelete(product.node.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
