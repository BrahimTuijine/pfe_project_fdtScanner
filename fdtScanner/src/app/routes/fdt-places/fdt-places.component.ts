import {
  FdtListService,
} from './../../services/getFdtList/fdt-list.service';
import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';

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

  fdtlist: any;



  constructor(private fdtListService: FdtListService ) {}

  ngOnInit(): void {
    this.fdtlist = this.fdtListService.getAllFdt();
  }


}

