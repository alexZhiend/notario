import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfopaginaService {

  info: any = {};
  cargada = false;

  constructor( private http: HttpClient ) {
    console.log('servicio info listo');

    this.http.get('assets/data/data-pagina.json')
    .subscribe( resp => {
      this.cargada = true;
      this.info = resp;
      console.log(resp);
    });

  }
}
