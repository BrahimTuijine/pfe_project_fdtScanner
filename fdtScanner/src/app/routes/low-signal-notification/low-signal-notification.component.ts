import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetNotificationListService } from 'src/app/services/fetchNotification/get-notification-list.service';
import { FixTimeFormService } from 'src/app/services/fixtime/fix-time-form.service';

@Component({
  selector: 'app-low-signal-notification',
  templateUrl: './low-signal-notification.component.html',
  styleUrls: ['./low-signal-notification.component.less'],
})
export class LowSignalNotificationComponent implements OnInit {
  fixtimeform: any;

  constructor(
    private router: ActivatedRoute,
    private getNotificationList: GetNotificationListService,
    private fixtime: FixTimeFormService
  ) {}

  notification: any = {};


  ngOnInit(): void {
    let frame = document.getElementById('test');
    this.router.params.subscribe((params) =>
      this.getNotificationList
        .getNotificationsById(params['id'])
        .subscribe((res: any) => {
          this.notification = res;
          frame?.setAttribute('src', this.notification.mapLink);
          this.fixtimeform = this.fixtime.fixTimeForm(
            this.notification.created_at
          );
        })
    );
  }
}
