import{test,expect} from '@playwright/test'

test('toogling radio and checkbox',async({page})=>{
    await page.goto('https://getbootstrap.com/docs/5.3/forms/checks-radios/');
  await page.locator('#flexCheckDefault').check();
  await page.locator('#flexCheckDefault').uncheck();
  await page.locator('#flexCheckChecked').uncheck();
  await page.locator('#flexCheckChecked').check();
  await page.locator('#flexRadioDefault1').check();
  await page.getByLabel('Default checked radio').check();
})
