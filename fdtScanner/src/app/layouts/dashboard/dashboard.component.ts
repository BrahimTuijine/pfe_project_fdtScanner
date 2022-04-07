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
  public dot = true;

  constructor(private socket: Socket , private toast: NgToastService) {
    
  }

  ngOnInit(): void {
    this.socket.on('showNotification', () => {
      this.toast.error({
        detail: 'ERROR Message',
        summary: 'there is a problem in python',
        duration: 5000,
      });
    });
  }
}
