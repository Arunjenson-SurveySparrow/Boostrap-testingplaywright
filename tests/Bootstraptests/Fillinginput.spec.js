import{test,expect} from '@playwright/test'

test('filling input',async({page})=>{

    await page.goto('https://getbootstrap.com/docs/5.3/forms/input-group/');
    await page.pause();
    await page.locator('.form-control').first().click();
    await page.locator('.form-control').first().fill('Arun Jenson');
    await page.getByPlaceholder('Recipient\'s username').first().click();
    await page.getByPlaceholder('Recipient\'s username').first().fill('arun@arun');
    await page.getByPlaceholder('Recipient\'s username').first().click();
    await page.getByPlaceholder('Recipient\'s username').first().fill('arun');
    await page.getByLabel('Your vanity URL').click();
    await page.getByLabel('Your vanity URL').fill('arun');
    await page.locator('div:nth-child(5) > input').first().click();
    await page.locator('div:nth-child(5) > input').first().fill('Arun');
    await page.getByPlaceholder('Server').click();
    await page.getByPlaceholder('Server').fill('surveysparrow');
})