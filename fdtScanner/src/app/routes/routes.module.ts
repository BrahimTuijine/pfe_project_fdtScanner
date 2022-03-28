import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FdtPlacesComponent } from './fdt-places/fdt-places.component';
import { AgmCoreModule } from '@agm/core';
import { StatisticsComponent } from './statistics/statistics.component';



@NgModule({
  declarations: [
    FdtPlacesComponent,
    StatisticsComponent
  ],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDyN-dKPTc1deKK_BEoFcyyui7O753Jo9E'
    })

  ]
})
export class RoutesModule { }
