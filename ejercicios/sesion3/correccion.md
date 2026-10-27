# Corrección — Sesión 3: Playwright primer contacto

**Archivo corregido:** `tests/sesion3.spec.ts`

¡Muy buen trabajo con los tests de TodoMVC! Están muy prolijos: el `test.describe`, el `beforeEach` para no repetir el `goto` y la constante `todoInput` son buenas prácticas que no se pedían. Falta la Parte 3 (Sauce Demo).

## Verificación

- `npx playwright test` → los 3 tests pasan en verde en los 3 navegadores (chromium, firefox y webkit): 9 de 9.

## Detalle por punto

| # | Punto | Estado | Comentario |
|---|-------|--------|------------|
| 1–3 | Instalar Playwright | ✅ | Config, carpeta `tests` y navegadores OK. |
| 5 | Test 1: título con `toHaveTitle` | ✅ | |
| 6 | Test 2: agregar tarea | ✅ | Usa `getByPlaceholder`, `fill`, `press('Enter')` y `getByText` + `toBeVisible`, tal como pedía la consigna. |
| 7 | Test 3: marcar tarea como completada | ✅ | Muy bien filtrar la fila por texto y verificar la clase `completed`. |
| 8–14 | Flujo de compra en Sauce Demo | ❌ | No está el archivo `tests/saucedemo.spec.ts`. |

## A corregir

1. **Falta la Parte 3.** Hay que crear `tests/saucedemo.spec.ts` con un único test llamado `compra completa` que haga login, agregue un producto al carrito, abra el carrito, haga el checkout y verifique el mensaje "Thank you for your order!", con un `expect` al final de cada paso.
