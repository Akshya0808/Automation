import {test, expect} from "@playwright/test"
test.describe("JustPractice", () => {
    test.beforeEach("hooks", async({page}) => {
        await page.goto("https://sqatools.in/automation-practice-page/")
        console.log("start to run the test case");
    }); // beforeEach hooks close
    test.afterAll("afteralltest", async({}) => {
        console.log("testing has been completed")
    }); //after all hook
    test("username", async({page}) => {
        await test.step("step", async({}) => {
        await page.locator("#username").fill("akshay");
        await expect(page.locator("#username")).toBeVisible;
        }); // test step close
    }) // username test close
}); // test suit close