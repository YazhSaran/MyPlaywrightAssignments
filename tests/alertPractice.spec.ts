import {test} from "@playwright/test"


test(' Program to handle alerts',async ({page}) => {


await page.goto('https://www.leafground.com/alert.xhtml')




page.on("dialog", async(alert)=>{


    const alertmessage=alert.message()
    console.log(alertmessage);


    const alertType=alert.type()
    console.log(alertType);


    if(alertType==="confirm"){
      await alert.dismiss()
    }else if(alertType=="prompt"){
      await  alert.accept("Playwright Automation")
    }
     else{
       await alert.accept()
     }
})



await page.locator("(//span[text()='Show'])[1]").click()
await page.locator("(//span[text()='Show'])[2]").click()
await page.locator("(//span[text()='Show'])[5]").click()
    
})