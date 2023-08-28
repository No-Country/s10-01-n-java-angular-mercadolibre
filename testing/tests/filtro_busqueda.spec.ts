// @ts-check
import { test, expect, type Page } from "@playwright/test";

const URL = 'https://meliclon.web.app/home'

test.describe("Busqueda y Filtros de Productos", () => {
 test.use({ viewport: { width: 390, height: 844 } });
    test.beforeEach(async ({ page }) => { 
      await page.goto(URL);
    
    });

test.afterEach( async ({ page }, testInfo) => {
    console.log(`Finished ${testInfo.title} with status ${testInfo.status}`);

    if (testInfo.status !== testInfo.expectedStatus)
        console.log(`Did not run as expected, ended up at ${page.url()}`);
    });    
   

    test("Filtro de Busqueda", async ({ page }) => { 
        // Dado que un usuario se encuentra en la página principal de la tienda
        // Cuando el usuario ingresa "<termino_busqueda>" en la barra de búsqueda
        // Y el usuario presiona "Enter" o hace clic en el botón de búsqueda
        // Entonces el usuario debería ver resultados que coincidan con "<termino_busqueda>"
        // Cuando el usuario aplica filtros como "<categoria>", "<precio>"
        // Entonces los resultados deberían actualizarse según los filtros aplicados    
   
    });

});
