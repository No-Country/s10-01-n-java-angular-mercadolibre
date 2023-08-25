// @ts-check
import { test, expect, type Page } from "@playwright/test";
import { LoginPage } from "../pages/login";
import { userK, userM } from "../pages/usuarios";

let loginPage: LoginPage;
const URL = 'https://meliclon.web.app/home'

test.describe("Login en Sistema", () => {
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
   
    test("Login_001 | ID_01 | Login Exitoso", async ({ page }) => {
    // dado que el usuario abre la pagina de login    
    // cuando usuario y contraseña    
    // y realiza click en iniciar session     
    // entonces se muestra el home del usuario    
    // y realiza click en perfil    
    // entonces se ingresa al perfil del usuario    
    // y se comprueba el nombre del usuario en sistema
    // y realiza click en cerrar session    
    // entonces redirecciona al on-boarding   
    });

    test("Login_001 | ID_02 | Password Incorrecta", async ({ page }) => {
    // dado que el usuario abre la pagina de login    
    // cuando usuario y contraseña    
    // y realiza click en iniciar session    
    // el sistema muestra un mensaje en pantalla usuario y/o password incorrecto
    // y se mantiene en url      
    });
   
    test("Login_001 | ID_03 | Todos los campos vacios", async ({ page }) => {
    // dado que el usuario abre la pagina de login    
    // y realiza click en iniciar session    
    // el sistema muestra un mensaje en pantalla Email y password requeridos
    // y se mantiene en url 
    });

    test("Login_001 | ID_04 | Campo de Password Vacio", async ({ page }) => {
    // Dado estoy en la página de inicio de sesión
    // Cuando el usuario ingresa Email valido y password vacio
    // Y el usuario hace clic en el button "Confirmar"
    // Y El sistema debe mostrar un mensaje de password es requerdio"    
    // Entonces el sistema debe mantenerse en la pagina de login 
    });

    test("Login_001 | ID_05 | Campo de Email Vacio", async ({ page }) => {
    // Dado estoy en la página de inicio de sesión
    // Cuando el usuario deja Email vacio y password valido
    // Y el usuario hace clic en el button "Confirmar"
    // Entonces el sistema debe mantenerse en la pagina de login
    // Y El sistema debe mostrar un mensaje de Email es requerdio" 
    });

});
