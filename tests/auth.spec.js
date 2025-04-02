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

test('Apple button opens the Apple Sign-In page in a new tab', async ({ page }) => {
    await page.goto('/');

    const appleButton = page.getByText("Apple");

    const [newTab] = await Promise.all([
        page.waitForEvent('popup'), 
        appleButton.click()         
    ]);

    // Get the URL of the new tab
    const newTabUrl = newTab.url();
    expect(newTabUrl).toMatch(/^https:\/\/appleid\.apple\.com\/auth\//);
});

test('Google button opens the Google Sign-In page in a new tab', async ({ page }) => {
    await page.goto('/');

    const googleButton = page.getByText("Google");

    const [newTab] = await Promise.all([
        page.waitForEvent('popup'), 
        googleButton.click()         
    ]);

    const newTabUrl = newTab.url();
    expect(newTabUrl).toMatch(/^https:\/\/accounts\.google\.com\/(v3\/signin\/|signin\/oauth\/error)/);
});

test('LinkedIn button opens the LinkedIn Sign-In page in a new tab', async ({ page }) => {
    await page.goto('/welcome');

    const linkedInButton = page.getByText("LinkedIn");

    const [newTab] = await Promise.all([
        page.waitForEvent('popup'), 
        linkedInButton.click()         
    ]);

    // Get the URL of the new tab
    const newTabUrl = newTab.url();
    expect(newTabUrl).toMatch(/^https:\/\/www\.linkedin\.com\/oauth\//);
});