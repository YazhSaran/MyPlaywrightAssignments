import {test, chromium} from '@playwright/test'

test("Check browsers launch",async({})=>
{
   const browser1= await chromium.launch({channel: 'msedge'});
   const contxt1=await browser1.newContext();
   const page1=await contxt1.newPage();
   await page1.goto(" https://www.redbus.in");
   await page1.waitForLoadState('domcontentloaded')
    const title=await page1.title();
    console.log(title)
    const url=page1.url()
    console.log(url)
    const browser2= await chromium.launch({channel:'chrome'});
   const contxt2=await browser2.newContext();
   const page2=await contxt2.newPage();
   await page2.goto(" https://www.flipkart.com/");
   await page2.waitForLoadState('domcontentloaded')
    const title1=await page2.title();
    console.log(title1)
    const url1=page2.url()
    console.log(url1)
}
)