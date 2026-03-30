import{test, expect} from '@playwright/test'

test("Radio buttons",async({page})=>
{
  await page.goto("https://leafground.com/radio.xhtml")
    await page.waitForLoadState('domcontentloaded')
    expect(page.locator("(//label[text()='Safari'])[2]/preceding-sibling::div//input")).toBeChecked();
    await page.getByText('Firefox').first().click();
    //await page.locator("(//label[text()='Firefox'])[1]/preceding-sibling::div//input").click();
    expect(page.locator("(//label[text()='Firefox'])[1]/preceding-sibling::div//input")).toBeChecked();
    await page.getByText('Chennai').click();
    expect(page.locator("//label[text()='21-40 Years']/preceding-sibling::div//input")).toBeChecked();
     await page.getByText('1-20 Years').click();
});

test.only("CheckBox",async({page})=>
{
  await page.goto("https://leafground.com/checkbox.xhtml")
    await page.waitForLoadState('domcontentloaded')
    await page.getByText('Basic',{ exact: true }).click();
    await page.getByText('Ajax').click();
    expect(page.locator("//span[@class='ui-growl-title']")).toHaveText("Checked");   
    await page.getByText('Java', { exact: true }).click();
    await page.getByText('Javascript', { exact: true }).click();
    await page.locator("//div[contains(@id,'TriState')]//div[@class='ui-chkbox-box ui-widget ui-corner-all ui-state-default']" ).click();
    //await page.waitForLoadState('domcontentloaded')
    // const val= await page.locator("//span[@class='ui-growl-title']//following-sibling::p").textContent();
    // console.log("value is "+val);
    // expect(await page.locator(("//span[@class='ui-growl-title']//following-sibling::p")[0])).toHaveText("State = 1");   
    await page.locator(".ui-toggleswitch-slider").click();
    await page.waitForLoadState('domcontentloaded');
   // expect(page.locator("//span[@class='ui-growl-title']")).toHaveText("Checked");  
    expect(page.locator("//div[@class='ui-chkbox-box ui-widget ui-corner-all ui-state-default ui-state-disabled ui-state-disabled']")).toBeDisabled();  
    const dd= page.locator("//ul[@data-label='Cities']")
     dd.click();
     await page.locator("//li[@data-item-value='Miami']").click();
     await page.locator('//li[@data-item-value="London"]').click();
     await page.locator("//a[@aria-label='Close']").click();
       
});
