import { test, expect } from "@playwright/test";

const url = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
const username = "Admin";
const password = "admin123";

async function Login(page) {
    await page.goto(url, { timeout: 90_000 });
    await page.getByPlaceholder("username").fill(username);
    await page.getByPlaceholder("password").fill(password);
    await page.getByRole("button", { name: "Login" }).click();
}

test.describe("Login", () => {

    test("Login functionality", async ({ page, browserName }) => {

        test.setTimeout(50_000);

        test.skip(
            browserName === "firefox",
            "Test only runs in Chrome"
        );

        await test.step("Login to application", async () => {
            await Login(page);
        });

        await page.screenshot({
            path: "screenshots/dashboard.png"
        });

        await test.step("Verify Dashboard", async () => {
            await expect(
                page.getByRole("link", { name: "Dashboard" })
            ).toBeVisible();
        });

    });

});


test("Admin", async ({ page, browserName }) => {

    test.setTimeout(90_000);

    test.skip(
        browserName === "firefox",
        "Test only runs in Chrome"
    );

    await test.step("Login to application", async () => {
        await Login(page);
    });

    await test.step("Open Admin page", async () => {
        await page.getByRole("link", { name: "Admin" }).click();
    });

    await test.step("Verify System Users", async () => {
        await expect(
            page.getByText("System Users")
        ).toBeVisible();
    });

    await test.step("Click Add button", async () => {
        await page.getByRole("button", { name: "Add" }).click();
    });

    await test.step("Verify Add User page", async () => {
        await expect(
            page.getByText("Add User")
        ).toBeVisible();
    });

    await test.step("Select User Role", async () => {
        await page.locator(".oxd-select-text").nth(0).click();

        await page.getByRole("option", {
            name: "Admin",
            exact: true
        }).click();
    });

    await test.step("Select Status", async () => {
        await page.locator(".oxd-select-text").nth(1).click();

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


test.describe("Leave Function", () => {

    test("Leave functionality", async ({ page, browserName }) => {

        test.setTimeout(50_000);

        test.skip(
            browserName === "firefox",
            "Test only runs in Chrome"
        );

        await test.step("Login to application", async () => {
            await Login(page);
        });

        await test.step("Open Leave page", async () => {
            await page.getByRole("link", {
                name: "Leave"
            }).click();
        });

    });

});