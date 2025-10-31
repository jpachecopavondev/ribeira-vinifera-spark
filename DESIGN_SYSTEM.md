# Sistema de Diseño - Ribeira Vinifera

## Filosofía de Diseño

**Elegancia Atemporal Inspirada en el Lujo**

El diseño de Ribeira Vinifera evoca la sofisticación de marcas de lujo como Hermès, Louis Roederer y Auberge Resorts. La estética combina:

- **Minimalismo Sofisticado**: Espacios generosos, elementos esenciales
- **Herencia y Artesanía**: Respeto por la tradición y el terroir
- **Exclusividad Discreta**: Lujo sin ostentación
- **Conexión con la Naturaleza**: Inspiración en los paisajes de Ribeira Sacra

## Paleta de Colores

### Colores Principales

Todos los colores están definidos en formato HSL en `src/index.css`:

```css
:root {
  /* Neutrals - Base */
  --background: 32 20% 95%;      /* Beige claro cálido */
  --foreground: 25 20% 15%;      /* Marrón oscuro */
  
  /* Card - Elevación */
  --card: 30 25% 98%;
  --card-foreground: 25 20% 15%;
  
  /* Primary - Vino Tinto Profundo */
  --primary: 355 65% 35%;        /* Burgundy rico */
  --primary-foreground: 30 25% 98%;
  
  /* Secondary - Terracota */
  --secondary: 15 45% 65%;       /* Tierra cálida */
  --secondary-foreground: 25 20% 15%;
  
  /* Accent - Oro Sutil */
  --accent: 40 70% 65%;          /* Dorado suave */
  --accent-foreground: 25 20% 15%;
  
  /* Muted - Neutrales Suaves */
  --muted: 30 15% 85%;
  --muted-foreground: 25 15% 35%;
  
  /* Destructive - Vino Oscuro */
  --destructive: 355 80% 30%;
  --destructive-foreground: 30 25% 98%;
  
  /* Border & Input */
  --border: 30 20% 80%;
  --input: 30 20% 80%;
  --ring: 355 65% 35%;
  
  /* Radius - Bordes suaves */
  --radius: 0.75rem;
}
```

### Dark Mode

```css
.dark {
  --background: 25 25% 8%;       /* Negro cálido */
  --foreground: 30 20% 95%;
  
  --card: 25 20% 12%;
  --card-foreground: 30 20% 95%;
  
  --primary: 355 70% 45%;
  --primary-foreground: 30 25% 98%;
  
  --secondary: 15 40% 25%;
  --secondary-foreground: 30 25% 98%;
  
  --accent: 40 65% 55%;
  --accent-foreground: 25 25% 8%;
  
  --muted: 30 15% 20%;
  --muted-foreground: 30 15% 65%;
  
  --destructive: 0 70% 40%;
  --destructive-foreground: 30 25% 98%;
  
  --border: 30 15% 25%;
  --input: 30 15% 25%;
  --ring: 355 70% 45%;
}
```

### Gradientes Luxury

```css
/* Gradientes Premium */
--gradient-primary: linear-gradient(135deg, 
  hsl(355, 65%, 35%) 0%, 
  hsl(340, 55%, 25%) 100%
);

--gradient-gold: linear-gradient(135deg, 
  hsl(40, 70%, 65%) 0%, 
  hsl(30, 60%, 55%) 100%
);

--gradient-sunset: linear-gradient(180deg, 
  hsl(15, 45%, 65%) 0%, 
  hsl(355, 65%, 35%) 100%
);

--gradient-subtle: linear-gradient(180deg, 
  hsl(32, 20%, 95%) 0%, 
  hsl(30, 25%, 98%) 100%
);
```

### Uso de Colores

#### ❌ INCORRECTO
```tsx
<div className="text-white bg-black">
<Button className="bg-red-500 text-white">
```

#### ✅ CORRECTO
```tsx
<div className="text-foreground bg-background">
<Button variant="default"> {/* Usa los tokens del design system */}
```

## Tipografía

### Fonts

**Serif (Headlines)**: Cormorant Garamond
- Elegante, refinada, con carácter
- Usada para títulos principales, hero text, nombres de vinos

**Sans-serif (Body)**: Inter (font del sistema)
- Clara, moderna, legible
- Usada para cuerpo de texto, descripciones, UI

### Configuración en Tailwind

```typescript
// tailwind.config.ts
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  serif: ['Cormorant Garamond', 'Georgia', 'serif'],
}
```

### Escala Tipográfica

