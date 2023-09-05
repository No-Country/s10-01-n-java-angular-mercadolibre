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

    test("Login de Usuario Exitoso", async ({ page }) => {
        await test.step('dado que el usuario abre la pagina de login',async function() {
            
        })
        await test.step('cuando ingreso usuario y contraseña ',async function() {
            
        })
        await test.step('y realiza click en iniciar session',async function() {
            
        })
        await test.step('entonces se muestra el nombre de usuario',async function() {
            
        })
        await test.step('y se verifica si la URL es correcta',async function() {
            
        }) 
    });
});
