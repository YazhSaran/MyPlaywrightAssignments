import {test} from '@playwright/test'
import logdata from '../utils/testdata.json'

for(let data of logdata)
{
test(`Multi data scenario ${data.TestCaseId}`,async({page})=>
{
await page.goto("https://login.salesforce.com/?locale=in");
await page.locator('#username').fill(data.UserName);
await page.locator('#password').fill(data.Password);
await page.locator('#Login').click();
})
}