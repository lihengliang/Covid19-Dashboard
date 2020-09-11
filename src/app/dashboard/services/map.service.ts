import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../../environments/environment';
import { CovidInfoService } from './covid-info.service';
import { StateSummary } from '../models/covid.model';


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

  stateSummary: StateSummary[];

  constructor(
    private readonly covidInfoService: CovidInfoService
  ) {
    (
      mapboxgl as any).accessToken = environment.mapbox.accessToken;

    this.covidInfoService.getSummaryByState().subscribe(res => {
      this.stateSummary = res;
    });
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

    let hoveredStateId = null;

    this.map.on('load', () => {
      this.map.addSource('states', {
        type: 'geojson',
        data:
          '/assets/states.geojson'
      });

      // The feature-state dependent fill-opacity expression will render the hover effect
      // when a feature's hover state is set to true.
      this.map.addLayer({
        id: 'state-fills',
        type: 'fill',
        source: 'states',
        layout: {},
        paint: {
          'fill-color': '#627BC1',
          'fill-opacity': [
            'case',
            ['boolean', ['feature-state', 'hover'], false],
            1,
            0.5
          ]
        }
      });

      this.map.addLayer({
        id: 'state-borders',
        type: 'line',
        source: 'states',
        layout: {},
        paint: {
          'line-color': '#627BC1',
          'line-width': 2
        }
      });

      const popup = new mapboxgl.Popup({
        closeButton: false
      });

      // When the user moves their mouse over the state-fill layer, we'll update the
      // feature state for the feature under the mouse.
      this.map.on('mousemove', 'state-fills', (e) => {
        if (e.features.length > 0) {
          if (hoveredStateId || hoveredStateId === 0) {
            this.map.setFeatureState(
              { source: 'states', id: hoveredStateId },
              { hover: false }
            );
          }
          hoveredStateId = e.features[0].id;
          this.map.setFeatureState(
            { source: 'states', id: hoveredStateId },
            { hover: true }
          );

          // get stats for hovered state
          const stateStats = this.stateSummary.filter(item => {
            return item.state === e.features[0].properties.STATE_NAME;
          });

          popup
            .setLngLat(e.lngLat)
            .setHTML(
              `
              <strong>${e.features[0].properties.STATE_NAME}</strong>
              <br>
              Cases: ${stateStats[0].cases}
              <br>
              Active: ${stateStats[0].active}
              <br>
              Deaths: ${stateStats[0].deaths}
              <br>
              Recovered: ${stateStats[0].recovered}
              `
              )
            .addTo(this.map);
        }
      });

      // When the mouse leaves the state-fill layer, update the feature state of the
      // previously hovered feature.
      this.map.on('mouseleave', 'state-fills', () => {
        if (hoveredStateId || hoveredStateId === 0) {
          this.map.setFeatureState(
            { source: 'states', id: hoveredStateId },
            { hover: false }
          );
        }
        popup.remove();
        hoveredStateId = null;
      });
    });

  }

}
