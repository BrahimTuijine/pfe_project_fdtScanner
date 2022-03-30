import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// ng-zoroo
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';


const ZORRO = [
  NzLayoutModule,
  NzIconModule,
  NzBreadCrumbModule,
  NzMenuModule,
  NzToolTipModule,
  NzAvatarModule,
  

  NzDropDownModule,
];

@NgModule({
  declarations: [AuthComponent, DashboardComponent],
  imports: [CommonModule, RouterModule, ...ZORRO],
})
export class LayoutsModule {}
