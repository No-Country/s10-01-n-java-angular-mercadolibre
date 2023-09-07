import { expect, type Locator, type Page } from "@playwright/test";

export class DataUsers {
    email: string
    password: string
    nombre: string
    alias: string
    nacimiento: string
    dni: number
    direccion: string
    telefono: number

    constructor(email: string, password: string, nombre: string){
        this.email = email
        this.password = password
        this.nombre = nombre
    } 
}

export const userA = new DataUsers('userA@mail.com','Abcd1234*','NombreKApellidoA')
export const userB = new DataUsers('userB@mail.com','Abcd1234*','NombreMApellidoA')
 
