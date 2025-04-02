import { test, expect } from '@playwright/test';
test('Should show an error when phone number is not entered', async ({ page }) => {
    await page.goto('/'); 

    await page.getByText('Continue').click()

    await expect(page.getByText('Phone number is required')).toBeVisible();
});
 