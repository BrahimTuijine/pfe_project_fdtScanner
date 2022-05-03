import { RequestComponent } from './routes/request/request.component';
import { LoginComponent } from './routes/login/login.component';
import { LowSignalNotificationComponent } from './routes/low-signal-notification/low-signal-notification.component';
import { StatisticsComponent } from './routes/statistics/statistics.component';
import { FdtPlacesComponent } from './routes/fdt-places/fdt-places.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsAllowedGuard } from './guards/is-allowed.guard';
import { FdtListComponent } from './routes/fdt-list/fdt-list.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [{ path: '', component: LoginComponent }],
  },

  {
    path: 'dashboard',
    canActivate: [IsAllowedGuard],
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'fdtplaces',
        pathMatch: 'full',
      },
      {
        path: 'fdtplaces',
        component: FdtPlacesComponent,
      },
      {
        path: 'statistics',
        component: StatisticsComponent,
      },
      {
        path: 'notification/:id',
        component: LowSignalNotificationComponent,
      },
      {
        path : 'request',
        component: RequestComponent 
      },
      {
        path : 'fdtList',
        component : FdtListComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
