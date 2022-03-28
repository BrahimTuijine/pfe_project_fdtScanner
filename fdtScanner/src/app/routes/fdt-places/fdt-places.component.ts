import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fdt-places',
  templateUrl: './fdt-places.component.html',
  styleUrls: ['./fdt-places.component.less'],
})
export class FdtPlacesComponent implements OnInit {
  // zoom level
  zoom: number = 12;
  // start position
  lat = 36.88244379050573;
  lng = 10.169747056472744;

  // Markers
  markers: marker[] = [
    {
      name: 'fdt number one',
      lat: 36.821,
      lng: 10.168,
    },
    {
      name: 'fdt number two',
      lat: 36.8221,
      lng: 10.18304,
    },
    {
      name: 'fdt number two',
      lat: 36.8821,
      lng: 10.16804,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
interface marker {
  name: string;
  lat: number;
  lng: number;
}
