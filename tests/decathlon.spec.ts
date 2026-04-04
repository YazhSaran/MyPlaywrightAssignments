import {test,expect} from '@playwright/test'

test("Practice with decathlon website",async({page})=>
{
    await page.goto("https://www.decathlon.in/");
    await expect(page).toHaveTitle("Buy Sporting Goods, Sportswear and Equipments | Download App");   
    const search=page.locator("(//span[contains(text(),'Search for')])[1]")
    await search.click();
    await expect(search).toBeEnabled()
    await page.locator("//input[contains(@placeholder,'Search For')]").fill("Shoes");
    await search.press("Enter");
    console.log(await page.title());
     await expect(page).toHaveTitle("Search | Shoes");  
     await page.locator("//span[contains(text(),'Men')]").click();
     await page.locator("//span[contains(text(),'Uk 10.5 - eu')]").click();
     await page.locator("//span[contains(text(),'Running')]").click();
     await page.locator("//span[text()='Most Relevant']").click();
     await page.locator("//a[contains(text(),'Price: High to Low')]").click();
     await page.locator("(//button[@aria-label='addToCart'])[1]").click();
     await page.locator("//div[text()='UK 10.5 - EU 45']").click();
     await page.locator("//span[text()='ADD TO CART']").click();
     await expect(page.locator("//h3[text()='Product added to cart']")).toBeVisible();
     await page.locator("//p[text()='Cart']").click();
     await page.waitForLoadState("domcontentloaded");
     const totalPrice=await page.locator("//div[@data-test-id='cart:cart-checkout-total-cart-value']/p").textContent();
     console.log("Total price in cart is "+totalPrice);
})