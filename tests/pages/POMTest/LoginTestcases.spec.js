import { test, expect } from "@playwright/test"
const { PageManager } = require("../pages/PageManager");

test("Login test", async ({ page }) => {
const pageManager = new PageManager(page);

    await page.goto("https://www.saucedemo.com/");

    await pageManager.loginP.login("standard_user", "secret_sauce");

    await pageManager.dashbaord.verifyDashboard();
});