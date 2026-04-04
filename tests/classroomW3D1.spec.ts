import {test,expect} from '@playwright/test'


test("Practice advanced xpath", async({page})=>
{
    await page.goto("https://login.salesforce.com/");
    await page.waitForLoadState('domcontentloaded');
    await page.locator("//label[text()='Password']/preceding::input[@id='username']").fill("dilipkumar.rajendran@testleaf.com");
    await page.locator("//label[text()='Password']/following-sibling::input[@id='password']").fill("TestLeaf@2025");
    await page.locator('//input[@id="Login"]').click();
})

test("Practice playwright locators", async({page})=>
{
    await page.goto("https://parabank.parasoft.com/parabank/index.htm");
    await page.getByRole('link',{name:"Forgot login info?"}).click();
    await page.getByAltText('ParaBank').click();
    await page.getByText('Locations').first().click();
    await page.waitForLoadState('domcontentloaded');
    await page.getByRole('button',{name:'Search'}).click();
    await page.getByPlaceholder('Search').fill("chennai");

});

test.only("Practice with assertions", async({page})=>
{
    await page.goto("https://leafground.com/input.xhtml");
    await expect(page.getByPlaceholder('Disabled')).toBeDisabled();
    await expect(page.getByPlaceholder('Babu Manickam')).toBeEditable();
    await page.getByPlaceholder('Babu Manickam').fill("Saranya")
    await expect.soft(page.locator("//input[@value='Chennai']")).toBeDisabled();
    await page.locator("//input[contains(@value,'Can you clear me')]").fill("");
    await page.locator("//input[contains(@value,'Can you clear me')]").fill("playwright learning");


});