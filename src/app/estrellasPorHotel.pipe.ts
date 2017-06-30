import { Pipe } from '@angular/core';

@Pipe({
  name: 'estrellasPorHotel',
  pure: false
})
export class EstrellasPorHotel {

  transform(hoteles, cantEstrellas) {
    
    var cantidad = 0;

    hoteles.forEach((unHotel, index) => {
      
      if (unHotel.stars == cantEstrellas) {

          cantidad += 1;
      }
    });

    return cantidad;
  }
}