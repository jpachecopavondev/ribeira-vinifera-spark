# Ribeira Vinifera - Tienda de Vinos Premium

Sitio web de comercio electrónico para la bodega Ribeira Vinifera, ubicada en la Ribeira Sacra. Una experiencia de compra elegante y sofisticada que refleja la calidad y herencia de los vinos de la región.

## 🚀 Características

- **Catálogo de Vinos**: Integración completa con Shopify Storefront API
- **Carrito de Compras**: Sistema de carrito persistente con Zustand
- **Checkout Seguro**: Proceso de pago a través de Shopify
- **Panel de Administración**: Dashboard para gestionar productos
- **Diseño Premium**: Estética luxury inspirada en marcas como Hermès y Louis Roederer
- **Completamente Responsive**: Optimizado para móvil, tablet y desktop
- **SEO Optimizado**: Meta tags, sitemap y structured data

## 📚 Documentación

- **[SHOPIFY_INTEGRATION.md](./SHOPIFY_INTEGRATION.md)**: Guía completa de integración con Shopify
- **[PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)**: Arquitectura y estructura del proyecto
- **[DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)**: Sistema de diseño, colores, tipografía y componentes

## 🛠 Tecnologías

- **React 18** - Framework UI
- **TypeScript** - Type safety
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Utility-first CSS
- **shadcn/ui** - Componentes UI de alta calidad
- **React Router v6** - Routing
- **Zustand** - State management
- **TanStack Query** - Server state management
- **Shopify Storefront API** - E-commerce backend

## 📋 Requisitos Previos

- Node.js 18+ y npm
- Cuenta de Shopify (con tienda creada)
- Shopify Storefront API token

## ⚙️ Instalación Local

### 1. Clonar el repositorio

```bash
git clone <YOUR_GIT_URL>
cd ribeira-vinifera
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar Shopify

Edita `src/lib/shopify.ts` con tus credenciales:

```typescript
const SHOPIFY_STORE_PERMANENT_DOMAIN = 'tu-tienda.myshopify.com';
const SHOPIFY_STOREFRONT_TOKEN = 'tu-token-aqui';
```

Para obtener estas credenciales, consulta [SHOPIFY_INTEGRATION.md](./SHOPIFY_INTEGRATION.md).

### 4. Iniciar servidor de desarrollo

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

## 📦 Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build para producción
npm run preview  # Preview de build de producción
npm run lint     # Linter (ESLint)
```

## 🏗 Estructura del Proyecto

```
ribeira-vinifera/
├── src/
│   ├── assets/          # Imágenes y recursos
│   ├── components/      # Componentes React
│   │   └── ui/         # Componentes shadcn/ui
│   ├── hooks/          # Custom hooks
│   ├── lib/            # Utilidades (Shopify API)
│   ├── pages/          # Páginas de la aplicación
│   │   └── admin/      # Panel de administración
│   ├── stores/         # Zustand stores (cart)
│   ├── App.tsx         # Router principal
│   ├── main.tsx        # Entry point
│   └── index.css       # Estilos globales y design tokens
├── public/             # Assets estáticos
├── SHOPIFY_INTEGRATION.md
├── PROJECT_STRUCTURE.md
├── DESIGN_SYSTEM.md
└── README.md
```

Ver [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) para más detalles.

## 🎨 Sistema de Diseño

El proyecto implementa un sistema de diseño sofisticado con:

- **Paleta de colores** elegante (burgundy, terracota, oro)
- **Tipografía** serif (Cormorant Garamond) y sans-serif (Inter)
- **Gradientes luxury** inspirados en viñedos y puestas de sol
- **Animaciones sutiles** y transiciones suaves
- **Componentes consistentes** basados en design tokens

Ver [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) para la guía completa.

## 🛒 Integración de Shopify

### Configuración Rápida

1. **Obtén tu Storefront API token** desde Shopify Admin
2. **Actualiza** `src/lib/shopify.ts` con tus credenciales
3. **Crea productos** en Shopify
4. **Verifica** que los productos aparecen en `/vinos`

