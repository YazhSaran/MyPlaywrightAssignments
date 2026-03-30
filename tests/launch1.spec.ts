import{test} from '@playwright/test'

/* 
test("test with page",async({page})=>
{
    await page.goto("https://www.facebook.com/")
    await page.waitForLoadState('domcontentloaded')
    const title=await page.title();
    console.log(title)
    const url=page.url()
    console.log(url)


}); */
/* 
test("test with page",async({page})=>
{
    await page.goto("https://www.facebook.com/")
    await page.waitForLoadState('domcontentloaded')
    const title=await page.title();
    console.log(title)
    const url=page.url()
    console.log(url)


});
 */
test("test with page",async({page})=>
{
    await page.goto("https://www.leafground.com/select.xhtml")
    await page.waitForLoadState('domcontentloaded')
    let dropDown= page.locator("//select[@class='ui-selectonemenu']/option")
    const cnt=await dropDown.count()
    for(let i=1;i<cnt;i++)
    {
      console.log(await dropDown.nth(i).innerText());
    }

    await page.locator("(//div[@aria-haspopup='listbox'])[1]").click()
    await page.locator("//li[text()='India']").click()
    


});