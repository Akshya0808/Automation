import {test, expect} from "@playwright/test"
test.describe("Practice", () => {
    test.beforeEach("Loginpage", async ({page}) => {
        await page.goto("https://sqatools.in/automation-practice-page/");
 }); // beforeEach close

 test.afterAll("aftercallcae", async({}) => {
    console.log("test has been complated")
    
 }); //afterall case close

    test.afterEach("aftereach", async({page}) => {
   console.log("close case")
    }); //afte each close


 test("NewPage", async({page, browserName}) => {
    test.skip(browserName==="firefox", "only run in chrome")
    await test.step("stepcase", async({})=> {
            await page.locator("#username").fill("akshay");
            await expect(page.locator("#username")).toHaveValue("akshay");
            }); // test step case close
}); // NewPage test close

test("secondstep",{tag:"@smoke"}, async({page}) => {
    await page.locator("#password").fill("bhide")
    await expect(page.locator("#password")).toHaveValue("bhide")
})


}); // test suit close
