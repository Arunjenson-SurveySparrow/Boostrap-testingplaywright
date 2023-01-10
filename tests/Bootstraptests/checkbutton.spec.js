import{test,expect} from '@playwright/test'

test("check button state",async({page})=>{
    await page.goto("https://getbootstrap.com/docs/5.2/components/buttons/")
    await expect(page.getByRole('button',{name:'Active toggle button'})).toBeEnabled()
    await expect(page.getByRole('button',{name:'Disabled toggle button'})).toBeDisabled()
})
