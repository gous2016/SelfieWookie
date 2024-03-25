import { Wookie } from "./wookie";

/**
 * représente un selfie
 */

export class Selfie {
    id !: number;
    image !: string;
    imageAs64 !: string;
    wookie: Wookie;
    titre !: string;

    constructor(){
        this.wookie = new Wookie();
    }
}
