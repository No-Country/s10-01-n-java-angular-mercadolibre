import { expect, type Locator, type Page } from "@playwright/test";

export class HomeComponents {
    //Variables
    readonly slider: Locator

    //Constructor
    constructor(readonly page:Page){
        this.slider = page.locator('tag=app-slider') 
    }

    //Methods
    async sliderHome(){
        expect(this.slider).toBeVisible
    }
}