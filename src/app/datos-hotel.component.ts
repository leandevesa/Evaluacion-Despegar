import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'datos-hotel',
  templateUrl: './datos-hotel.component.html'
})

export class DatosHotelComponent {

    @Output() clickBusqueda = new EventEmitter();

    opcionesHabitaciones = [1, 2, 3, 4, 5, 6, 7, 8];
    opcionesPersonas = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    form;
    fechasGroup;
    personasYCuartosGroup;

    ngOnInit() {

      this.form = new FormGroup({
        destino: new FormControl('Buenos Aires, Argentina', Validators.required),
        year: new FormControl("")
      });

      this.fechasGroup = new FormGroup({
          entrada: new FormControl(''),
          salida: new FormControl('')
      }, this.dateGroupValidator);

      this.personasYCuartosGroup = new FormGroup({
        habitaciones: new FormControl(1),
        adultos: new FormControl(2),
        menores: new FormControl(0),
      }, this.personasYCuartosValidator)
    }

    getHotels() {

      var parametros = {
        destino: this.form.controls.destino.value,
        entrada: this.convertirFecha(this.fechasGroup.controls.entrada.value),
        salida: this.convertirFecha(this.fechasGroup.controls.salida.value),
        habitaciones: this.personasYCuartosGroup.controls.habitaciones.value,
        adultos: this.personasYCuartosGroup.controls.adultos.value,
        menores: this.personasYCuartosGroup.controls.menores.value
      }
      
      this.clickBusqueda.emit(parametros);
    }

    private convertirFecha(unaFecha) {

      var dia = unaFecha.substr(0, 2);
      var mes = unaFecha.substr(3, 2);
      var ano = unaFecha.substr(6, 4);

      return ano + "-" + mes + "-" + dia;
    }

    personasYCuartosValidator(group) {

      const MAX_PERSONAS = 8;

      let habitaciones = parseInt(group.controls.habitaciones.value, 10);
      let adultos = parseInt(group.controls.adultos.value, 10);
      let menores = parseInt(group.controls.menores.value, 10);

      if ((adultos + menores)  > MAX_PERSONAS) {

        return {
          msg: "No se puede reservar para mas de " + MAX_PERSONAS.toString() + " personas"
        };
      }      

      if (adultos < habitaciones) {

        return {
          msg: "Debe haber al menos un adulto por cuarto"
        };
      }

      return null;
    }

    dateGroupValidator(group) {

      let fechas = [];

      for (let nombreControl in group.controls) {

        let control = group.controls[nombreControl];

        // Chequeo que la fecha no este vacia

        if (control.value.trim().length === 0) {
          
          return {
            msg: "Las fechas no pueden estar vacias"
          };
        }

        // Chequeo que sea una fecha valida dd/mm/aaaa

        let fechaEnString = control.value;

        let dia = parseInt(fechaEnString.substr(0, 2), 10);
        let mes = parseInt(fechaEnString.substr(3, 2), 10) - 1;
        let ano = parseInt(fechaEnString.substr(6, 4), 10);

        let sep1 = fechaEnString.substr(2, 1);
        let sep2 = fechaEnString.substr(5, 1);

        let unaFecha = new Date(ano, mes, dia);

        fechas.push(unaFecha);

        if (unaFecha.getFullYear() !== ano ||
            unaFecha.getMonth() !== mes ||
            unaFecha.getDate() !== dia ||
            ano < 1900 || ano > 2100 ||
            sep1 !== "/" && sep2 !== "/") {

            return {
                msg: "La fecha ingresada es invalida"
            };
        }        
      }

      // Chequeo que la fecha de entrada sea menor que la de salida

      if (fechas[0] >= fechas[1]) {

          return {
              msg: "La fecha de entrada no puede ser después que la de salida o el mismo día"
          };
      }

      // Chequeo que la fecha de entrada sea dentro de los proximos 365 dias

      var hoyTime = (new Date()).getTime();
      var entradaTime = fechas[0].getTime();
      var diferenciaEnDias = Math.abs(Math.round((entradaTime-hoyTime)/(1000*60*60*24)) + 1);

      if (diferenciaEnDias > 365) {

          return {
              msg: "La fecha de entrada debe ser dentro de los proximos 365 dias"
          };
      }

      // Chequeo que la fecha de salida sea menor a 30 dias a la de entrada

      var salidaTime = fechas[1].getTime();
      diferenciaEnDias = Math.round((salidaTime-entradaTime)/(1000*60*60*24)) + 1;

      if (diferenciaEnDias > 30) {

          return {
              msg: "La fecha de salida debe estar dentro de los 30 días posteriores a la de entrada"
          };
      }

      return null;
    }
 }