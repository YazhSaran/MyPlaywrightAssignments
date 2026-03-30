import {test,request,expect} from '@playwright/test'

test("@smoke get the users list",async ()=>
{
    let context=await request.newContext()
    let response=context.get("...")
    expect((await response).status()).toBe(200)
}
)