import { Component, OnInit } from '@angular/core';
import { Modal } from 'src/app/interface/modal.interface';
import { ProductosService } from 'src/app/services/productos.service';
import { Producto } from '../../interface/producto.interface';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css'],
})
export class InventarioComponent implements OnInit {
  stock: number;
  cargando = false;
  error = '';

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
    this.getProductos();
  }

  // Productos
  getProductos() {
    // this.productos = this.productoService.getProductos(this.productoBuscado);
    // console.log(this.productos);
    this.cargando = true;
    this.productoService.getProductos(this.productoBuscado)
      .then((res) => {
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

  recibirDataModalAgregar($event) {
    let operacionRealizada = '';
    this.modalActualizarInventario.visible = false;
    this.stock = $event;

    if ($event !== 0) {
      $event > 0
        ? (operacionRealizada = 'agregar')
        : (operacionRealizada = 'retirar');
      this.modalConfirmar.textoAyuda = `¿Esta seguro de ${operacionRealizada} ${this.stock} unidades?`;
      this.modalConfirmar.visible = true;
    }
  }

  cerrarModalConfirmar(confirmar) {
    this.modalConfirmar.visible = false;
    if (confirmar) {
      this.updateInventario(
        this.modalConfirmar.producto._id,
        this.stock
      );
    } else {
      this.modalActualizarInventario.visible = true;
    }
  }

  // Agregar stock
  updateInventario(idProducto: string, cantidad: number) {
    this.productoService.setStock(idProducto, cantidad)
      .then((res) => {
        console.log(res);
        
      })
  }
}
