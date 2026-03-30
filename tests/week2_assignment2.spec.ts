import {test} from '@playwright/test';

test('Verify the login functionality of the application', async ({page}) => {
await page.goto('http://leaftaps.com/opentaps/control/main');
await page.locator('#username').fill('Demosalesmanager')
await page.locator('#password').fill('crmsfa')
await page.getByRole('button',{name:'Login'}).click();
await page.getByRole('link',{name:'CRM/SFA'}).click();
await page.waitForLoadState('domcontentloaded');
await page.locator("//a[text()='Leads']").click();
await page.waitForLoadState('domcontentloaded');
await page.locator("//a[text()='Create Lead']").click();
await page.locator('#createLeadForm_companyName').fill('pinkyforest')
await page.locator('#createLeadForm_firstName').fill('SARANsd')
await page.locator('#createLeadForm_personalTitle').fill('check1')
await page.locator('#createLeadForm_generalProfTitle').fill('Engineer')
await page.locator('#createLeadForm_annualRevenue').fill('1000')
await page.locator('#createLeadForm_departmentName').fill('Engineer')
await page.locator('#createLeadForm_primaryPhoneNumber').fill('9999223453')
await page.locator(".smallSubmit").click();

});