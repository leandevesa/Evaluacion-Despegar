import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {

  filtros;
  http;
  hoteles = [];
  estaCargando = false;

  constructor(providerHttp: Http) {
    this.http = providerHttp;
  }

  onFiltrosChanged(filtrosNuevos) {

    this.filtros = filtrosNuevos;
  }

  realizarBusqueda(parametros) {
    
    this.estaCargando = true;
    this.hoteles = [];

    var url = "https://";
        url = url + "api.myjson.com";
        url = url + "/bins/11c2rn?";
        url = url + "origin=" + parametros.destino + "&";
        url = url + "start=" + parametros.entrada + "&";
        url = url + "end=" + parametros.salida + "&";
        url = url + "rooms=" + parametros.habitaciones + "&";
        url = url + "adults=" + parametros.adultos + "&";
        url = url + "minors=" + parametros.menores;

    console.log("AJAX URL: " + url); // Lo dejo para que se pueda verificar

    this.http.get(url)
      .map(res => res.json())
      .subscribe(hoteles => {
                              this.hoteles = hoteles;
                              this.estaCargando = false;
                            });
  }
}
