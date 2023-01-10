import{test,expect} from '@playwright/test'

test('select tag',async({page})=>{

    await page.goto("https://getbootstrap.com/docs/5.3/forms/floating-labels/#selects")
    await page.pause();
    await page.getByRole('combobox', { name: 'Floating label select example' }).click();
    await page.getByRole('combobox', { name: 'Floating label select example' }).selectOption('1');
    await page.getByRole('combobox', { name: 'Floating label select example' }).click();
    await page.getByRole('combobox', { name: 'Floating label select example' }).selectOption('2');
    await page.getByRole('combobox', { name: 'Floating label select example' }).click();
    await page.getByRole('combobox', { name: 'Floating label select example' }).selectOption('3');

})