import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UbicacionService } from 'src/app/services/ubicacion.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Ubicacion from 'src/app/interface/ubicacion.inteface';
import { Producto } from 'src/app/interface/producto.interface';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.css'],
})
export class UbicacionComponent implements OnInit {
  textoAyuda = 'Estos son los productos guardados en esta ubicacion';
  
  ubicacion: Ubicacion;

  cargando = false;
  
  editandoNombreUbicacion = false;
  ubicacionForm = new FormGroup({
    nombre_ubicacion: new FormControl('', Validators.required),
  });

  constructor(
    private ubicacionService: UbicacionService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargando = true;
    this.getUbicacion();
  }

  getUbicacion() {
    const idUbicacion = this.activatedRoute.snapshot.params.id;
    this.ubicacionService
      .getUbicacion(idUbicacion)
      .then((res) => {
        
        this.ubicacion = res['resultadoUbicacion'];
        this.ubicacionForm
          .get('nombre_ubicacion')
          .setValue(this.ubicacion.nombre_ubicacion);
      })
      .finally(() => {
        this.cargando = false;
        // this.listUbicacionProducto();
      });
  }

  toggleEditarNombreUbicacion() {
    this.editandoNombreUbicacion = !this.editandoNombreUbicacion;
  }

  cambiarNombreUbicacion() {
    this.cargando = true;
    this.editandoNombreUbicacion = !this.editandoNombreUbicacion;

    this.ubicacionService
      .updateUbicacion(
        this.ubicacion._id,
        this.ubicacionForm.value.nombre_ubicacion
      )
      .then((res) => {
        this.getUbicacion();
      })
      .finally(() => {
        this.cargando = false;
      });
  }

  deleteProducto(producto:Producto){
    const confirmado = confirm('¿Esta seguro de retirar este producto de esta ubicacion?')
    if(confirmado){
      this.cargando = true;
      this.ubicacionService.deleteProducto(this.ubicacion._id, producto._id)
        .then((res) => {
          this.getUbicacion();
        })
        .finally(() => {
          this.cargando = false;
        })
    }
  }

  navigateFromAddProduct(){
    this.router.navigateByUrl('/organizar/agregar-producto/' + this.ubicacion._id)
  }
}
