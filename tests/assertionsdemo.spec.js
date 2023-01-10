import {test,expect} from '@playwright/test'


test("assertions testing",async({page})=>{


    await page.goto('https://kitchen.applitools.com')
    await page.pause()


    //Assertions 

        //check element is present or not

         await expect(page.locator('text = The Kitchen')).toHaveCount(1)

    // using condition 
        if(await page.$('text = The Kitchen')){
        await page.getByRole('heading', { name: 'The Kitchen' }).click()
    }

    //check element is hidden or visible
    await expect(page.locator('text=The Kitchen')).toBeVisible()
// await expect.soft(page.locator('text=The Kitchen')).toBeHidden()

//check element is enabled or disabled
await expect(page.locator('text=The Kitchen')).toBeEnabled()
// await expect.soft(page.locator('text=The Kitchen')).toBeDisabled()

//check text
await expect(page.locator('text=The Kitchen')).toHaveText('The Kitchen')
// await expect(page.locator('text=The Kitchen')).not.toHaveText('ABCD')


// assert element attribute
 await expect(page.locator('text=The Kitchen')).toHaveAttribute('class', /.*css-dpmy2a/)
await expect(page.locator('text=The Kitchen')).toHaveClass( /.*css-dpmy2a/);

//Check Url and title of the page
await expect(page).toHaveURL('https://kitchen.applitools.com/');
await expect(page).toHaveTitle(/.*Kitchen/);

//visual validation with screenshot
await expect(page).toHaveScreenshot();
})