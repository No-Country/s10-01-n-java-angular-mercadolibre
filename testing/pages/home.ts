import { expect, type Locator, type Page } from "@playwright/test";

export class HomeComponents {
    //Variables
    readonly slider: Locator
    readonly searchBox: Locator
    readonly cart: Locator

    //Constructor
    constructor(readonly page:Page){
        this.slider = page.getByRole('img', { name: 'Imagen 2' })
        this.searchBox = page.getByRole('searchbox')
        this.cart = page.locator('/html/body/app-root/app-home/app-navbar/div/div[1]/p/fa-icon/svg/path')
    }

    //Methods
    async sliderHome(){
        expect(this.slider).toBeVisible
    }

    async search(){
        expect(this.searchBox).toBeVisible
        this.searchBox.click
    }

    async typeSearch(text: string){
        console.log('Funcion type search')
        await this.searchBox.fill(text)
    }

    async cartItem(){
        console.log(this.cart)
    }
}