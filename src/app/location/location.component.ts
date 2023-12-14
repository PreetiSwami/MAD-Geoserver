import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  private map: any;

  constructor() { }

  ngOnInit(): void {

    this.initMap();
  }

  private initMap(): void {

    const latitude = 51.505; // Replace with your latitude
    const longitude = -0.09; // Replace with your longitude
    const zoomLevel = 13; // Replace with your desired zoom level

    this.map = L.map('map').setView([latitude, longitude], zoomLevel);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; OpenStreetMap contributors'
    }).addTo(this.map);

    const marker = L.marker([latitude, longitude]).addTo(this.map);
  }

}
