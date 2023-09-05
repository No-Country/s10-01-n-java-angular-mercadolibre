// @ts-check
import { test, expect, type Page } from "@playwright/test";
import { LoginPage } from "../pages/login";
import { HomeComponents } from "../pages/home";


let loginPage: LoginPage;
let homeComponents: HomeComponents
const URL = 'https://meliclon.web.app/home'

test.describe("Home Elements", () => {
 test.use({ viewport: { width: 390, height: 844 } });
    test.beforeEach(async ({ page }) => { 
      await page.goto(URL);
      homeComponents = new HomeComponents(page)
    });

test.afterEach( async ({ page }, testInfo) => {
    console.log(`Finished ${testInfo.title} with status ${testInfo.status}`);

    if (testInfo.status !== testInfo.expectedStatus)
        console.log(`Did not run as expected, ended up at ${page.url()}`);
    });    
   

    test("Home elements", async ({ page }) => {
        
    await homeComponents.sliderHome()

    });
});
