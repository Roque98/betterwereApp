import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators'

@Component({
  selector: 'app-barra-busqueda',
  templateUrl: './barra-busqueda.component.html',
  styleUrls: ['./barra-busqueda.component.css'],
})
export class BarraBusquedaComponent implements OnInit {
  @Output() contenidoInputEmmiter = new EventEmitter<string>();
  contenidoInput = '';
  scanerDisponible = false;
  results$: Observable<any>;
  subject = new Subject();

  constructor() {}

  ngOnInit(): void {
    this.results$ = this.subject.pipe(
      debounceTime(1000)
    );

    this.results$.subscribe(() => {
      this.emitirCambio()
    })
  }

  emitirCambio() {
    console.log('hola');
    
    this.contenidoInputEmmiter.emit(this.contenidoInput);
  }

  iniciarScanner() {
    this.scanerDisponible = true;
  }

  addItem($event) {
    this.contenidoInput = $event;
    this.scanerDisponible = false;
    this.emitirCambio();
  }

  clearInput() {
    this.contenidoInput = '';
    this.emitirCambio;
  }

  search() {
    // emits the `searchText` into the stream. This will cause the operators in its pipe function (defined in the ngOnInit method) to be run. `debounceTime` runs and then `map`. If the time interval of 1 sec in debounceTime hasn’t elapsed, map will not be called, thereby saving the server from being called.
    this.subject.next(this.contenidoInput);
  }
}
