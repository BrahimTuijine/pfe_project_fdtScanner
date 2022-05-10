import { FixTimeFormService } from './../../services/fixtime/fix-time-form.service';
import { GetNotificationListService } from './../../services/fetchNotification/get-notification-list.service';
import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { Socket } from 'ngx-socket-io';
import { User } from 'src/app/services/auth/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
})
export class DashboardComponent implements OnInit {
  public isCollapsed: boolean = false;
  public dot: boolean = false;
  notification: any[] = [];
  storageData: any;
  username?: string = '';
  fixtimeForm: any;

  constructor(
    private socket: Socket,
    private toast: NgToastService,
    private getNotificationList: GetNotificationListService,
    private fixtime: FixTimeFormService
  ) {
    this.fixtimeForm = this.fixtime.fixTimeForm;
  }

  ngOnInit(): void {
    this.socket.on('showNotification', () => {
      this.toast.error({
        detail: 'ERROR Message',
        summary: 'there is a problem in box',
        duration: 5000,
      });

      if (this.dot == false) {
        this.dot = true;
      }
    });
    this.socket.on('showNotificationInfo', () => {
      this.toast.info({
        detail: 'info Message',
        summary: 'there is another box',
        duration: 5000,
      });

      if (this.dot == false) {
        this.dot = true;
      }
    });
    this.fetchNotification();
    this.username = this.getUserName();
  }

  getUserName = () => {
    this.storageData = localStorage.getItem('userData');

    let userData: User = JSON.parse(this.storageData);
    return userData['name'];
  };

  logout = () => {
    localStorage.removeItem('userData');
  };

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
