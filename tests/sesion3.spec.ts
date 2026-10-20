import { test, expect } from '@playwright/test';

test.describe('Parte 2 — Tests sobre TodoMVC', () => {

  // Ejecutar navegación previa a cada test
  test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');
  });

  // Test 1: Navegar al sitio y verificar el título de la página
  test('Test 1: verificar el título de la página', async ({ page }) => {
    await expect(page).toHaveTitle(/TodoMVC/);
  });

  // Test 2: Agregar una tarea nueva y verificar que aparece en la lista
  test('Test 2: agregar una nueva tarea', async ({ page }) => {
    const todoInput = page.getByPlaceholder('What needs to be done?');

    // Escribir la tarea y presionar Enter
    await todoInput.fill('Comprar leche');
    await todoInput.press('Enter');

    // Verificar que la tarea agregada es visible en la lista
    await expect(page.getByText('Comprar leche')).toBeVisible();
  });

  // Test 3: Marcar una tarea como completada y verificar su cambio de estado
  test('Test 3: marcar una tarea como completada', async ({ page }) => {
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