### Flujo de Checkout

1. Usuario navega productos
2. Añade items al carrito (Zustand store)
3. Click en "Finalizar Compra"
4. Sistema crea checkout via Storefront API
5. Redirección a Shopify checkout
6. Usuario completa pago en Shopify

Ver [SHOPIFY_INTEGRATION.md](./SHOPIFY_INTEGRATION.md) para más información.

## 🚀 Deploy

### Opción 1: Lovable (Recomendado)

El proyecto está conectado a Lovable:

1. Abre [Lovable Project](https://lovable.dev/projects/c001f8bf-8a91-4bc9-8178-39b86ffb5bfc)
2. Click en "Publish"
3. Tu sitio se despliega automáticamente

### Opción 2: Netlify/Vercel

```bash
# Build
npm run build

# Output: /dist
```

Configuración:
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 18+

## 🔐 Seguridad

**Importante**: Este proyecto usa el Storefront API token directamente en el código del cliente. Este token es seguro para uso público ya que solo permite:
- Lectura de productos
- Creación de checkouts

Para **producción**, considera:
- Usar variables de entorno del hosting
- Implementar rate limiting
- Monitorear uso de API

## 📱 Rutas Principales

### Públicas
- `/` - Homepage
- `/vinos` - Catálogo de productos
- `/historia` - Historia de la bodega
- `/enoturismo` - Experiencias
- `/contacto` - Contacto
- `/producto/:handle` - Detalle de producto

### Admin (Sin autenticación por ahora)
- `/admin` - Dashboard
- `/admin/nuevo` - Crear producto
- `/admin/editar/:handle` - Editar producto

## 🤝 Trabajar con Otras IAs

Este proyecto está documentado para ser fácilmente transferible:

1. **Lee la documentación**:
   - SHOPIFY_INTEGRATION.md
   - PROJECT_STRUCTURE.md
   - DESIGN_SYSTEM.md

2. **Comparte el contexto**:
   - Copia el contenido de estos archivos
   - Proporciona a tu IA los archivos relevantes
   - Menciona que es un proyecto React + Shopify

3. **Áreas clave**:
   - `src/lib/shopify.ts` - Toda la lógica de Shopify
   - `src/stores/cartStore.ts` - Estado del carrito
   - `src/index.css` - Design tokens
   - `tailwind.config.ts` - Configuración de diseño

## 🐛 Troubleshooting

### Los productos no cargan
- Verifica el token de Shopify en `src/lib/shopify.ts`
- Asegúrate de que los productos están publicados en Shopify
- Revisa la consola del navegador para errores

### Checkout no funciona
- Verifica que el parámetro `channel=online_store` está en la URL
- Desactiva la protección por contraseña en Shopify
- Confirma que tienes un plan de pago activo en Shopify

### Errores de build
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 📞 Soporte

Para problemas con:
- **Shopify**: [Shopify Support](https://help.shopify.com)
- **Código**: Revisa los archivos de documentación
- **Deploy**: [Lovable Docs](https://docs.lovable.dev)

## 📄 Licencia

Este proyecto es privado y pertenece a Ribeira Vinifera.

## 🎯 Próximos Pasos

- [ ] Implementar autenticación en admin
- [ ] Añadir búsqueda y filtros avanzados
- [ ] Sistema de reservas para enoturismo
- [ ] Multi-idioma (ES/GL/EN)
- [ ] Newsletter
- [ ] Blog

## 🔗 Links Útiles

- [Lovable Project](https://lovable.dev/projects/c001f8bf-8a91-4bc9-8178-39b86ffb5bfc)
- [Shopify Storefront API Docs](https://shopify.dev/api/storefront)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com)

---

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/c001f8bf-8a91-4bc9-8178-39b86ffb5bfc) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/c001f8bf-8a91-4bc9-8178-39b86ffb5bfc) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
