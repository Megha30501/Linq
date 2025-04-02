import { test, expect } from '@playwright/test';
test('Should show an error when phone number is not entered', async ({ page }) => {
    await page.goto('/'); 
    
    // Find and click the Continue button without any inputs
    await page.getByText('Continue').click()

    await expect(page.getByText('Phone number is required')).toBeVisible();
});
 

test('email authentication flow', async ({ page }) => {
    await page.goto('/welcome');

    const emailButton = page.getByText("Email");
    await emailButton.click();
    
    // Verify redirection
    await expect(page).toHaveURL(/auth-page/);
    
    // Find and click the Continue button without any inputs
    await page.getByText('Continue').click()

    await expect(page.getByText('Please enter a valid email')).toBeVisible();
  });

  // Shadow DOM elements can be accessed directly with Playwright
test('shadow DOM elements are accessible', async ({ page }) => {
    await page.goto('/welcome');
    
    // Access elements in shadow DOM (if needed)
    const shadowElement = await page.locator('#main ion-content div.text-white');
    await expect(shadowElement).toBeVisible();
  });