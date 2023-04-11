import { Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit, } from '@angular/core';

import {Feature, Map, View} from 'ol';
import FullScreen from 'ol/control/FullScreen';
import olms from 'ol-mapbox-style';
import { transform } from 'ol/proj';
import TileLayer from "ol/layer/Tile";
import {OSM} from "ol/source";
import {Vector as VectorLayer} from "ol/layer";
import { Vector } from 'ol/source';
import {Point} from "ol/geom";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  public map!: Map
  @ViewChild('map') mapElement!: ElementRef;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.map = new Map({
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        target: this.mapElement.nativeElement,
        view: new View({
          center: [0, 0],
          zoom: 2,
          maxZoom: 18,
        }),
      });
    });
    this.map = new Map({
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target: this.mapElement.nativeElement,
      view: new View({
        center: [0, 0],
        zoom: 2,
        maxZoom: 18,
      }),
    });
    this.addRandomPoint();
  }

  ngOnInit(): void {


  }
  addRandomPoint(): void {
    const lon = 1.439393;
    const lat = 43.622318;
    const point = new Point(transform([lon, lat], 'EPSG:4326', 'EPSG:3857'));
    const feature = new Feature(point);
    const source = new Vector({
      features: [feature],
    });
    const layer = new VectorLayer({
      source: source,
    });
    this.map.addLayer(layer);
  }
}
