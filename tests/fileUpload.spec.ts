import {test} from "@playwright/test"

test("File upload",async({page})=>{
await page.goto("https://www.naukri.com/registration/createAccount");
await page.locator("//h2[contains(text(),'experienced')]").click();
let upload=page.locator("//input[@class='uploadAction']");
await upload.setInputFiles('Utils/testDoc.doc');
await page.waitForTimeout(3000) 



});