```css
/* Títulos */
.text-5xl  /* Hero principal - 3rem */
.text-4xl  /* Títulos de sección - 2.25rem */
.text-3xl  /* Títulos de subsección - 1.875rem */
.text-2xl  /* Títulos de tarjetas - 1.5rem */
.text-xl   /* Subtítulos - 1.25rem */

/* Cuerpo */
.text-base /* Texto normal - 1rem */
.text-sm   /* Texto secundario - 0.875rem */
.text-xs   /* Labels y metadata - 0.75rem */
```

### Uso de Tipografía

```tsx
{/* Hero Title */}
<h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light">
  Ribeira Vinifera
</h1>

{/* Section Title */}
<h2 className="font-serif text-4xl font-light text-primary">
  Nuestros Vinos
</h2>

{/* Card Title */}
<h3 className="font-serif text-2xl text-foreground">
  Mencía Crianza 2021
</h3>

{/* Body Text */}
<p className="font-sans text-base text-muted-foreground leading-relaxed">
  Descripción del vino...
</p>
```

## Espaciado

### Escala de Spacing

Usamos la escala de Tailwind por defecto:
- `4px` = `space-1`
- `8px` = `space-2`
- `12px` = `space-3`
- `16px` = `space-4`
- `24px` = `space-6`
- `32px` = `space-8`
- `48px` = `space-12`
- `64px` = `space-16`
- `96px` = `space-24`

### Generosidad de Espacios

**Principio**: El espacio blanco es un elemento de diseño de lujo.

```tsx
{/* Secciones con breathing room */}
<section className="py-24 px-4 md:px-8">
  <div className="max-w-7xl mx-auto space-y-16">
    {/* Contenido */}
  </div>
</section>

{/* Tarjetas con padding generoso */}
<Card className="p-8">
  <CardContent className="space-y-6">
    {/* Contenido */}
  </CardContent>
</Card>
```

## Sombras

### Sombras Elegantes

```css
/* Sombras suaves y difusas */
--shadow-elegant: 0 10px 30px -10px hsl(var(--primary) / 0.15);
--shadow-luxury: 0 20px 60px -15px hsl(var(--primary) / 0.25);
--shadow-glow: 0 0 40px hsl(var(--accent) / 0.2);
--shadow-subtle: 0 2px 8px hsl(var(--foreground) / 0.05);
```

### Uso en Tailwind

```typescript
// tailwind.config.ts
boxShadow: {
  'elegant': '0 10px 30px -10px hsl(var(--primary) / 0.15)',
  'luxury': '0 20px 60px -15px hsl(var(--primary) / 0.25)',
  'glow': '0 0 40px hsl(var(--accent) / 0.2)',
  'subtle': '0 2px 8px hsl(var(--foreground) / 0.05)',
}
```

```tsx
<Card className="shadow-elegant hover:shadow-luxury transition-shadow">
```

## Animaciones

### Transiciones Suaves

```css
--transition-smooth: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
--transition-elegant: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
```

### Configuración en Tailwind

```typescript
// tailwind.config.ts
transitionDuration: {
  'smooth': '400ms',
  'elegant': '600ms',
}
```

### Principios de Animación

1. **Sutileza**: Movimientos suaves y lentos
2. **Propósito**: Solo animar cuando añade valor
3. **Naturalidad**: Usar easing curves realistas
4. **Performance**: Usar `transform` y `opacity`

### Ejemplos

```tsx
{/* Hover suave en tarjetas */}
<Card className="transition-all duration-smooth hover:scale-105 hover:shadow-luxury">

{/* Fade in al hacer scroll */}
<div className="animate-in fade-in duration-elegant">

{/* Botón con hover elegante */}
<Button className="transition-all duration-smooth hover:shadow-glow">
```

## Componentes UI

### Variantes de Button

```tsx
{/* Default - Primary */}
<Button variant="default">Comprar</Button>

{/* Secondary - Terracota */}
<Button variant="secondary">Ver más</Button>

{/* Outline - Sutil */}
<Button variant="outline">Contactar</Button>

{/* Ghost - Mínimo */}
<Button variant="ghost">Cancelar</Button>
```

### Cards

```tsx
<Card className="overflow-hidden shadow-elegant hover:shadow-luxury transition-all duration-smooth">
  <CardHeader>
    <CardTitle className="font-serif text-2xl">Título</CardTitle>
  </CardHeader>
  <CardContent className="space-y-4">
    {/* Contenido con spacing generoso */}
  </CardContent>
  <CardFooter>
    <Button className="w-full">Acción</Button>
  </CardFooter>
</Card>
```

## Layout Patterns

### Hero Section

