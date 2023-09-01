import { expect, type Locator, type Page } from "@playwright/test";

export class HomeComponents {
    //Variables
    readonly slider: Locator

    //Constructor
    constructor(readonly page:Page){
        this.slider = page.getByRole('img', { name: 'Imagen 2' })
    }

    //Methods
    async sliderHome(){
        expect(this.slider).toBeVisible
    }
}