import { Component, OnInit } from '@angular/core';
import { MapService } from '../../map.service';
import * as mapboxgl from 'mapbox-gl';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  map1: mapboxgl.Map;
  container: 'map1';
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = -13.163925;
  long = -74.223526;
  message = 'O&Y';

  source: any;
  markers: any;

  constructor(private mapService: MapService) { }

  ngOnInit() {
  }

}
