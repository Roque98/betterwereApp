export interface Producto {
    _id?: string;
    codigo_producto: number;
    url_fotografia: string;
    nombre_producto: string;
    stock: number;
    descripcion?: string;
    detalles?: string;
    precio?:number;
    precio_especial?: number;
    condiciones_precio_especial?: string;
    instructivo?: string;
}

