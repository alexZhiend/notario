import { Component } from '@angular/core';
import { InfopaginaService } from './services/infopagina.service';
import { environment } from '../environments/environment';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ORIUNDO & YARANGA';

  constructor( public infopaginaService: InfopaginaService ) {

  }
}
