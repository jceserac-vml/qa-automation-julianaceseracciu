import { test, expect } from '@playwright/test';

test.describe('Parte 2 — Tests sobre TodoMVC', () => {

  // URL del sitio de practica
  test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');
  });

  // Test 1: Navegar al sitio y verificar el título de la página
  test('TC-001', async ({ page }) => {
    await expect(page).toHaveTitle(/TodoMVC/);
  });

  // Test 2: Agregar una tarea nueva y verificar que aparece en la lista
  test('TC-002', async ({ page }) => {
    const todoInput = page.getByPlaceholder('What needs to be done?');

    // Escribir la tarea y presionar Enter
    await todoInput.fill('Comprar leche');
    await todoInput.press('Enter');

    // Verificar que la tarea agregada es visible en la lista
    await expect(page.getByText('Comprar leche')).toBeVisible();
  });

  // Test 3: Marcar una tarea como completada y verificar su cambio de estado
  test('TC-003', async ({ page }) => {
    const todoInput = page.getByPlaceholder('What needs to be done?');

    // Crear una tarea
    await todoInput.fill('Aprender Playwright');
    await todoInput.press('Enter');

    // Localizar la fila de la tarea y hacer click en el checkbox para completarla
    const todoItem = page.getByTestId('todo-item').filter({ hasText: 'Aprender Playwright' });
    await todoItem.getByRole('checkbox').check();

    // Verificar que el elemento tiene la clase 'completed'
    await expect(todoItem).toHaveClass(/completed/);
  });

});