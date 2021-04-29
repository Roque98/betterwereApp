import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Modal } from 'src/app/interface/modal.interface';
import { ProductosService } from 'src/app/services/productos.service';
import { Producto } from '../../interface/producto.interface';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css'],
})
export class InventarioComponent implements OnInit {
  stockActual: number;
  stockNuevo: number;
  cargando = false;
  error = '';
  subscription: Subscription;

  // Barra de busqueda
  productoBuscado: string = '';

  // producto card
  productos: Producto[];

  // modal
  modalActualizarInventario: Modal = {
    visible: false,
    textoAyuda:
      'Cantidad  de productos que se van a agreagar o retirar del inventario',
  };

  modalConfirmar: Modal = {
    visible: false,
    textoAyuda: '',
  };

  // texto ayuda
  textoAyuda =
    'Busca un producto, seleccionalo e introduce la cantidad de productos que se agregaran o retiraran del inventario';

  constructor(
    public productoService: ProductosService,
  ) {}

  ngOnInit(): void {}

  // Barra de busqueda
  actualizarValorDeBusqueda($event) {    
    this.productoBuscado = $event;
    this.error = '';
    this.getProductos();
  }

  // Productos
  getProductos() {
      this.cargando = true;
      this.productoService.getProductos(this.productoBuscado)
        .then((res) => {
          console.log(res);
          
          this.productos = res['data'];        
        })
        .catch((error) => {
          this.error = error['message'];
        })
        .finally(() => {
          this.cargando = false;
        })

  }

  // Modal
  abrirModal(producto: Producto) {
    this.modalActualizarInventario.producto = producto;
    this.modalConfirmar.producto = producto;

    this.modalActualizarInventario.visible = true;
  }

  recibirDataModalAgregar(stock:number) {
    let operacionRealizada = '';
    this.modalActualizarInventario.visible = false;
    this.stockNuevo = stock;
    this.stockActual = this.modalActualizarInventario.producto.stock;
    
    
    if (stock !== 0) {
      stock > 0
        ? (operacionRealizada = 'agregar')
        : (operacionRealizada = 'retirar');
      this.modalConfirmar.textoAyuda = `¿Esta seguro de ${operacionRealizada} ${this.stockNuevo} unidades?`;
      this.modalConfirmar.visible = true;
    }
  }

  cerrarModalConfirmar(confirmar) {
    this.modalConfirmar.visible = false;
    if (confirmar) {
      this.updateInventario(
        this.modalConfirmar.producto.codigo_producto,
        this.stockNuevo + this.stockActual,
        this.modalActualizarInventario.producto.nombre_producto, 
        this.stockNuevo>0? 'entrada' : 'salida',
        this.stockNuevo
      );
    } else {
      this.modalActualizarInventario.visible = true;
    }
  }

  // Agregar stock
  updateInventario(codigo_producto: string, nuevoStock: number, nombre_producto: string, tipo_operacion: 'entrada' | 'salida', cantidad: number) {
    this.cargando = true;
    this.productoService.setStock(codigo_producto, nuevoStock, { nombre_producto, tipo_operacion, cantidad })
      .then((res) => {
        this.actualizarValorDeBusqueda(codigo_producto)
      })
      .finally(() => {
        this.cargando = false;
      })
  }
}
