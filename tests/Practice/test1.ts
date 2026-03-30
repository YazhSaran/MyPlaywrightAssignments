import {chromium} from '@playwright/test'

(async()=>
{
    const browser=await chromium.launch({headless:false})
    const context=await browser.newContext()
    const page=await context.newPage()
    
})();