import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Vinos from "./pages/Vinos";
import Historia from "./pages/Historia";
import Enoturismo from "./pages/Enoturismo";
import Contacto from "./pages/Contacto";
import ProductDetail from "./pages/ProductDetail";
import AdminDashboard from "./pages/admin/Dashboard";
import ProductForm from "./pages/admin/ProductForm";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/vinos" element={<Vinos />} />
            <Route path="/historia" element={<Historia />} />
            <Route path="/enoturismo" element={<Enoturismo />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/producto/:handle" element={<ProductDetail />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/nuevo" element={<ProductForm />} />
            <Route path="/admin/editar/:handle" element={<ProductForm />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
