import{test as base} from '@playwright/test'

export const test=base.extend({
    myFixture: async ({},use)=>
    {
        console.log("fixture test");
        await use("fixture value");
    }
});

test('example test', async ({ myFixture }) => {
    console.log(myFixture);
});