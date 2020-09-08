import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../../environments/environment';

@Injectable({
providedIn: 'root'
})

export class MapService {

  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/light-v10';
  // style = 'mapbox://styles/mapbox/streets-v11';
  // Australia coordinates
  lat = -27.2744;
  lng = 133.7751;
  zoom = 3.5;

  constructor() {
    (mapboxgl as any).accessToken = environment.mapbox.accessToken;
  }

  buildMap(): void {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: [this.lng, this.lat],
      interactive: false,
      attributionControl: false
    });

    // this.map.setStyle('mapbox://styles/mapbox/light-v10');
    // this.map.addControl(new mapboxgl.NavigationControl());
    // this.map.scrollZoom.disable();
  }

}
