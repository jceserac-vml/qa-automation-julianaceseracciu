# Corrección — Sesión 1: TypeScript sintaxis base

**Archivo corregido:** `ejercicios/sesion1/tareaSesion1.ts`

¡Muy buen trabajo!

## Verificación

- `npx tsx tareaSesion1.ts` → corre sin errores.
- Chequeo de tipos con `npx tsc --noEmit` (con `strict: true`) → el archivo no tiene errores de tipos.

## Detalle por punto

| # | Punto | Estado | Comentario |
|---|-------|--------|------------|
| 2 | Array de ≥ 5 casos con `id`, `titulo`, `prioridad`, `ejecutado` | ✅ | 5 casos. Buen tipado: el `type CasoDeTest` se define una sola vez y se reutiliza, con la prioridad como unión de literales. |
| 3 | `contarPorPrioridad(casos)` | ✅ | Recibe el array por parámetro y tiene el tipo de retorno declarado. Solo un detalle: el `console.log` que la llama quedó comentado, así que al correr el archivo no se ve su resultado (`{ alta: 2, media: 2, baja: 1 }`). |
| 4 | `listarPendientes(casos)` | ✅ | Devuelve los 2 pendientes. Como tip a futuro, te recomiendo investigar el método `filter` de los arrays, sirve justamente para eso. |
| 5 | Arrow function `formatearCaso(caso)` | ✅ | Formato idéntico al pedido: `#1 - Login válido (alta) - Ejecutado`. |
| 6 | `forEach` imprimiendo los casos formateados | ✅ | |
