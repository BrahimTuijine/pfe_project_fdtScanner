import { GetNotificationListService } from './../../services/fetchNotification/get-notification-list.service';
import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
})
export class DashboardComponent implements OnInit {
  public isCollapsed: boolean = false;
  public dot: boolean = false;
  notification: any;

  constructor(
    private socket: Socket,
    private toast: NgToastService,
    private getNotificationList: GetNotificationListService
  ) {}

  ngOnInit(): void {
    this.socket.on('showNotification', () => {
      this.toast.error({
        detail: 'ERROR Message',
        summary: 'there is a problem in python',
        duration: 5000,
      });

      if (this.dot == false) {
        this.dot = true;
      }
    });
    this.fetchNotification();
  }

  fetchNotification = () => {
    this.getNotificationList.getNotificationList().subscribe((res) => {
      console.log(res);

      this.notification = res;
    });

    if (this.dot == true) {
      this.dot = false;
    }
  };
}
