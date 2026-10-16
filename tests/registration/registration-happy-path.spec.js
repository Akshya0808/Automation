// spec: specs/Registration-Test-Plan.md
const { test, expect } = require('@playwright/test');

test.describe('Positive registration scenarios', () => {
  test('Register a new customer with Male selected', async ({ page }) => {
    const email = `registration.${Date.now()}@example.com`;
    const firstName = page.locator('#WrongFirstName');
    const lastName = page.locator('#LastName');
    const emailField = page.locator('#Email');
    const password = page.locator('#Password');
    const confirmPassword = page.locator('#ConfirmPassword');

    // 1. Start from the signed-out home page and open Register.
    await page.goto('https://demowebshop.tricentis.com/');
    await page.getByRole('link', { name: 'Register' }).click();

    await expect(page.getByRole('heading', { name: 'Register' })).toBeVisible();
    await expect(firstName).toBeVisible();
    await expect(lastName).toBeVisible();
    await expect(emailField).toBeVisible();
    await expect(password).toBeVisible();
    await expect(confirmPassword).toBeVisible();
    await expect(page.getByText('Gender:')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Register' })).toBeVisible();

    // 2. Select Male and enter valid registration details.
    const maleOption = page.locator('#gender-male');
    await maleOption.check();
    await firstName.fill('Ava');
    await lastName.fill('Tester');
    await emailField.fill(email);
    await password.fill('ShopPass123!');
    await confirmPassword.fill('ShopPass123!');

    await expect(maleOption).toBeChecked();
    await expect(firstName).toHaveValue('Ava');
    await expect(lastName).toHaveValue('Tester');
    await expect(emailField).toHaveValue(email);
    await expect(password).toHaveValue('ShopPass123!');
    await expect(confirmPassword).toHaveValue('ShopPass123!');

    // 3. Submit and verify successful registration.
    await page.getByRole('button', { name: 'Register' }).click();

    await expect(page.getByText('Your registration completed')).toBeVisible();
    await expect(page.getByRole('link', { name: email })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
    await expect(page.locator('.field-validation-error')).toHaveCount(0);
  });
});