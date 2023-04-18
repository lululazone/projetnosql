import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Feature, Map, View } from 'ol';
import FullScreen from 'ol/control/FullScreen';
import olms from 'ol-mapbox-style';
import { transform } from 'ol/proj';
import { HttpClient } from '@angular/common/http';
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";
import { Vector } from 'ol/source';
import { Point } from "ol/geom";
import { Vector as VectorLayer } from "ol/layer";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  public map!: Map
  public vectorSource = new Vector({
    features: []
  });

  public nbEntitie!:number

  quasouForm = new FormGroup({
    du: new FormControl(false),
    ldk: new FormControl(false),
  });

  watlevForm = new FormGroup({
    sub: new FormControl(false),
    dry: new FormControl(false),
    cover: new FormControl(false),
    partly_submerged: new FormControl(false),
  });

  featuretypeForm = new FormGroup({
    subdangerous: new FormControl(false),
    visible: new FormControl(false),
    subnondangerous: new FormControl(false),
    distribute: new FormControl(false),
  });



  @ViewChild('map') mapElement!: ElementRef;

  constructor(private http: HttpClient) { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.map = new Map({
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
          new VectorLayer({
            source: this.vectorSource
          })
        ],
        target: this.mapElement.nativeElement,
        view: new View({
          center: [0, 0],
          zoom: 2,
          maxZoom: 18,
        }),
      });
    });
  }

  ngOnInit(): void { }

  addRandomPoint(long: number, lati: number): void {
    const lon = long;
    const lat = lati;
    const point = new Point(transform([lon, lat], 'EPSG:4326', 'EPSG:3857'));
    const feature = new Feature(point);
    this.vectorSource.addFeature(feature);
  }

  public submit():void{
    let request = "?"
    if(this.quasouForm.value.du == true){
      if(request == "?")
        request = request+"quasou=depth_unknown"
      else
        request = request+"&quasou=depth_unknown"
    }
    if(this.quasouForm.value.ldk == true){
      if(request == "?")
        request = request+"quasou=least_depth_known"
      else
        request = request+"&quasou=least_depth_known"
    }
    if(this.watlevForm.value.sub == true){
      if(request == "?")
        request = request+"watlev=always_under_water/submerged"
      else
        request = request+"&watlev=always_under_water/submerged"
    }
    if(this.watlevForm.value.cover == true){
      if(request == "?")
        request = request+"watlev=covers_and_uncovers"
      else
        request = request+"&watlev=covers_and_uncovers"
    }
    if(this.watlevForm.value.dry == true){
      if(request == "?")
        request = request+"watlev=always_dry"
      else
        request = request+"&watlev=always_dry"
    }
    if(this.watlevForm.value.partly_submerged == true){
      if(request == "?")
        request = request+"watlev=partly_submerged_at_high_water"
      else
        request = request+"&watlev=partly_submerged_at_high_water"
    }
    if(this.featuretypeForm.value.subdangerous == true){
      if(request == "?")
        request = request+"feature_type=subdangerous"
      else
        request = request+"&feature_type=subdangerous"
    }
    if(this.featuretypeForm.value.visible == true){
      if(request == "?")
        request = request+"feature_type=visible"
      else
        request = request+"&feature_type=visible"
    }
    if(this.featuretypeForm.value.subnondangerous == true){
      if(request == "?")
        request = request+"feature_type=subnondangerous"
      else
        request = request+"&feature_type=subnondangerous"
    }
    if(this.featuretypeForm.value.distribute == true){
      if(request == "?")
        request = request+"feature_type=distribute"
      else
        request = request+"&feature_type=distribute"
    }
    this.vectorSource.clear()
    if(request!="?") {
      this.http.get<any[]>('http://localhost:5000/api/data' + request).subscribe(data => {
        this.nbEntitie = data.length;
        data.forEach(obj => {
          this.addRandomPoint(obj.londec, obj.latdec);
        });
      });
    }
  }
}
