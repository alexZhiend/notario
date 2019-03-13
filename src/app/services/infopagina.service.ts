import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ipagina, Especialidades, Equipotrabajo } from '../interfaces/Ipagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfopaginaService {

  info: Ipagina = {};
  cargada = false;

  constructor( private http: HttpClient ) {

    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: Ipagina) => {
      this.cargada = true;
      this.info = resp;
      console.log(resp);
    });

  }
}
