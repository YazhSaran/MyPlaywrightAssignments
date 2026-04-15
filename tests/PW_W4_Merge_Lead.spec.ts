import {test} from '@playwright/test'

test("check the window handles", async({page,context})=>
{
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.getByRole("textbox",{name:'Username'}).fill("Demosalesmanager");
    await page.getByRole("textbox",{name:'Password'}).fill("crmsfa");
    await page.getByRole("button",{name:'Login'}).click();
    await page.getByRole("link",{name:'CRM/SFA'}).click();
    await page.getByRole("link",{name:'Leads',exact:true}).click();
    await page.getByRole("link",{name:'Merge Leads',exact:true}).click();
    
    let parentWIn=context.waitForEvent('page');
    await page.locator("(//img[@alt='Lookup'])[1]").click();
    let childWin=await parentWIn;
    childWin.waitForLoadState('domcontentloaded');
    await childWin.locator("(//tbody//a)[1]").click();

    let parentWIn1=context.waitForEvent('page'); 
    await page.locator("(//img[@alt='Lookup'])[2]").click();
    let childWin1=await parentWIn1;
     childWin1.waitForLoadState('domcontentloaded');
    await childWin1.locator("(//tbody//a)[2]").click();
    //await childWin1.close();

    await page.locator("//a[text()='Merge']").click();

    page.on('dialog',async(alert)=>
    {
        await alert.accept()
    })

  const pageName=await page.title();
  console.log(pageName)

})