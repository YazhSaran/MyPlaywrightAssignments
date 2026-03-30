import {test,chromium} from '@playwright/test'

test('Launch browser', async()=>
{
    const browser=await chromium.launch();
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("http://leaftaps.com/opentaps/control/main")

}
);