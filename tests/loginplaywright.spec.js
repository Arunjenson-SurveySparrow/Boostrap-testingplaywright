import {test,expect} from '@playwright/test'


test("login testing",async({page}) => {
    await page.goto('https://demo.applitools.com/')
    await page.pause();
    await page.locator('[placeholder = "Enter your username"]').fill("Arun Jenson")
    await page.locator('[placeholder = "Enter your password"]').fill("ArunJenson")
    await page.locator('text = Sign in').click()
})

test('Login demo test 2', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.pause();
    await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Username').press('Tab');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByText('Paulhelanhelanhelan Collings').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
    
})

test.only('Login demo test 3', async ({ page }) => {
    await page.pause();
    await page.goto('https://admin-demo.nopcommerce.com/login');
    
    await page.getByLabel('Email:').click();
    await page.getByLabel('Email:').press('Meta+a');
    await page.getByLabel('Email:').press('Meta+x');
    await page.getByLabel('Email:').fill('admin@yourstore.com');
    await page.getByLabel('Password:').click();
    await page.getByLabel('Password:').press('Meta+a');
   
    await page.getByLabel('Password:').press('Meta+x');
    await page.getByLabel('Password:').click();
    await page.getByLabel('Password:').fill('admin');
    await page.getByLabel('Remember me?').check();
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();
})
