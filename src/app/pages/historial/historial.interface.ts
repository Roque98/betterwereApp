export default interface RegistroHistorial {
  cantidad: number;
  codigo_producto: string;
  id_usuario: string;
  nombre_producto: string
  fecha: Date;
  tipo_operacion: string;
}