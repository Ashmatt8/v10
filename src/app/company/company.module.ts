import {NgModule} from '@angular/core';
import {HeaderModule} from '../header/header.module';
import {CompanyComponent} from './company.component';

@NgModule ({
  imports: [
    HeaderModule
  ],
  declarations: [
    CompanyComponent
  ],
  exports: [
    CompanyComponent
  ]
})
export class CompanyModule {
}
