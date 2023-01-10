
import{test,expect} from '@playwright/test'

test('disabled input',async({page})=>{
    await page.goto("https://getbootstrap.com/docs/5.3/forms/checks-radios/#disabled")
    await expect.soft(page.locator('id=flexCheckDisabled')).toBeDisabled()
   
})