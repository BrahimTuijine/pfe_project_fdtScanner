import { FdtListService } from './../../services/getFdtList/fdt-list.service';
import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { GetNotificationListService } from 'src/app/services/fetchNotification/get-notification-list.service';

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
  notification: any;
  fdtvalue:any

  constructor(private fdtListService: FdtListService, private socket: Socket) {}

  ngOnInit(): void {
    this.fdtlist = this.fdtListService.getAllFdt();

    this.socket.on('pythonSegnalValue', (data: any) => {
      this.fdtvalue = data
    });
  }

  getCurrentValueSegnal = (fdtId: string) => {
    this.socket.emit('getSegnalValue', fdtId);
  };
}
