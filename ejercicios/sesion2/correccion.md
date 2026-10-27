# Corrección — Sesión 2

**Archivo corregido:** `ejercicios/sesion2/casosTest.ts`

Muy bien resuelta la parte asincrónica. Hay un solo error, pero hace que la salida no sea la esperada.

## Verificación

- `npx tsx casosTest.ts` → corre sin errores, pero imprime el texto literal en lugar de los datos:

  ```
  #${caso.id} - ${caso.titulo} | Prioridad: ${caso.prioridad} | Estado ${estado}
  ```

- Chequeo de tipos con `npx tsc --noEmit` (con `strict: true`) → el archivo no tiene errores de tipos.

## Lo que está bien

- La interface `CasoDeTest` tiene las cuatro propiedades con los tipos pedidos.
- El array está tipado con la interface y tiene 3 casos.
- `obtenerCasosDeTest()` devuelve `Promise<CasoDeTest[]>` y resuelve a los 500ms con `setTimeout`, tal como pedía la consigna.
- `main()` es `async`, hace `await` y recorre con `forEach` usando `formatearCaso`.

## A corregir

1. **`formatearCaso` usa comillas simples en vez de backticks.** Los `${...}` solo se reemplazan por su valor dentro de un template string, que se escribe con backticks (`` ` ``). Con comillas simples (`'`) el texto se imprime tal cual:

   ```ts
   // Antes
   return '#${caso.id} - ${caso.titulo} | Prioridad: ${caso.prioridad} | Estado ${estado}'

   // Después
   return `#${caso.id} - ${caso.titulo} | Prioridad: ${caso.prioridad} | Estado ${estado}`;
   ```

## Detalles menores

- La indentación está desalineada en varias partes (el array, el `setTimeout` y los cierres `});`). En VS Code, `Shift + Alt + F` formatea el archivo solo.
