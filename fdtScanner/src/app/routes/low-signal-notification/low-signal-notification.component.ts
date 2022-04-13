import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetNotificationListService } from 'src/app/services/fetchNotification/get-notification-list.service';

@Component({
  selector: 'app-low-signal-notification',
  templateUrl: './low-signal-notification.component.html',
  styleUrls: ['./low-signal-notification.component.less'],
})
export class LowSignalNotificationComponent implements OnInit {
  constructor(
    private router: ActivatedRoute,
    private getNotificationList: GetNotificationListService
  ) {}

  notification: any = {};

  ngOnInit(): void {
    let frame = document.getElementById('test');

    this.router.params.subscribe((params) =>
      this.getNotificationList
        .getNotificationsById(params['id'])
        .subscribe((res: any) => {
          this.notification = res;
          console.log(this.notification);
          frame?.setAttribute('src', this.notification.mapLink);
        })
    );
  }

}
