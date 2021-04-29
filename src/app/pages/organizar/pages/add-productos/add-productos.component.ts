import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/interface/producto.interface';
import Ubicacion from 'src/app/interface/ubicacion.inteface';
import { ProductosService } from 'src/app/services/productos.service';
import { UbicacionService } from 'src/app/services/ubicacion.service';

@Component({
  selector: 'app-add-productos',
  templateUrl: './add-productos.component.html',
  styleUrls: ['./add-productos.component.css']
})
export class AddProductosComponent implements OnInit {
  cargando = false;
  cargandoProductos = false;
  cargandoUbicacion = false;
  url = '/organizar/ubicacion/';
  textoAyuda = "Busca un producto y asignalo a esa ubicacion";
  ubicacion: Ubicacion;
  idUbicacion = '';
  
  // Barra de busqueda
  productoBuscado: string = '';

  // producto card
  productos: Producto[];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productosService: ProductosService,
    private ubicacionService: UbicacionService,
  ) { 
    this.idUbicacion = this.activatedRoute.snapshot.params.idUbicacion;
    this.url += this.idUbicacion;
  }

  ngOnInit(): void {
    this.cargandoUbicacion = true;
    this.ubicacionService.getUbicacion(this.idUbicacion)
      .then((res) => {
        this.ubicacion = res['resultadoUbicacion'];
      })
      .finally(() => {
        this.cargandoUbicacion = false;
      })
  }

  // Barra de busqueda
  actualizarValorDeBusqueda($event) {    
    this.productoBuscado = $event;
    this.getProductos();
  }

  // Productos
  getProductos() {
      this.cargandoProductos = true;
      this.productosService.getProductos(this.productoBuscado)
        .then((res) => {
          this.productos = res['data'];        
        })
        .catch((error) => {
          console.log(error);
          
        })
        .finally(() => {
          this.cargandoProductos = false;
        })

  }

  addProductoAUbicacion(producto: Producto){
    this.cargando = true;
    this.ubicacionService.insertProducto(this.idUbicacion, producto._id)
      .then((res) => {
        alert('Producto agregado a la ubicacion');
        this.productos = [];
      })
      .finally(() => {
        this.cargando = false;
      })
    
  }

}
