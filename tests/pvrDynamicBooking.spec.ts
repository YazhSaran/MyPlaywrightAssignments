import {test, expect} from '@playwright/test'

test("Booking Dynamic ticket",async({page})=>
{
    await page.goto("https://www.pvrcinemas.com/");
    await page.waitForLoadState('load');  
    //await page.getByRole('img',{name:'custoArrowB'}).click();
    await page.locator("//h6[text()='Chennai']/parent::div").click();
    
    await page.locator("//span[text()='Cinema']").click();
    await page.locator("//span[text()='Select Cinema']").click();
    await page.locator("//li//span[text()='INOX National,Virugambakkam Chennai']").click();
    //await page.locator("//span[text()='Select Date']").click();
    await page.locator("//span[text()='Today']").click();
    //await page.getByRole('button',{name:'Select Movie'}).click();
    await page.locator("//li//span[text()='BIKER']").click();
    //await page.locator("//span[text()='Select Timing']").click();
    await page.locator("//span[text()='02:40 PM']").click();
    await page.locator("//button[@type='submit']/span").click();
    await page.waitForLoadState('load');  
    await page.locator('.loading-spinner').waitFor({ state: 'hidden' });     
   await page.locator('//button[text()="Accept"]').waitFor({ state: 'visible' });

await page.locator('//button[text()="Accept"]').click();
    await page.locator("//span[@id='SL.SILVER|C:6']").click();
    const seatNumber=await page.locator("//div[@class='seat-number']/p").textContent();
    console.log(seatNumber);
    expect(seatNumber).toBe("C6");
    const movieName=await page.locator("//div[@class='summary-movies-content']/h5").textContent();
    console.log(movieName);
    expect(movieName).toBe("BIKER");
    const movieAmount=await page.locator("//div[@class='grand-prices']/h6").textContent();
    console.log(movieAmount);
    expect(movieAmount).not.toBe("");
    await expect(page).toHaveTitle("PVR Cinemas");
    await page.locator("//button[text()='Proceed']").click();


})