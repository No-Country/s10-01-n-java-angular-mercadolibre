// @ts-check
import { test, expect, type Page } from "@playwright/test";
import { LoginPage } from "../pages/login";
import { userA, userB } from "../pages/usuarios";

let loginPage: LoginPage;
const URL = 'https://meliclon.web.app/home'
const localHost = "http://localhost:4200/inicio"

test.describe("Version 1.0", () => {
 test.use({ viewport: { width: 390, height: 844 } });
    test.beforeEach(async ({ page }) => { 
      await page.goto(URL);
      loginPage = new LoginPage(page)
    });

test.afterEach( async ({ page }, testInfo) => {
    console.log(`Finished ${testInfo.title} with status ${testInfo.status}`);

    if (testInfo.status !== testInfo.expectedStatus)
        console.log(`Did not run as expected, ended up at ${page.url()}`);
    });    

    test("successful login", async ({ page }) => {
        await test.step('Navigate to the website',async function() {
            
        })
        await test.step('Enter the username and password',async function() {
            
        })
        await test.step('press the Enter key',async function() {
            
        })
        await test.step('Verify that the URL is now the inventory page URL',async function() {
            
        })
        // Navigate to the website
        //cy.visit('the-testwebsite.com')

        // Enter the username
        //cy.get('#username').type('user09876')

        // Enter the password and press the Enter key
        //cy.get('#password').type('testpassword{enter}')

        // Verify that the URL is now the inventory page URL
        //cy.url().should('include', '/inventory.html')
    });
});
