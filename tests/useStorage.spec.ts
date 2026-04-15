import {test} from '@playwright/test'


test.use({storageState:'data/salesforce.json'})
test("Using storage state clicking lead",async({page})=>{
    await page.goto("https://testleaf.lightning.force.com/lightning/page/home");    
    await page.locator("//a[@href='/lightning/o/Lead/home']").click();

})


test("Using storage state clicking contacts",async({page})=>{
    await page.goto("https://testleaf.lightning.force.com/lightning/page/home");  
    await page.locator("//a[@href='/lightning/o/Contact/home']").click();

})