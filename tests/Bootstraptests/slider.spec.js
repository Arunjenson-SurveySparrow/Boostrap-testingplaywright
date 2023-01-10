
import{test,expect} from '@playwright/test'

test('moving the slider',async({page})=>{
    await page.goto('https://chakra-ui.com/docs/components/slider/usage');
    await page.pause();
  await page.getByRole('slider', { name: 'slider-ex-4' }).click();
  await page.getByRole('slider', { name: 'slider-ex-4' }).locator('path').nth(1).click();
  await page.locator('[id="slider-track-\\:r3\\:"]').click();
  await page.locator('div:nth-child(18) > .chakra-slider').click();
  await page.locator('[id="slider-track-\\:r3\\:"] div').click();
  await page.locator('[id="slider-track-\\:r3\\:"]').click();

})