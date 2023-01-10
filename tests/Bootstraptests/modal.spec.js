import{test,expect} from '@playwright/test'

test("modal",async({page})=>{
    await page.goto('https://getbootstrap.com/docs/5.3/components/modal/');
  await page.getByRole('button', { name: 'Launch static backdrop modal' }).click();
  await page.getByRole('button', { name: 'Understood' }).click();
  await page.getByRole('dialog', { name: 'Modal title' }).getByRole('button', { name: 'Close' }).filter({ hasText: 'Close' }).click();

})