```tsx
<section className="relative h-screen w-full overflow-hidden">
  {/* Imagen de fondo con overlay */}
  <div className="absolute inset-0">
    <img 
      src={heroImage} 
      alt="Viñedos"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20" />
  </div>
  
  {/* Contenido centrado */}
  <div className="relative h-full flex items-center justify-center">
    <div className="text-center text-white space-y-6 px-4">
      <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-light">
        Ribeira Vinifera
      </h1>
      <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
        Vinos con alma de la Ribeira Sacra
      </p>
      <Button size="lg" className="mt-8">
        Descubre nuestros vinos
      </Button>
    </div>
  </div>
</section>
```

### Grid de Productos

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {products.map(product => (
    <Card key={product.id} className="group">
      <div className="aspect-[3/4] overflow-hidden">
        <img 
          src={product.image}
          className="w-full h-full object-cover transition-transform duration-smooth group-hover:scale-110"
        />
      </div>
      <CardContent className="p-6 space-y-4">
        <h3 className="font-serif text-2xl">{product.name}</h3>
        <p className="text-muted-foreground">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-serif text-primary">
            {product.price}€
          </span>
          <Button>Añadir al carrito</Button>
        </div>
      </CardContent>
    </Card>
  ))}
</div>
```

### Content Section

```tsx
<section className="py-24 px-4 md:px-8 bg-gradient-subtle">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="font-serif text-5xl font-light text-primary mb-6">
        Título de Sección
      </h2>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
        Descripción de la sección con espaciado generoso
      </p>
    </div>
    
    <div className="grid md:grid-cols-2 gap-16 items-center">
      <div className="space-y-6">
        {/* Contenido */}
      </div>
      <div className="aspect-square rounded-lg overflow-hidden shadow-elegant">
        <img src={image} className="w-full h-full object-cover" />
      </div>
    </div>
  </div>
</section>
```

## Responsive Design

### Breakpoints

```typescript
// Tailwind defaults
sm: '640px'   // Móvil grande
md: '768px'   // Tablet
lg: '1024px'  // Desktop
xl: '1280px'  // Desktop grande
2xl: '1536px' // Desktop extra grande
```

### Mobile-First Approach

```tsx
{/* Diseña primero para móvil */}
<div className="
  px-4 py-8              {/* Móvil */}
  md:px-8 md:py-12      {/* Tablet */}
  lg:px-16 lg:py-24     {/* Desktop */}
">
  <h1 className="
    text-4xl              {/* Móvil */}
    md:text-5xl          {/* Tablet */}
    lg:text-6xl          {/* Desktop */}
    font-serif font-light
  ">
    Título Responsive
  </h1>
</div>
```

## Accesibilidad

### Contraste de Colores

Todos los pares de colores cumplen WCAG AA:
- `foreground` sobre `background`: 4.5:1+
- `primary-foreground` sobre `primary`: 4.5:1+
- Texto en imágenes: overlay oscuro para garantizar legibilidad

### Focus States

```tsx
{/* Todos los elementos interactivos tienen focus visible */}
<Button className="focus:ring-2 focus:ring-primary focus:ring-offset-2">
  
<Input className="focus-visible:ring-2 focus-visible:ring-primary">
```

### Semántica HTML

```tsx
{/* Usar elementos semánticos correctos */}
<header>
<nav>
<main>
  <article>
  <section>
  <aside>
</main>
<footer>
```

## Mejores Prácticas

### 1. Usa Tokens, No Valores Directos

❌ **Incorrecto**:
```tsx
<div className="text-[#8B4513] bg-[#F5F5DC]">
```

✅ **Correcto**:
```tsx
<div className="text-foreground bg-background">
```

### 2. Mantén Consistencia

- Usa las mismas variantes de botones en toda la app
- Respeta la escala de spacing
- Sigue los patterns de layout establecidos

### 3. Prioriza la Legibilidad

- Line-height generoso: `leading-relaxed` o `leading-loose`
- Max-width en texto: `max-w-prose` o `max-w-3xl`
- Contraste suficiente siempre

### 4. Performance

- Lazy load de imágenes: `loading="lazy"`
- Optimiza imágenes antes de subir
- Usa `transform` y `opacity` para animaciones

## Personalización

### Añadir Nuevos Colores

```css
/* src/index.css */
:root {
  --mi-color: 200 50% 50%;
}
```

```typescript
// tailwind.config.ts
colors: {
  'mi-color': 'hsl(var(--mi-color))',
}
```

### Añadir Nuevas Variantes de Componentes

```typescript
// src/components/ui/button.tsx
const buttonVariants = cva("...", {
  variants: {
    variant: {
      // Añadir nueva variante
      luxury: "bg-gradient-gold text-foreground shadow-glow hover:shadow-luxury",
    }
  }
});
```

## Recursos

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [Radix UI (primitivos)](https://www.radix-ui.com)
- [HSL Color Picker](https://hslpicker.com)
