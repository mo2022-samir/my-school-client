import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.scss'],
})
export class GoogleComponent implements OnInit {
  breadscrums = [
    {
      title: 'Google Map',
      items: ['Map'],
      active: 'Google Map',
    },
  ];

  display: any;

  constructor() {}

  ngOnInit(): void {}

  //cursor position
  center: google.maps.LatLngLiteral = { lat: 24, lng: 12 };
  zoom = 4;

  moveMap(event: google.maps.MapMouseEvent) {
    this.center = event.latLng.toJSON();
  }

  move(event: google.maps.MapMouseEvent) {
    this.display = event.latLng.toJSON();
  }

  // add marker
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  markerPositions: google.maps.LatLngLiteral[] = [];

  addMarker(event: google.maps.MapMouseEvent) {
    this.markerPositions.push(event.latLng.toJSON());
  }

  // MapPolyline
  vertices: google.maps.LatLngLiteral[] = [
    { lat: 13, lng: 13 },
    { lat: -13, lng: 0 },
    { lat: 13, lng: -13 },
  ];

  // MapRectangle
  bounds: google.maps.LatLngBoundsLiteral = {
    east: 10,
    north: 10,
    south: -10,
    west: -10,
  };
}
