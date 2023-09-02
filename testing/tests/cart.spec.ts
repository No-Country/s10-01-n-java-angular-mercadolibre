// @ts-check
import { test, expect, type Page } from "@playwright/test";

const URL = 'https://meliclon.web.app/home'

test.describe("Agregar y comprar producto", () => {
 test.use({ viewport: { width: 390, height: 844 } });
    test.beforeEach(async ({ page }) => { 
      await page.goto(URL);
    
    });

test.afterEach( async ({ page }, testInfo) => {
    console.log(`Finished ${testInfo.title} with status ${testInfo.status}`);

    if (testInfo.status !== testInfo.expectedStatus)
        console.log(`Did not run as expected, ended up at ${page.url()}`);
    });    
   
    test("Agregar y comprar producto", async ({ page }) => { 
        // Dado que un usuario se encuentra en la página de inicio
        // Cuando el usuario navega a la página de un producto
        // Y el usuario agrega el producto al carrito
        // Y el usuario va al carrito de compras
        // Entonces el usuario debería ver el producto en el carrito
        // Cuando el usuario inicia el proceso de pago
        // Y el usuario selecciona un método de pago válido
        // Y el usuario completa el proceso de pago
        // Entonces el usuario debería ver una confirmación de compra
   
    });
});