import { GetrequestService } from './../../services/fetchRequest/getrequest.service';
import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.less'],
})
export class RequestComponent implements OnInit {
  requestList: any;

  constructor(private getrequest: GetrequestService ,  private socket: Socket,) {}

  ngOnInit(): void {
    this.getrequest.getRequests().subscribe((data) => console.log(data));
  }

  acceptRequest = () => { 
    this.socket.emit('userAccept', "6");
   }
}
