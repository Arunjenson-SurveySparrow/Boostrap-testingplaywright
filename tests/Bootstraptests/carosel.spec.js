import{test,expect} from '@playwright/test'

test('interacting with carosel',async({page})=>{

    await page.goto('https://getbootstrap.com/docs/5.3/components/carousel/')
    await page.pause();
    await page.locator('#carouselExampleIndicators').getByRole('button', { name: 'Next' }).click()
    await page.locator('#carouselExampleIndicators').getByRole('button', { name: 'Next' }).click()
    await page.locator('#carouselExampleIndicators').getByRole('button', { name: 'Next' }).click()
    await page.locator('#carouselExampleIndicators').getByRole('button', { name: 'Previous' }).click()
    await page.locator('#carouselExampleIndicators').getByRole('button', { name: 'Previous' }).click()
    await page.locator('#carouselExampleIndicators').getByRole('button', { name: 'Previous' }).click()
    
    })