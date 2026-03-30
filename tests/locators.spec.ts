import{test, expect} from '@playwright/test'


test("create Lead",async({page})=>
{
  await page.goto("https://login.salesforce.com/")
  await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')
  await page.locator('#password').fill('TestLeaf@2025')
  await page.click('#Login')
  await page.waitForLoadState('domcontentloaded');
    await page.locator("//button[@title='App Launcher']").waitFor();
  await page.locator("//button[@title='App Launcher']").click();
  await page.locator("//button[text()='View All']").click();
  await page.locator("//p[text()='Sales']").click();
    await page.waitForLoadState('domcontentloaded');
  await page.locator("//a[@title='Leads']").click();
  await page.locator("//div[@title='New']").click();  
  const dd=await page.locator("//button[@name='salutation']");
  await dd.click();
  await page.locator("//span[@title='Mrs.']").click();
  await page.locator("//input[@name='firstName']").fill("Saranya");
  await page.locator("//input[@name='lastName']").fill("Siva");
  await page.locator('//input[@name="Company"]').fill("xorVer");
  await page.locator("//button[@name='SaveEdit']").click();
  const text=await page.locator("//div[@data-key='success']//a/div").innerText();
  console.log(text);
  expect(text).toContain("Mrs. Saranya Siva");
});

test("Create Individuals",async({page})=>
{
  await page.goto("https://login.salesforce.com/")
  await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')
  await page.locator('#password').fill('TestLeaf@2025')
  await page.click('#Login')
  await page.waitForLoadState('domcontentloaded');
  await page.locator("//button[@title='App Launcher']").waitFor();
  await page.locator("//button[@title='App Launcher']").click();
  await page.locator("//button[text()='View All']").click();
  await page.locator("//a[@data-label='Individuals']").click();
  await page.waitForLoadState('domcontentloaded');
  await page.locator("//a[@title='New']").click();  
  await page.getByPlaceholder('Last Name').fill("Sara456"); 
  await page.locator("//span[text()='Save']//parent::button").click();
  const text=await page.locator("//div[@data-key='success']//span[contains(@class,'toastMessage')]").innerText();
  console.log(text);
  expect(text).toContain("Sara456");
});

test("Edit  Individuals",async({page})=>
{
  await page.goto("https://login.salesforce.com/")
  await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')
  await page.locator('#password').fill('TestLeaf@2025')
  await page.click('#Login')
  await page.waitForLoadState('domcontentloaded');
  await page.locator("//button[@title='App Launcher']").waitFor();
  await page.locator("//button[@title='App Launcher']").click();
  await page.locator("//button[text()='View All']").click();
  await page.locator("//a[@data-label='Individuals']").click();
  await page.waitForLoadState('domcontentloaded');
  await page.locator("//input[@name='Individual-search-input']").fill("Sara456");
  await page.locator("//input[@name='Individual-search-input']").press('Enter');
  await page.locator("//span[text()='Show Actions']/parent::button").nth(1).click(); 
  await page.locator("//a[@title='Edit']").click();
     const dd=await page.locator("//div[contains(@class,'salutation')]//a");
  await dd.click();
  await page.locator("//a[@title='Ms.']").click();
  await page.getByPlaceholder('First Name').fill("Saranya"); 
  await page.locator("//span[text()='Save']//parent::button").click();
  const text=await page.locator("//div[@data-key='success']//span[contains(@class,'toastMessage')]").innerText();
  console.log(text);
  expect(text).toContain("Sara456");
});

test.only('Verify the create and edit Lead', async ({page}) => {
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
await page.locator('#createLeadForm_lastName').fill('siva')
await page.locator('#createLeadForm_personalTitle').fill('check1')
await page.locator('#createLeadForm_generalProfTitle').fill('Engineer')
await page.locator('#createLeadForm_annualRevenue').fill('1000')
await page.locator('#createLeadForm_departmentName').fill('Engineer')
await page.locator('#createLeadForm_primaryPhoneNumber').fill('9999223453')
await page.locator(".smallSubmit").click();
await page.waitForLoadState('domcontentloaded');
await page.locator("//a[text()='Edit']").click();
await page.locator('#updateLeadForm_companyName').fill('pinkyforest1')
await page.locator("//input[@value='Update']").click();

});