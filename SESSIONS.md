# Uso de Sesiones en Astro

## Configuración completada ✅

### 1. **Archivos modificados/creados:**

- `astro.config.mjs` - Configuración de sesiones con adaptador Node.js
- `src/env.d.ts` - Tipos TypeScript para datos de sesión
- `src/pages/api/save-players.ts` - API para guardar jugadores
- `src/pages/api/get-players.ts` - API para obtener jugadores
- `src/pages/api/clear-session.ts` - API para limpiar sesión
- `src/components/SetupScreen.tsx` - Actualizado para guardar en sesión
- `src/pages/game/index.astro` - Actualizado para leer de sesión

### 2. **Cómo usar Astro.session:**

#### En páginas .astro:
```astro
---
export const prerender = false; // Requerido para usar sesiones

// Obtener datos
const players = await Astro.session?.get('players');

// Guardar datos
Astro.session?.set('players', ['Juan', 'María']);

// Eliminar un valor
Astro.session?.set('players', undefined);

// Destruir la sesión
await Astro.session?.destroy();

// Regenerar ID de sesión (útil al hacer login)
Astro.session?.regenerate();
---
```

#### En API endpoints:
```typescript
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, session }) => {
  // Leer de la sesión
  const data = await session?.get('key');
  
  // Escribir en la sesión
  session?.set('key', 'value');
  
  return new Response(JSON.stringify({ success: true }));
};
```

#### En componentes React (mediante fetch):
```typescript
// Guardar en sesión
const response = await fetch('/api/save-players', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ players: ['Juan', 'María'] })
});

// Leer de sesión
const response = await fetch('/api/get-players');
const data = await response.json();
console.log(data.players);
```

### 3. **Tipos de datos soportados:**

La sesión usa `devalue` para serialización, soporta:
- Strings, números, booleanos
- Arrays y objetos planos
- Date, Map, Set, URL
- null y undefined

### 4. **Configuración de TTL (tiempo de vida):**

Puedes configurar un tiempo de expiración en `astro.config.mjs`:

```javascript
session: {
  driver: 'fs',
  ttl: 3600, // 1 hora en segundos
  options: {
    base: './.astro/sessions'
  }
}
```

### 5. **Otros drivers disponibles:**

```javascript
// Redis
session: {
  driver: 'redis',
  options: {
    url: process.env.REDIS_URL
  }
}

// Memory (solo para desarrollo)
session: {
  driver: 'memory'
}

// Cloudflare KV
session: {
  driver: 'cloudflare-kv-binding',
  options: {
    binding: 'MY_KV'
  }
}
```

### 6. **Importante:**

- Las sesiones solo funcionan en modo `server` (no prerender)
- El driver `fs` guarda las sesiones en `./.astro/sessions`
- Agrega `.astro/sessions` a tu `.gitignore`
- La sesión se crea automáticamente al primer uso
- El ID de sesión se guarda en una cookie llamada `astro-session`

### 7. **Flujo de tu aplicación:**

1. Usuario entra en `/config`
2. Añade jugadores
3. Al hacer clic en "Repartir Roles", se llama a `/api/save-players`
4. Los jugadores se guardan en `Astro.session`
5. Usuario es redirigido a `/game`
6. La página `/game` lee los jugadores desde `Astro.session`
7. Si no hay jugadores, redirige de vuelta a `/config`

## Comandos útiles:

```bash
# Iniciar servidor de desarrollo
bun run dev

# Limpiar sesiones (eliminar carpeta)
rm -rf .astro/sessions
```
