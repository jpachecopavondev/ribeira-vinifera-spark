# Estructura del Proyecto - Ribeira Vinifera

## Visión General

Este proyecto es una tienda de vinos premium construida con React, TypeScript, Tailwind CSS y integración con Shopify. Está diseñado para la bodega Ribeira Vinifera de la Ribeira Sacra.

## Stack Tecnológico

- **Framework**: React 18.3.1
- **Build Tool**: Vite
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS + shadcn/ui
- **Routing**: React Router v6
- **State Management**: Zustand
- **API**: Shopify Storefront API (GraphQL)
- **Queries**: TanStack Query (React Query)

## Estructura de Carpetas

```
ribeira-vinifera/
├── public/
│   ├── robots.txt          # SEO - configuración para crawlers
│   └── favicon.ico         # Icono del sitio
│
├── src/
│   ├── assets/             # Imágenes y recursos estáticos
│   │   ├── hero-vineyards.jpg
│   │   ├── bodega-exterior.jpg
│   │   ├── enoturismo.jpg
│   │   └── wine-bottle.jpg
│   │
│   ├── components/         # Componentes React
│   │   ├── ui/            # Componentes shadcn/ui
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── sheet.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── select.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── table.tsx
│   │   │   └── ... (otros componentes UI)
│   │   │
│   │   ├── AdminSidebar.tsx   # Navegación del admin
│   │   ├── CartDrawer.tsx     # Carrito de compras lateral
│   │   ├── Footer.tsx         # Footer del sitio
│   │   └── Navbar.tsx         # Navegación principal
│   │
│   ├── hooks/              # Custom hooks
│   │   ├── use-mobile.tsx  # Hook para detectar móvil
│   │   └── use-toast.ts    # Hook para notificaciones
│   │
│   ├── lib/                # Utilidades y configuraciones
│   │   ├── shopify.ts      # API de Shopify
│   │   └── utils.ts        # Utilidades generales (cn)
│   │
│   ├── pages/              # Páginas de la aplicación
│   │   ├── admin/          # Panel de administración
│   │   │   ├── Dashboard.tsx    # Lista de productos
│   │   │   └── ProductForm.tsx  # Formulario de productos
│   │   │
│   │   ├── Index.tsx       # Página principal
│   │   ├── Vinos.tsx       # Catálogo de vinos
│   │   ├── Historia.tsx    # Historia de la bodega
│   │   ├── Enoturismo.tsx  # Experiencias enoturísticas
│   │   ├── Contacto.tsx    # Formulario de contacto
│   │   ├── ProductDetail.tsx # Detalle de producto
│   │   └── NotFound.tsx    # Página 404
│   │
│   ├── stores/             # Zustand stores
│   │   └── cartStore.ts    # Estado global del carrito
│   │
│   ├── App.tsx             # Componente raíz con rutas
│   ├── main.tsx            # Punto de entrada
│   ├── index.css           # Estilos globales y design tokens
│   └── vite-env.d.ts       # Tipos para Vite
│
├── index.html              # HTML base
├── tailwind.config.ts      # Configuración de Tailwind
├── vite.config.ts          # Configuración de Vite
├── tsconfig.json           # Configuración de TypeScript
└── package.json            # Dependencias y scripts
```

## Componentes Principales

### Layout Components

#### `Navbar.tsx`
- Navegación principal flotante
- Transparente en el top, sólida al hacer scroll
- Responsive con menú móvil
- Links a todas las secciones principales

#### `Footer.tsx`
- Información de contacto
- Links rápidos
- Redes sociales
- Horarios de visita

#### `AdminSidebar.tsx`
- Navegación del panel de administración
- Basado en shadcn/ui sidebar
- Colapsible en móvil

### Feature Components

#### `CartDrawer.tsx`
- Drawer lateral con el carrito
- Badge con contador de items
- Lista de productos agregados
- Controles de cantidad
- Botón de checkout integrado con Shopify
- Persistencia automática via Zustand

### UI Components (shadcn/ui)

Todos los componentes en `src/components/ui/` son de shadcn/ui:
- Sistema de diseño consistente
- Completamente personalizables
- Accesibles por defecto
- Tipos TypeScript incluidos

## Páginas

### Públicas

#### `/` - Index.tsx
- Hero full-screen con imagen de viñedos
- Sección de historia resumida
- Showcase de vinos destacados
- Call to action para enoturismo

#### `/vinos` - Vinos.tsx
- Catálogo completo de productos desde Shopify
- Grid responsive de productos
- Filtros (futuro)
- Integración con carrito

#### `/historia` - Historia.tsx
- Historia de la bodega
- Tradición familiar
- Viñedos en la Ribeira Sacra
- Filosofía de producción

#### `/enoturismo` - Enoturismo.tsx
- Experiencias disponibles
- Visitas guiadas
- Catas
- Formulario de reserva

#### `/contacto` - Contacto.tsx
- Formulario de contacto
- Información de ubicación
- Mapa (futuro)
- Horarios

#### `/producto/:handle` - ProductDetail.tsx
- Detalle completo del vino
- Galería de imágenes
- Descripción y notas de cata
- Selector de variantes
- Botón añadir al carrito
- Productos relacionados (futuro)

### Admin (Panel de Administración)

