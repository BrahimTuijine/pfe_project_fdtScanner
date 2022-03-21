import { FdtPlacesComponent } from './routes/fdt-places/fdt-places.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'fdtplaces',
        component: FdtPlacesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
