
import{test,expect} from '@playwright/test'

test('testing validation error',async({page})=>{
    await page.goto('https://chakra-ui.com/docs/components/form-control/usage#usage-with-form-libraries');
    await page.pause();
  await page.locator('input[name="name"]').click();
  await page.locator('input[name="name"]').fill('');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.locator('input[name="name"]').click();
  await page.locator('input[name="name"]').fill('arun');
  await page.getByRole('button', { name: 'Submit' }).click();

})