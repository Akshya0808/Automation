import{test,expect} from "@playwright/test";
import {Loginpage} from '../../Playwright_vscode/tests/practicejs'
test("practice", async({page}) => {

   const login = new Loginpage()



const username = "Admin";
const password = "admin123"

   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
   await page.getByPlaceholder("Username").fill("Admin");
   await page.getByPlaceholder("Password").fill("admin123");
   await page.getByRole("button", {name:"Login"}).click();
   await page.pause();
});