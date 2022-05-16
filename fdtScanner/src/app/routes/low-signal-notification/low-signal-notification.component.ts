import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetNotificationListService } from 'src/app/services/fetchNotification/get-notification-list.service';
import { FixTimeFormService } from 'src/app/services/fixtime/fix-time-form.service';
import * as echarts from 'echarts';

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

    type EChartsOption = echarts.EChartsOption;

    let chartDom = document.getElementById('avgBoxValue')!;
    let myChart = echarts.init(chartDom);
    let option: EChartsOption;

    option = {
      series: [
        {
          type: 'gauge',
          min: -30,
          max: +2,
          progress: {
            show: true,
            width: 16,
          },
          axisLine: {
            lineStyle: {
              width: 18,
            },
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            length: 15,
            lineStyle: {
              width: 2,
              color: '#999',
            },
          },
          axisLabel: {
            distance: 25,
            color: '#999',
            fontSize: 15,
          },
          anchor: {
            show: true,
            showAbove: true,
            size: 25,
            itemStyle: {
              borderWidth: 10,
            },
          },
          title: {
            show: false,
          },
          detail: {
            valueAnimation: true,
            fontSize: 30,
            offsetCenter: [0, '70%'],
          },
          data: [
            {
              value: -14,
              name: 'Average value',
            },
          ],
        },
      ],
    };
    option && myChart.setOption(option);

    var chartDomTwo = document.getElementById('valuePerDay')!;
    var myChartTwo = echarts.init(chartDomTwo);
    var optionTwo: EChartsOption;

    optionTwo = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisTick: {
            alignWithLabel: true,
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
        },
      ],
      series: [
        {
          name: 'Direct',
          type: 'bar',
          barWidth: '60%',
          data: [10, 52, 200, 334, 390, 330, 220],
        },
      ],
    };

    optionTwo && myChartTwo.setOption(optionTwo);
  }
}
