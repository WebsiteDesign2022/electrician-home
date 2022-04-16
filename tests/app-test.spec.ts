import { test, expect, Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  // Please change to correct url.
  await page.goto('http://localhost:55046');
});

test.describe('Top Bar', () => {
  test('should render brand correctly', async ({ page }) => {
    const brand = page.locator('.navbar-brand');
    await expect(brand).toHaveCount(1);
    await expect(brand).toHaveText('Electrician Home');
  });

  test('should render navbar correctly', async ({ page }) => {
    const navlinks = page.locator('.navbar-nav .nav-link');
    await expect(navlinks).toHaveCount(8);
    await expect(navlinks).toHaveText(['Home', 'Landing', 'Service', 'About', 'Contact', 'Services', 'Project', 'Portfolio']);
  });
});
