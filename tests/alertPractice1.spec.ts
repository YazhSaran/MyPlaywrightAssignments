import {test} from '@playwright/test'

test("practice alerts",async({page})=>
{
    await page.goto("https://www.canarabank.bank.in/pages/Net-banking")
    
    // page.on("dialog",async(alert)=>
    // {
    //     const alertType=alert.type()
    // console.log(alertType);
    // const msg=alert.message()
    // console.log(msg);
    // await alert.accept()

    // })
    await page.locator("//a[@id='netbanking-link']").click();
    await page.locator("//button[@id='popupContinue']").click();
})