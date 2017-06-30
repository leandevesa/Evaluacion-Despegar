import { Pipe } from '@angular/core';

@Pipe({
  name: 'distancia'
})
export class DistanciaPipe {

  transform(distanciaEnMetros) {

    var distancia;
    var unidad; 

    if (distanciaEnMetros < 1000) {
        
        unidad = "m";
        distancia = distanciaEnMetros.toString();
    } else {
        
        unidad = "km";
        distancia = (distanciaEnMetros / 1000).toString();
    }

    return distancia + " " + unidad + " del centro";
  }
}

@Pipe({
  name: 'cantidadHabitaciones'
})
export class CantidadHabitacionesPipe {

  transform(value) {

    var msj;

    if (value > 1) {

        msj = "Últimas " + value.toString() + " habitaciones";
    } else {

        msj = "¡Última oportunidad! ¡Queda una sola habitación!";
    }

    return msj;
  }
}

@Pipe({
  name: 'availabilityTime'
})
export class AvailabilityTimePipe {

  transform(tiempo) {

    var indiceSeparador = tiempo.indexOf(":");

    var horas = tiempo.substring(0, indiceSeparador);
    var minutos = tiempo.substring(indiceSeparador + 1);

    return "Restan " + horas + " horas " + minutos + " minutos hasta agotar la disponibilidad"
  }
}

@Pipe({
  name: 'precioParteEntera'
})
export class PrecioParteEnteraPipe {

  transform(precio) {
    
    precio = precio.toString();
    
    return "$" + precio.substring(0, precio.indexOf("."));
  }
}

@Pipe({
  name: 'precioParteDecimal'
})
export class PrecioParteDecimalPipe {

  transform(precio) {
    
    precio = precio.toString();

    return precio.substring(precio.indexOf(".") + 1);
  }
}

@Pipe({
  name: 'filtroHoteles',
  pure: false
})
export class FiltroHotelesPipe {

  transform(todosLosHoteles, filtros) {

    var hotelesFiltrados = [];

    if (filtros['todas']) {

      return todosLosHoteles;
    }

    for (var i = 0; i < todosLosHoteles.length; i++) {

      var unHotel = todosLosHoteles[i];
      var estrellasHotel = unHotel.stars;

      if (filtros[estrellasHotel]) {

        hotelesFiltrados.push(unHotel);
      }
    }

    return hotelesFiltrados;
  }
}