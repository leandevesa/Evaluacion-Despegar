import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'filtros',
  templateUrl: './filtros.component.html'
})

export class FiltrosComponent { 
  @Input() hoteles;
  @Output() hotelesFiltrados = new EventEmitter();

  CANT_ESTRELLAS = 5;
  estrellasSeleccionadas;
  
  ngOnInit() {

    this.inicializarEstrellas();
    this.filtrar();
  }

  private inicializarEstrellas() {

    this.estrellasSeleccionadas = {
      todas: true
    }

    for (var i = 1; i <= this.CANT_ESTRELLAS; i++) {
      this.estrellasSeleccionadas[i] = false;
    }
  }

  private chequearSiCorrespondenTodas() {

    let hayEstrellasClickeadas = false;

    for (var i = 1; i <= this.CANT_ESTRELLAS; i++) {
      
      if (this.estrellasSeleccionadas[i]) {

        hayEstrellasClickeadas = true;
        break;
      }
    }

    if (!hayEstrellasClickeadas) {
      this.estrellasSeleccionadas.todas = true;
    }
  }

  private filtrar() {

    this.hotelesFiltrados.emit(this.estrellasSeleccionadas);
  }

  clickEstrella(numero, $event) {

    this.estrellasSeleccionadas[numero] = $event.target.checked;
    
    if (numero !== 'todas') {
      this.estrellasSeleccionadas.todas = false;
    }

    this.chequearSiCorrespondenTodas();

    if (this.estrellasSeleccionadas.todas) {
      
      this.inicializarEstrellas();
    }

    this.filtrar();
  }
}
