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


@NgModule({
  declarations: [
    FdtPlacesComponent,
    StatisticsComponent,
    LowSignalNotificationComponent,
    LoginComponent,
    
  ],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDyN-dKPTc1deKK_BEoFcyyui7O753Jo9E',
    }),
    NzFormModule,
    NzButtonModule,
    NzInputModule,
    ReactiveFormsModule,
    NzTabsModule,
  ],
})
export class RoutesModule {}
