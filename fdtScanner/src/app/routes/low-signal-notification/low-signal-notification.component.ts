import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-low-signal-notification',
  templateUrl: './low-signal-notification.component.html',
  styleUrls: ['./low-signal-notification.component.less'],
})
export class LowSignalNotificationComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    let frame = document.getElementById('test');
    frame?.setAttribute("src" , this.iframeLink)
  }

  iframeLink: string =
    'https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d6157527.108613379!2d1.9004120319301834!3d41.0994755952406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m4!2s41.40338%2C%202.17403!3m2!1d41.40338!2d2.1740299999999997!4m4!2s36.8065%20%2C%2010.1815!3m2!1d36.8065!2d10.1815!5e0!3m2!1sen!2stn!4v1648546665508!5m2!1sen!2stn';
}
