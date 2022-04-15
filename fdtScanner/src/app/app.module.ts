import { RoutesModule } from './routes/routes.module';
import { LayoutsModule } from './layouts/layouts.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgToastModule } from 'ng-angular-popup';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { ChartModule, LineSeriesService } from '@syncfusion/ej2-angular-charts';

registerLocaleData(en);
const config: SocketIoConfig = {
  url: 'http://localhost:4444',
  options: {
    extraHeaders: {
      name: 'angular',
    },
  },
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutsModule,
    RoutesModule,
    NgToastModule,
    SocketIoModule.forRoot(config),
    GridModule,
    ChartModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, LineSeriesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
