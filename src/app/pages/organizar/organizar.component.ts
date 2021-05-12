import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Ubicacion from 'src/app/interface/ubicacion.inteface';
import { UbicacionService } from 'src/app/services/ubicacion.service';

@Component({
  selector: 'app-organizar',
  templateUrl: './organizar.component.html',
  styleUrls: ['./organizar.component.css']
})
export class OrganizarComponent implements OnInit {

  textoAyuda = 'Crea una nueva ubicacion, presiona sobre el boton editar y asignale productos';
  cargando = false;
  ubicaciones:Ubicacion[];

  constructor(
    public ubicacionService: UbicacionService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.listUbicaciones();
  }

  listUbicaciones(){
    this.cargando = true;
    this.ubicacionService.listUbicaciones()
      .then((res) => {
        this.ubicaciones = res;   
      })
      .finally(() => {
        this.cargando = false;
      })
  }

  deleteUbicacion(ubicacion: Ubicacion){
    const confirmarEliminar = confirm('¿Estas seguro de eliminar esta ubicacion?');
    if(confirmarEliminar){
      this.cargando = true;
      this.ubicacionService.deleteUbicacion(ubicacion._id)
        .then((res) => {
          this.listUbicaciones();
        })
        .finally(() => {
          this.cargando = true;
        })
    }
  }

  navigateByUrl(url:string){
    this.router.navigateByUrl(url);
  }
}
