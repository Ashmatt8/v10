import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';

import {HeaderModule} from '../header/header.module';
import {DistributionComponent} from './distribution.component';

@NgModule ({
  imports: [
    CommonModule,
    HeaderModule,
    BrowserModule
  ],
  declarations: [
    DistributionComponent
  ],
  exports: [
    DistributionComponent
  ]
})
export class DistributionModule {
}
