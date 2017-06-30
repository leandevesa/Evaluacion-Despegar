import { Component, Input } from '@angular/core';

@Component({
  selector: 'lista-hoteles',
  templateUrl: './lista-hoteles.component.html'
})

export class ListaHotelesComponent {
  @Input() hoteles;
  @Input() filtros;
  @Input() estaCargando;
}
