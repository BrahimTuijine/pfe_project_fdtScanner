import {
  FdtRequest,
  GetrequestService,
} from './../../services/fetchRequest/getrequest.service';
import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { FixTimeFormService } from 'src/app/services/fixtime/fix-time-form.service';
import { User } from 'src/app/services/auth/login.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.less'],
})
export class RequestComponent implements OnInit {
  requestList: FdtRequest[] = [];
  storageData: any;
  userName: any;
  fixedTime : any

  constructor(
    private getrequest: GetrequestService,
    private socket: Socket,
  ) {
  }
  
  ngOnInit(): void {
    this.getrequest.getRequests().subscribe((data: any) => {
      this.requestList = data;      
    });
  }

  fixTimeForm = (time: string) => {
    return time.substring(0, 10) + ' -> ' + time.slice(11 , 16);
  };

  acceptRequest = (data: FdtRequest) => {
    this.socket.emit('userAccept', data.id);
    this.userName = this.getUserName();
    data.state = 'true';
    data.user = this.userName;

    this.getrequest.updateRequest(data).subscribe((data: any) => {
      this.ngOnInit();
    });
  };

  getUserName = () => {
    this.storageData = localStorage.getItem('userData');

    let userData: User = JSON.parse(this.storageData);
    return userData['name'];
  };
}
