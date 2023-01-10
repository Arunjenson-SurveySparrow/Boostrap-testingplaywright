
import{test,expect} from '@playwright/test'

test('interacting with accordian/modal',async({page})=>{
    await page.goto('https://getbootstrap.com/docs/5.3/components/accordion/');
    await page.locator('#headingOne').click();
    await page.locator('#headingTwo').click();
    await page.locator('#headingThree').click();
    await page.locator('#headingOne').click();
    await page.locator('#flush-headingOne').click();
    await page.locator('#flush-headingTwo').click();
    await page.locator('#flush-headingThree').click();
})
