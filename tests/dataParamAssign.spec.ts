import {test} from "@playwright/test"
import {parse} from "csv-parse/sync"
import path from 'path'
import fs from 'fs'
let value:any[]=parse(fs.readFileSync("data/createLead.csv"),{columns:true, skip_empty_lines:true})


for(let login of value){
test(`learn to read data from JSON ${login.TestCaseId}`, async({page})=>{

    await page.goto('http://leaftaps.com/opentaps/control/main')
    await page.locator('#username').fill(login.UserName)
    await page.locator('input[id="password"]').fill(login.Password)
    await page.locator('.decorativeSubmit').click()
    await page.locator('text=CRM/SFA').click()
    await page.getByRole('link', { name: 'Leads' }).click()
    await page.getByRole('link', { name: 'Create Lead' }).click()
    await page.locator('#createLeadForm_companyName').fill(login.CompanyName)
    await page.locator('#createLeadForm_firstName').fill(login.FirstName)//FirstName,LastName,Source,MarketingCampaignId,IndustryEnumId,GeneralStateProvinceGeoId,OwnershipEnumId
    await page.locator('#createLeadForm_lastName').fill(login.LastName)
    await page.locator('#createLeadForm_dataSourceId').selectOption(login.Source)
    //. Get the count and print all the values in the Marketing Campaign dropdown
    const dropdownMrkt=await page.locator('#createLeadForm_marketingCampaignId').allTextContents();
    for(let mrkt of dropdownMrkt)
    {
        console.log(mrkt);
    }
    await page.locator('#createLeadForm_marketingCampaignId').selectOption(login.MarketingCampaignId);
    await page.locator('#createLeadForm_industryEnumId').selectOption(login.IndustryEnumId);
     const ddState=  await page.locator('#createLeadForm_generalStateProvinceGeoId').allTextContents();
     for (let state of ddState)
     {
        console.log("State details: "+state);
     }
    await page.locator('#createLeadForm_generalStateProvinceGeoId').selectOption(login.GeneralStateProvinceGeoId);
   
    await page.locator('#createLeadForm_ownershipEnumId').selectOption(login.OwnershipEnumId);
   await page.locator('.smallSubmit').click()

    
 
})
}