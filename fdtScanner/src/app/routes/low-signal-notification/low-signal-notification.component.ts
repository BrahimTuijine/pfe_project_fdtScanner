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

  view: any = [700, 370];
  colorscheme = {
    domain: ['#784FC4', '#48852C', '#867A3D', '#SB6FC8', '#25706F'],
  };
  schemeType: string = 'ordinal';
  gradient: boolean = false;
  xAxis: boolean = true;
  yAxis: boolean = true;
  legendTitle: string = 'Products';
  legendTitleMulti: string = 'Months';
  legendPosition: string = 'below';
  legend: boolean = true;
  showXAxistabel: boolean = true;
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'value';
  xAxisLabel: string = 'day';
  animations: boolean = true; // animations on load
  showGridLines: boolean = true; // grid lines
  showDataLabel: boolean = true; // numbers on bars
  barPadding: number = 5;
  tooltipDisabled: boolean = false;
  roundEdges: boolean = false;

  productSales = [
    {
      name: 'book',
      value: 5001,
    },
    {
      name: 'graphic card',
      value: 7322,
    },
    {
      name: 'desk',
      value: 1726,
    },
    {
      name: 'laptop',
      value: 2599,
    },
    {
      name: 'monitor',
      value: 705,
    },
  ];

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
