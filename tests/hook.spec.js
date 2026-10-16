import { test, expect } from "@playwright/test";
test.describe("OrangeHRM Tests", () => {


    // =========================
    // BEFORE EACH - LOGIN
    // =========================

    test.beforeEach(async ({ page, browserName }) => {

        test.setTimeout(50_000);

        test.skip(
            browserName === "firefox",
            "Test only runs in Chrome"
        );

        await test.step("Open Login Page", async () => {
            await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", { timeout: 90_000 });
        });

        await test.step("Enter Username", async () => {
            await page.getByPlaceholder("username").fill("Admin");
        });

        await test.step("Enter Password", async () => {
            await page.getByPlaceholder("password").fill("admin123");
        });

        await test.step("Click Login", async () => {
            await page.getByRole("button", { name: "Login" }).click();
        });

    });

   test.afterAll(async () => {
   console.log("All tests completed");
});



    // =========================
    // LOGIN TEST
    // =========================

    test("Login functionality", async ({ page }) => {

        await test.step("Verify Dashboard", async () => {

            await expect(
                page.getByRole("link", { name: "Dashboard" })
            ).toBeVisible();

        });

        await page.screenshot({
            path: "screenshots/dashboard.png"
        });

    });


    // =========================
    // ADMIN TEST
    // =========================

    test("Admin", async ({ page }) => {

        test.setTimeout(90_000);

        await test.step("Open Admin page", async () => {

            await page.getByRole("link", {
                name: "Admin"
            }).click();

        });

        await test.step("Verify System Users", async () => {

            await expect(
                page.getByText("System Users")
            ).toBeVisible();

        });

        await test.step("Click Add button", async () => {

            await page.getByRole("button", {
                name: "Add"
            }).click();

        });

        await test.step("Verify Add User page", async () => {

            await expect(
                page.getByText("Add User")
            ).toBeVisible();

        });

        await test.step("Select User Role", async () => {

            await page.locator(".oxd-select-text")
                .nth(0)
                .click();

            await page.getByRole("option", {
                name: "Admin",
                exact: true
            }).click();

        });

        await test.step("Select Status", async () => {

            await page.locator(".oxd-select-text")
                .nth(1)
                .click();

            await page.getByText("Enabled", {
                exact: true
            }).click();

        });

        await test.step("Select Employee", async () => {

            await page
                .getByPlaceholder("Type for hints...")
                .fill("Emiliano Martin");

            await page
                .getByRole("option", {
                    name: "Emiliano Martin"
                })
                .first()
                .click();

        });

        await test.step("Enter Username", async () => {

            await page
                .locator(".oxd-input--active")
                .nth(1)
                .fill("@akshay0808");

        });

        await test.step("Enter Password", async () => {

            await page
                .locator('input[type="password"]')
                .nth(0)
                .fill("abc12345");

            await page
                .locator('input[type="password"]')
                .nth(1)
                .fill("abc12345");

        });

        await test.step("Save User", async () => {

            await page.getByRole("button", {
                name: "Save"
            }).click();

        });

    });


    // =========================
    // LEAVE TEST
    // =========================

    test("Leave functionality", async ({ page }) => {

        test.setTimeout(50_000);

        await test.step("Open Leave page", async () => {

            await page.getByRole("link", {
                name: "Leave"
            }).click();

        });

    });


});
