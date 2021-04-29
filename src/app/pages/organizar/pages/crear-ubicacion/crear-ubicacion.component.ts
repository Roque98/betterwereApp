import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UbicacionService } from 'src/app/services/ubicacion.service';

@Component({
  selector: 'app-crear-ubicacion',
  templateUrl: './crear-ubicacion.component.html',
  styleUrls: ['./crear-ubicacion.component.css']
})
export class CrearUbicacionComponent implements OnInit {

  cargando = false;
  textoAyuda = 'Nombra la nueva ubicacion y guardala';
  ubicacionForm = new FormGroup({
    nombre_ubicacion: new FormControl('', Validators.required),
  });

  constructor(
    private ubicacionService:UbicacionService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.ubicacionService.createUbicacion(this.ubicacionForm.value)
      .then((res) => {
        this.router.navigateByUrl('/organizar');
      })
      .catch((res) => {
        console.log(res);
      })
      .finally(() => {
        this.cargando = false;
      })
  }

}
