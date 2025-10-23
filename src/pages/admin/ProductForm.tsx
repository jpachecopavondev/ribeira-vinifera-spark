import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/AdminSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Loader2, Upload } from "lucide-react";
import { toast } from "sonner";

const ProductForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    volume: "75cl",
    sku: "",
    type: "Vino Tinto",
    grape: "Mencía",
    body: "Ligero a Medio",
    alcohol: "12",
    oak: "Sin influencia",
    closure: "Corcho Natural",
    consumption: "Ahora - 2032",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Build description with wine characteristics
      const fullDescription = `${formData.description}\n\nCaracterísticas:\n• Tipo: ${formData.type}\n• Cuerpo: ${formData.body}\n• Variedad: ${formData.grape}\n• Volumen: ${formData.volume}\n• Graduación: ${formData.alcohol}% vol.\n• Roble: ${formData.oak}\n• Cierre: ${formData.closure}\n• Consumo: ${formData.consumption}`;

      const response = await fetch('/api/shopify/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: formData.title,
          body: fullDescription,
          product_type: formData.type,
          vendor: "Ribeira Vinífera",
          tags: `${formData.grape.toLowerCase()},${formData.type.toLowerCase()},ribeira sacra`,
          options: [{ name: "Tamaño", values: [formData.volume] }],
          variants: [{
            price: formData.price,
            sku: formData.sku || `${formData.title.toUpperCase().replace(/\s/g, '-')}-${formData.volume}`,
            option1: formData.volume,
            weight: 1.2,
          }],
        }),
      });

      if (!response.ok) throw new Error('Error creating product');

      toast.success("Vino creado exitosamente");
      navigate('/admin');
    } catch (error) {
      console.error('Error creating product:', error);
      toast.error("Error al crear el vino");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AdminSidebar />
        
        <div className="flex-1 flex flex-col">
          <header className="h-16 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex items-center px-6 gap-4 sticky top-0 z-10">
            <SidebarTrigger />
            <Button variant="ghost" size="sm" onClick={() => navigate('/admin')}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver
            </Button>
            <div className="flex-1">
              <h1 className="font-serif text-2xl font-bold">Añadir Nuevo Vino</h1>
            </div>
          </header>

          <main className="flex-1 p-6 bg-muted/30">
            <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Información Básica</CardTitle>
                  <CardDescription>Datos principales del vino</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Nombre del Vino *</Label>
                      <Input
                        id="title"
                        name="title"
                        placeholder="Mencía Crianza 2021"
                        value={formData.title}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="price">Precio (€) *</Label>
                      <Input
                        id="price"
                        name="price"
                        type="number"
                        step="0.01"
                        placeholder="18.00"
                        value={formData.price}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Descripción</Label>
                    <Textarea
                      id="description"
                      name="description"
                      placeholder="Vino tinto elaborado con uva Mencía en viñedos centenarios..."
                      rows={4}
                      value={formData.description}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="type">Tipo</Label>
                      <Input
                        id="type"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="grape">Variedad de Uva</Label>
                      <Input
                        id="grape"
                        name="grape"
                        value={formData.grape}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="volume">Volumen</Label>
                      <Input
                        id="volume"
                        name="volume"
                        value={formData.volume}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Características del Vino</CardTitle>
                  <CardDescription>Detalles técnicos y de cata</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="body">Cuerpo</Label>
                      <Input
                        id="body"
                        name="body"
                        placeholder="Ligero a Medio"
                        value={formData.body}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="alcohol">Graduación (%)</Label>
                      <Input
                        id="alcohol"
                        name="alcohol"
                        type="number"
                        step="0.1"
                        value={formData.alcohol}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="oak">Influencia de Roble</Label>
                      <Input
                        id="oak"
                        name="oak"
                        placeholder="Sin influencia"
                        value={formData.oak}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="closure">Tipo de Cierre</Label>
                      <Input
                        id="closure"
                        name="closure"
                        placeholder="Corcho Natural"
                        value={formData.closure}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="consumption">Periodo de Consumo</Label>
                      <Input
                        id="consumption"
                        name="consumption"
                        placeholder="Ahora - 2032"
                        value={formData.consumption}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="sku">SKU (opcional)</Label>
                      <Input
                        id="sku"
                        name="sku"
                        placeholder="MENCIA-CRIANZA-2021-75CL"
                        value={formData.sku}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Imagen del Producto</CardTitle>
                  <CardDescription>Sube una foto de la botella</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                    <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground">
                      Haz clic o arrastra una imagen aquí
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      Próximamente disponible
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-end gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate('/admin')}
                  disabled={loading}
                >
                  Cancelar
                </Button>
                <Button type="submit" disabled={loading}>
                  {loading && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
                  Crear Vino
                </Button>
              </div>
            </form>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default ProductForm;
