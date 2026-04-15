import {test} from "@playwright/test"

test("Handling window handles",async({page,context})=>
{
  await page.goto("https://www.leafground.com/window.xhtml");

  let parentWIn=context.waitForEvent('page');

  await page.locator("//span[text()='Open']").click();

  let child=await parentWIn;

 await child.getByPlaceholder('E-mail Address').fill("sara@kmail.com");
 await child.locator("//span[text()='Send']").click();
 let pa1=await page.title();
 let ch1=await child.title();
 console.log("Parent title "+pa1);
 console.log("Child title "+ch1);
 await child.close();

});