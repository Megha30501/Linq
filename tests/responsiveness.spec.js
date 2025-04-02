import{test, expect} from '@playwright/test'

test('Page should be responsive in mobile view', async ({ page }) => {
  await page.goto('/');
  await page.setViewportSize({ width: 375, height: 667 });

  const body = await page.locator('body');
  await expect(body).toBeVisible();
 
 const phoneInput = await page.locator('input[placeholder="Phone Number"]');
 await expect(phoneInput).toBeVisible(); 
  
  await phoneInput.click();  
  await phoneInput.fill('1234567890');  
  
  const phoneInputValue = await phoneInput.inputValue();
  expect(phoneInputValue).toBe('(123) 456-7890');
  
  await page.getByText('Continue').click()
});