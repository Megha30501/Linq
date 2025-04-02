import { test, expect } from '@playwright/test';
test('Linq Welcome Page Tests', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Linq/);

    const mainTextContent = await page.locator('.flex.flex-col.gap-6').textContent();

    expect(mainTextContent).toMatch(/One Platform to\s*Meet, Manage,\s*and Close\./);
});

test('should navigate to homepage when logo button is clicked', async ({ page }) => {
    await page.goto('/welcome');

    const homeButton = page.locator('button svg').first();
    await homeButton.click();

    await expect(page).toHaveURL('https://linqapp.com/');
});

test('should display authentication options', async ({ page }) => {
    await page.goto('/');

    await page.waitForSelector('ion-button');

    const emailButtonExists = await page.isVisible('text=Email');
    const appleButtonExists = await page.isVisible('text=Apple');
    const googleButtonExists = await page.isVisible('text=Google');
    const linkedinButtonExists = await page.isVisible('text=LinkedIn');

    const buttonCount = await page.locator('ion-button').count();

    expect(buttonCount).toBeGreaterThanOrEqual(4);
    expect(emailButtonExists).toBeTruthy();
    expect(appleButtonExists).toBeTruthy();
    expect(googleButtonExists).toBeTruthy();
    expect(linkedinButtonExists).toBeTruthy();
});
