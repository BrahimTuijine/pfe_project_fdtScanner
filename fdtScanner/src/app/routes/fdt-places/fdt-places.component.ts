import { FixTimeFormService } from './../../services/fixtime/fix-time-form.service';
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
  zoom: number = 8;
  // start position
  lat = 36.88244379050573;
  lng = 10.169747056472744;

  fdtlist: any;
  notification: any;
  fdtvalue: any;
  editedInput: boolean = true;
  fixtimeForm: any;

  constructor(
    private fdtListService: FdtListService,
    private socket: Socket,
    private fixtime: FixTimeFormService
  ) {

    this.fixtimeForm = this.fixtime.fixTimeForm
  }

  ngOnInit(): void {

    this.fdtListService.getAllFdt().subscribe((data) => {
      this.fdtlist = data;
    });

    this.socket.on('pythonSegnalValue', (data: any) => {
      this.fdtvalue = data;
    });
  }

  getCurrentValueSegnal = (fdtId: string) => {
    this.socket.emit('getSegnalValue', fdtId);
  };
}
