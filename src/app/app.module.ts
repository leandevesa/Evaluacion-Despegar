import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListaHotelesComponent } from './lista-hoteles.component';
import { DatosHotelComponent } from './datos-hotel.component';
import { FiltrosComponent } from './filtros.component';

import {  DistanciaPipe, 
          CantidadHabitacionesPipe, 
          AvailabilityTimePipe,
          PrecioParteDecimalPipe,
          PrecioParteEnteraPipe,
          FiltroHotelesPipe } from './lista-hoteles.pipe';
import { ForNumberPipe, ForNumberWithNumbersPipe } from './forNumber.pipe';
import { EstrellasPorHotel } from './estrellasPorHotel.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListaHotelesComponent,
    DatosHotelComponent,
    FiltrosComponent,
    DistanciaPipe,
    ForNumberPipe,
    ForNumberWithNumbersPipe,
    AvailabilityTimePipe,
    CantidadHabitacionesPipe,
    PrecioParteDecimalPipe,
    PrecioParteEnteraPipe,
    FiltroHotelesPipe,
    EstrellasPorHotel
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
