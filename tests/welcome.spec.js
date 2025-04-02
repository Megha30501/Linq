import { test, expect } from '@playwright/test';
test('Homepage loads correctly', async ({ page }) => {
    await page.goto('/'); 
    await expect(page).toHaveTitle(/Linq/);
  
    const mainTextContent = await page.locator('.flex.flex-col.gap-6').textContent();

    expect(mainTextContent).toMatch(/One Platform to\s*Meet, Manage,\s*and Close\./);
});
 

test('homepage button redirects to home page', async ({ page }) => {
    await page.goto('/welcome');
    
    // Find and click the homepage button
    const homeButton = page.locator('button svg').first();
    await homeButton.click();
    
    // Verify redirection
    await expect(page).toHaveURL('https://linqapp.com/');
  });
  
