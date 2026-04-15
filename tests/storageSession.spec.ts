import {test} from '@playwright/test'

test("Learning storage state",async({page})=>
{

    await page.goto("https://login.salesforce.com/");
    //dilipkumar.rajendran@testleaf.com / TestLeaf@2025
    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')
   await page.locator('#password').fill('TestLeaf@2025')
   await page.click('#Login')
   await page.context().storageState({path:'data/salesforce.json'})

})

