import {NgModule} from '@angular/core';
import {HeaderComponent} from './header.component';
import {AppRoutingModule} from '../app-routing.module';
import {CommonModule} from '@angular/common';

@NgModule ({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule {
}
