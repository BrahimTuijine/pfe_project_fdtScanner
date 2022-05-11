import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FdtPlacesComponent } from './fdt-places/fdt-places.component';
import { AgmCoreModule } from '@agm/core';
import { StatisticsComponent } from './statistics/statistics.component';
import { LowSignalNotificationComponent } from './low-signal-notification/low-signal-notification.component';
import { LoginComponent } from './login/login.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ReactiveFormsModule } from '@angular/forms';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTableModule } from 'ng-zorro-antd/table';
import { FdtListComponent } from './fdt-list/fdt-list.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { RequestComponent } from './request/request.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [
    FdtPlacesComponent,
    StatisticsComponent,
    LowSignalNotificationComponent,
    LoginComponent,
    FdtListComponent,
    RequestComponent,
  ],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAhQUcvRV1qqWlWSytbOVxfCbUMMdC3KhE',
    }),
    NzFormModule,
    NzButtonModule,
    NzInputModule,
    ReactiveFormsModule,
    NzTabsModule,
    NzTableModule,
    NzDividerModule,
    NzModalModule,
    NzStatisticModule,
    NzCardModule,
    NzIconModule,
  ],
})
export class RoutesModule {}
