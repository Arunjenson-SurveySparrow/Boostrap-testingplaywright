import {test,expect} from '@playwright/test'

test("selectors",async({page})=>{
    await page.goto('https://saucedemo.com')
    
    // to pause
    await page.pause();

    //using any object property
    await page.click('id=user-name')
    
    await page.locator('id=user-name').fill("aaron")

    await page.locator('[id=user-name]').fill("playwright")


    //using css selectors
    await page.locator("#login-button").click();

    //using xpath

    await page.locator('xpath=//input[@name="password"]').fill("password")

    await page.locator('//input[@name="password"]').fill("anotherpassword")
})