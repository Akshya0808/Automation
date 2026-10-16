import {test, expect} from "@playwright/test";
test.describe ("login function", () => {
   test ("login page", async({page, browserName }) => {    
    test.skip(browserName === "firefox","Test only runs in Chrome"
    );
      test.setTimeout(50_000);
      // Handle popup / alert / confirm / prompt
      
      page.on("dialog", async (dialog) => { 
      console.log("Popup message:", dialog.message()); 
      await dialog.accept(); 
      
      // Popup ko OK/Accept karega
               await page.goto("https://sqatools.in/automation-practice-page/", {timeout:40_000});
      await test.step("login page function",async() =>{
        await expect(page.locator("#username")).toBeVisible();
                await page.locator("#username").fill("Admin");
await page.locator("#password").fill("role");
await expect(page.locator("#password")).toHaveValue("role");
await page.locator('[id="address"]').fill("akakakak@gmail.com",{timeot:20_000});
await test.step("verify address", async () => {
await expect(page.locator("#address")).toHaveValue("akakakak@gmail.com",{timeout: 20_000});
});
await page.locator("#male").check();
await expect(page.locator("#male")).toBeChecked({timeout: 20_000});
await page.locator("#selenium").check();
await page.locator("#fileUpload").setInputFiles("C:/Users/HP/OneDrive/Desktop/Playwright/Playwright_Interview_Revision_Notes.pdf");
await page.locator("#internalLink").click();
await page.locator("#datePicker").fill("1994-08-08");
await page.locator("#timePicker").fill("16:20");
await page.locator("#dateTimePicker").fill("1994-08-08T16:20");
// iframe
await page.locator("#sampleIframe").contentFrame().getByRole("link", {name: "Learn more"}).click();
await page.pause();
      })
   })
})
