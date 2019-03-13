import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import * as mapboxgl from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})

export class MapService {

  constructor() {
    mapboxgl.accesToken = environment.mapbox.accessToken;
  }
}
