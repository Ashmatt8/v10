import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard.component';
import {HeaderModule} from '../header/header.module';
import {AppRoutingModule} from '../app-routing.module';

@NgModule ({
  imports: [
    AppRoutingModule,
    HeaderModule
  ],
  declarations: [
    DashboardComponent
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule {
}
