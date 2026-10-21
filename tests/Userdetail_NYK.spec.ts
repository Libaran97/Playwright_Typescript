import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://test.nyk-nibiki.com/');
  await page.getByRole('textbox', { name: 'User ID/Email/Seafarer ID' }).click();
  await page.getByRole('textbox', { name: 'User ID/Email/Seafarer ID' }).fill('SVMADMIN');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('NYK@uat20Feb23');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.goto('https://test.nyk-nibiki.com/main');
  await page.getByRole('link', { name: 'Acknowledge' }).click();
  await expect(page.locator('#NFR_megamenu-nfr_topbar_autocomp1_input')).toBeVisible();
  await page.locator('#NFR_megamenu-nfr_topbar_autocomp1_input').click();
  await page.locator('#NFR_megamenu-nfr_topbar_autocomp1_input').fill('user');
});