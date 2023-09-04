// @ts-check
import { test, expect, type Page } from "@playwright/test";
import { HomeComponents } from "../pages/home";

const URL = 'https://meliclon.web.app/home'
let homeComponents: HomeComponents

test.describe("Version 1.0", () => {
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

    test("Búsqueda y Filtros de Productos", async ({ page }) => { 
        await test.step('Dado que un usuario se encuentra en la página principal de la tienda', async function() {
            
        })
        await test.step('Cuando el usuario ingresa "<termino_busqueda>" en la barra de búsqueda', async function() {
            await homeComponents.search()
            await homeComponents.typeSearch('sapee')
            
        })
        await test.step('Y el usuario presiona "Enter" o hace clic en el botón de búsqueda', async function() {
            
        })
        await test.step('Entonces el usuario debería ver resultados que coincidan con "<termino_busqueda>"', async function() {
            
        })
        await test.step('Cuando el usuario aplica filtros como "<categoria>", "<precio>"', async function() {
            
        })
        await test.step('Entonces los resultados deberían actualizarse según los filtros aplicados', async function() {
            
        })
        // Dado que un usuario se encuentra en la página principal de la tienda
        // Cuando el usuario ingresa "<termino_busqueda>" en la barra de búsqueda
        // Y el usuario presiona "Enter" o hace clic en el botón de búsqueda
        // Entonces el usuario debería ver resultados que coincidan con "<termino_busqueda>"
        // Cuando el usuario aplica filtros como "<categoria>", "<precio>"
        // Entonces los resultados deberían actualizarse según los filtros aplicados  
    });

});
