import {expect, test} from "@playwright/test"


test('learn to handle frames using index',async({page})=>{


await page.goto('https://www.leafground.com/frame.xhtml')



const Allframes=page.frames() 
const Noofframes=Allframes.length //mP->0 ,f1->1,f2->2,f3->3,f4->4


console.log(Noofframes);  //no of frames in a page.



//switch to frame with index.


const frame1=Allframes[1]
await frame1.locator('#Click').click()
console.log("frame1 is clicked");




//nested frame->using index we can directly we can switch to the nested frame
const frame4=Allframes[4]
await frame4.locator('#Click').click()
console.log("frame4 is clicked");



})

test.only("Learning nested frames",async({page})=>
{
await page.goto('https://www.leafground.com/frame.xhtml')

const frame2=page.frame({name:'frame2'});
await frame2?.locator('#Click').click();
const buttnTest=await frame2?.locator('#Click').textContent()
console.log(buttnTest);
expect(buttnTest).toBe("Hurray! You Clicked Me.");
});