import { Producto } from "./producto.interface";

export interface Modal {
    producto?: Producto;
    visible: boolean;
    textoAyuda: string;
}