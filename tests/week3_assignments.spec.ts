import {test,expect} from '@playwright/test'


test("Practice Playwright locators",async({page})=>
{
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.getByRole("textbox",{name:'Username'}).fill("Demosalesmanager");
    await page.getByRole("textbox",{name:'Password'}).fill("crmsfa");
    await page.getByRole("button",{name:'Login'}).click();
    await page.getByRole("link",{name:'CRM/SFA'}).click();
    await page.getByRole("link",{name:'Leads',exact:true}).click();
     await page.getByRole("link",{name:'Create Lead',exact:true}).click();
     await page.locator('#createLeadForm_companyName').fill('TestForm1')
await page.locator('#createLeadForm_firstName').fill('SARANsd')
await page.locator('#createLeadForm_lastName').fill('Siva')
await page.locator('#createLeadForm_personalTitle').fill('Engineer')
await page.locator('#createLeadForm_generalProfTitle').fill('test')
await page.locator('#createLeadForm_annualRevenue').fill('1000')
await page.locator('#createLeadForm_departmentName').fill('Engineer')
await page.locator('#createLeadForm_primaryPhoneNumber').fill('9999223453')
 await page.getByRole("button",{name:'Create Lead'}).nth(1).click();

});

test("Practice Auto waits",async({page})=>
{
    await page.goto(" https://leafground.com/waits.xhtml");
    await page.locator()

});