#### `/admin` - Dashboard.tsx
- Resumen de estadísticas
- Lista de todos los productos
- Botones de editar/eliminar
- Link para crear nuevo producto

#### `/admin/nuevo` - ProductForm.tsx
- Formulario para crear vinos
- Campos pre-configurados para vinos
- Validación de datos
- (Actualmente solo interfaz, integración futura)

#### `/admin/editar/:handle` - ProductForm.tsx
- Reutiliza el mismo componente
- Pre-carga datos del producto
- Actualización de productos

### Error Pages

#### `*` - NotFound.tsx
- Página 404 personalizada
- Link de regreso al inicio

## Estado Global (Zustand)

### `cartStore.ts`

```typescript
interface CartStore {
  items: CartItem[];           // Items en el carrito
  cartId: string | null;       // ID del carrito en Shopify
  checkoutUrl: string | null;  // URL de checkout
  isLoading: boolean;          // Estado de carga
  
  // Acciones
  addItem: (item: CartItem) => void;
  updateQuantity: (variantId: string, quantity: number) => void;
  removeItem: (variantId: string) => void;
  clearCart: () => void;
  createCheckout: () => Promise<void>;
}
```

**Características**:
- Persistencia automática en localStorage
- Sincronización con Shopify Storefront API
- Manejo de variantes de productos
- Cálculos automáticos de totales

## API Layer

### `src/lib/shopify.ts`

Todas las interacciones con Shopify pasan por este archivo:

```typescript
// Funciones principales
getProducts(first: number): Promise<ShopifyProduct[]>
getProductByHandle(handle: string): Promise<ShopifyProduct>
createStorefrontCheckout(items: CartItem[]): Promise<string>
storefrontApiRequest(query: string, variables: any): Promise<any>
```

**GraphQL Queries**:
- `STOREFRONT_QUERY` - Lista de productos
- `PRODUCT_BY_HANDLE_QUERY` - Producto individual
- `CART_CREATE_MUTATION` - Crear checkout

## Routing

### Configuración en `App.tsx`

```typescript
<Routes>
  {/* Públicas */}
  <Route path="/" element={<Index />} />
  <Route path="/vinos" element={<Vinos />} />
  <Route path="/historia" element={<Historia />} />
  <Route path="/enoturismo" element={<Enoturismo />} />
  <Route path="/contacto" element={<Contacto />} />
  <Route path="/producto/:handle" element={<ProductDetail />} />
  
  {/* Admin */}
  <Route path="/admin" element={<AdminDashboard />} />
  <Route path="/admin/nuevo" element={<ProductForm />} />
  <Route path="/admin/editar/:handle" element={<ProductForm />} />
  
  {/* 404 */}
  <Route path="*" element={<NotFound />} />
</Routes>
```

## Sistema de Diseño

Ver `DESIGN_SYSTEM.md` para detalles completos.

**Highlights**:
- Paleta de colores elegante con tokens CSS
- Tipografía serif/sans-serif combinada
- Gradients y sombras luxury
- Animaciones sutiles y refinadas
- Completamente responsive

## Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo en http://localhost:5173

# Build
npm run build        # Compila para producción en /dist

# Preview
npm run preview      # Preview de la build de producción

# Lint
npm run lint         # Ejecuta ESLint
```

## Variables de Entorno

Este proyecto no usa `.env` files. Las configuraciones están directamente en:
- `src/lib/shopify.ts` - Tokens y dominio de Shopify

**Para producción**, deberías:
1. Usar variables de entorno del hosting
2. O usar un backend que maneje los tokens de forma segura

## Deploy

### Lovable (Recomendado)
1. Haz clic en "Publish" en la interfaz de Lovable
2. Automáticamente se despliega en `*.lovable.app`
3. Conecta un dominio custom en Settings

### Netlify/Vercel
1. Conecta tu repositorio de GitHub
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Las variables de Shopify deben estar en el código o en variables de entorno

## Próximos Pasos / Features Futuras

- [ ] Implementar búsqueda de productos
- [ ] Filtros avanzados (tipo de vino, precio, añada)
- [ ] Sistema de reviews (sin fake reviews)
- [ ] Integración de mapa en contacto
- [ ] Newsletter
- [ ] Multi-idioma (Gallego/Español/Inglés)
- [ ] Blog de noticias de la bodega
- [ ] Panel de administración completo con Admin API
- [ ] Sistema de reservas para enoturismo
- [ ] Integración con sistemas de pago locales

## Mantenimiento

### Actualizar Shopify API Version
Revisar cada 12 meses en [Shopify Release Notes](https://shopify.dev/api/release-notes)

### Actualizar Dependencias
```bash
npm outdated           # Ver paquetes desactualizados
npm update            # Actualizar paquetes
```

### Regenerar shadcn/ui Components
```bash
npx shadcn-ui@latest add [component-name]
```

## Soporte y Documentación

- **Shopify**: [shopify.dev](https://shopify.dev)
- **React**: [react.dev](https://react.dev)
- **Tailwind**: [tailwindcss.com](https://tailwindcss.com)
- **shadcn/ui**: [ui.shadcn.com](https://ui.shadcn.com)
- **Zustand**: [zustand-demo.pmnd.rs](https://zustand-demo.pmnd.rs)
