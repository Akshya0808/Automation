import{test, expect} from "@playwright/test"
test.describe("groupoftest", () =>{
    test("Registration", async ({page,browserName}) => {
        test.skip(browserName==="firefox", "only run in chrome")
            await test.step("stepByStep", async () =>{
            await page.goto("https://demowebshop.tricentis.com/login?ReturnUrl=%2fcustomer%2forders", {timeout:40_000})
            await expect(page).toHaveTitle("Demo Web Shop. Login");
            await page.locator(".register-button").click({timeout:40_000});
            await expect(page.getByRole("heading", {name:"Register"})).toBeVisible();
            await page.locator("#gender-male").check();
            await expect(page.locator("#gender-male")).toBeChecked();
            await page.locator("#FirstName").fill("Akshay");
            await expect(page.locator("#FirstName")).toHaveValue("Akshay")
            await page.locator("#LastName").pressSequentially("Garg")
            await expect (page.locator("#LastName")).toHaveValue("Garg")
            await page.locator(".single-line").nth(2).pressSequentially("akshyagarg6@gmail.com")
            await expect(page.locator(".single-line").nth(2)).toHaveValue("akshyagarg6@gmail.com")
            await page.locator("#Password").fill("Xolo@700")
            await expect(page.locator("#Password")).toHaveValue("Xolo@700")
            await page.locator("#ConfirmPassword").pressSequentially("Xolo@700")
            await expect(page.locator("#ConfirmPassword")).toHaveValue("Xolo@700")
            await page.locator("#register-button").click();
            await expect (page.getByText("The specified email already exists", {exact:true})).toBeVisible();
            await page.pause();
        }); //test step close 
    }); // registration test case close
    test("Login", async({page,browserName}) => {
        test.skip(browserName==="firefox","only run in chrome")
        await test.step("StepByStep2", async()=> {
        await page.goto("https://demowebshop.tricentis.com/login?ReturnUrl=%2fcustomer%2forders")
        await page.locator("#Email").pressSequentially("akshyagarg6@gmail.com")
        await page.locator("#Password").fill("Xolo@700")
        await page.locator("#RememberMe").check();
        await page.locator(".login-button").click()
        await expect(page.locator(".account-page")).toContainText("My account - Orders");
        await page.pause();
        })
    }) // login test case close

    test("wrong user name", async({page}) => {
    await page.goto("https://demowebshop.tricentis.com/login?ReturnUrl=%2fcustomer%2forders")
        await page.locator("#Email").pressSequentially("arpopoprg0@gmail.com")
        await page.locator("#Password").fill("Xolo@700")
        await page.locator("#RememberMe").check();
        await page.locator(".login-button").click()
      await expect(page.locator(".validation-summary-errors")).toBeVisible();
})

test("homepage", async({page, browserName}) => {
    test.skip(browserName==="firefox", "only run in chrome");
    await test.step("steps", async() =>{
        await page.goto("https://demowebshop.tricentis.com/login?ReturnUrl=%2fcustomer%2forders")
        await page.locator("#Email").pressSequentially("akshyagarg6@gmail.com")
        await page.locator("#Password").fill("Xolo@700")
        await page.locator("#RememberMe").check();
        await page.locator(".login-button").click()
        await page.locator("#small-searchterms").fill("BOOKS"); 
        await page.pause();

 }) ;//test stepclose

}); // homepage test close


})// test suit close
