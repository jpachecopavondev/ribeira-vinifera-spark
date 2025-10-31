# Integración de Shopify - Guía Completa

## Configuración de la Tienda Shopify

### 1. Crear una Cuenta de Shopify
1. Ve a [shopify.com](https://www.shopify.com)
2. Crea una nueva tienda o usa una existente
3. Anota tu dominio permanente de Shopify: `tu-tienda.myshopify.com`

### 2. Obtener el Token de Storefront API

1. En el panel de administración de Shopify, ve a **Settings** → **Apps and sales channels**
2. Haz clic en **Develop apps**
3. Si es tu primera vez, haz clic en **Allow custom app development**
4. Haz clic en **Create an app**
5. Dale un nombre (ej: "Ribeira Vinifera Store")
6. En la pestaña **Configuration**, haz clic en **Configure** bajo "Storefront API"
7. Selecciona los siguientes permisos:
   - `unauthenticated_read_product_listings`
   - `unauthenticated_read_product_inventory`
   - `unauthenticated_read_product_tags`
   - `unauthenticated_write_checkouts`
   - `unauthenticated_read_checkouts`
8. Haz clic en **Save**
9. Ve a la pestaña **API credentials**
10. Copia el **Storefront API access token** (este es tu token público)

### 3. Configurar las Variables en el Código

Edita el archivo `src/lib/shopify.ts`:

```typescript
const SHOPIFY_API_VERSION = '2025-07';
const SHOPIFY_STORE_PERMANENT_DOMAIN = 'tu-tienda.myshopify.com'; // Reemplaza con tu dominio
const SHOPIFY_STOREFRONT_URL = `https://${SHOPIFY_STORE_PERMANENT_DOMAIN}/api/${SHOPIFY_API_VERSION}/graphql.json`;
const SHOPIFY_STOREFRONT_TOKEN = 'tu-token-aqui'; // Reemplaza con tu token
```

## Arquitectura de la Integración

### Flujo de Datos

```
Usuario → Componente React → shopify.ts → Shopify Storefront API
                                ↓
                          Zustand Store (cartStore.ts)
                                ↓
                          CartDrawer Component
                                ↓
                          Checkout en Shopify
```

### Archivos Clave

#### `src/lib/shopify.ts`
Contiene todas las funciones para interactuar con Shopify:
- `getProducts()` - Obtiene lista de productos
- `getProductByHandle()` - Obtiene un producto específico
- `createStorefrontCheckout()` - Crea un checkout con los items del carrito
- `storefrontApiRequest()` - Función helper para hacer peticiones GraphQL

#### `src/stores/cartStore.ts`
Store de Zustand que maneja el estado del carrito:
- Persistencia en localStorage
- Métodos para agregar, actualizar y eliminar items
- Integración con la API de Shopify para crear checkouts

#### `src/components/CartDrawer.tsx`
Componente visual del carrito de compras

## Crear Productos en Shopify

### Opción 1: Panel de Administración
1. Ve a **Products** → **Add product**
2. Completa la información:
   - **Title**: Nombre del vino
   - **Description**: Descripción detallada
   - **Media**: Sube imágenes del vino
   - **Pricing**: Establece el precio
   - **Inventory**: Gestiona el stock
   - **Shipping**: Configura peso y dimensiones
   - **Variants**: Añade opciones (ej: Formato - 75cl, 1.5L)
3. Asegúrate de que el canal "Online Store" esté activado
4. Haz clic en **Save**

### Opción 2: API (Para Uso Futuro)
Para crear productos mediante código, necesitarías:
1. Crear una app privada con Admin API access
2. Obtener el Admin API token
3. Usar el Admin API (no el Storefront API)

Nota: El Storefront API es solo lectura para productos. Para crear/editar productos mediante código, necesitas el Admin API.

## Flujo de Checkout

### Proceso Completo

1. **Usuario agrega producto al carrito**:
   ```typescript
   addItem({
     product: productData,
     variantId: 'gid://shopify/ProductVariant/123',
     variantTitle: 'Default',
     price: { amount: '15.00', currencyCode: 'EUR' },
     quantity: 1,
     selectedOptions: []
   });
   ```

2. **El carrito se persiste en localStorage** automáticamente

3. **Usuario hace clic en "Finalizar Compra"**:
   - Se llama a `createCheckout()`
   - Esto invoca `createStorefrontCheckout()` en shopify.ts
   - Se crea un carrito en Shopify mediante GraphQL
   - Shopify devuelve un `checkoutUrl`

4. **Redirección al checkout**:
   ```typescript
   window.open(checkoutUrl, '_blank');
   ```

5. **Usuario completa el pago en Shopify**

### GraphQL Mutation para Crear Checkout

```graphql
mutation cartCreate($input: CartInput!) {
  cartCreate(input: $input) {
    cart {
      id
      checkoutUrl
      totalQuantity
      cost {
        totalAmount {
          amount
          currencyCode
        }
      }
    }
    userErrors {
      field
      message
    }
  }
}
```

## Problemas Comunes y Soluciones

### Error 401 Unauthorized
- **Causa**: Token de Storefront API inválido o expirado
- **Solución**: Regenera el token en Shopify Admin y actualízalo en el código

### Error 402 Payment Required
- **Causa**: La tienda Shopify no tiene un plan de pago activo
- **Solución**: Activa un plan de pago en Shopify (después del trial)

### Checkout pide contraseña
- **Causa**: La tienda tiene protección por contraseña activada
- **Solución**: Ve a **Online Store** → **Preferences** y desactiva la protección por contraseña

### No se redirige al checkout
- **Causa**: Falta el parámetro `channel=online_store` en la URL
- **Solución**: Ya está implementado en el código:
  ```typescript
  const url = new URL(cart.checkoutUrl);
  url.searchParams.set('channel', 'online_store');
  ```

## Configuración de Pasarelas de Pago

1. En Shopify Admin, ve a **Settings** → **Payments**
2. Activa las pasarelas de pago que quieras:
   - Shopify Payments (recomendado)
   - PayPal
   - Stripe
   - Otras opciones disponibles según tu región

## Testing

### Modo Test de Shopify Payments
1. Ve a **Settings** → **Payments** → **Shopify Payments**
2. Activa el modo de prueba
3. Usa tarjetas de prueba de Shopify:
   - Éxito: `1` como número de tarjeta
   - Fallo: `2` como número de tarjeta

### Testing Local
```bash
npm run dev
```

Prueba el flujo completo:
1. Navega a la página de productos
2. Agrega un producto al carrito
3. Abre el carrito drawer
4. Haz clic en "Finalizar Compra"
5. Verifica que se abre la página de checkout de Shopify

## Versiones de API

Este proyecto usa **Shopify Storefront API 2025-07**.

Shopify mantiene cada versión de API durante 12 meses. Monitorea los cambios en:
- [Shopify API Release Notes](https://shopify.dev/api/release-notes)

Para actualizar la versión, cambia:
```typescript
const SHOPIFY_API_VERSION = '2025-07'; // Actualiza aquí
```

## Recursos Adicionales

- [Shopify Storefront API Docs](https://shopify.dev/api/storefront)
- [Shopify GraphQL Explorer](https://shopify.dev/tools/graphiql-admin-api)
- [Shopify Dev Discord](https://discord.gg/shopifydevs)
