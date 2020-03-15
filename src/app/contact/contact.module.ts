import {NgModule} from '@angular/core';
import {HeaderModule} from '../header/header.module';
import {ContactComponent} from './contact.component';

@NgModule ({
  imports: [
    HeaderModule
  ],
  declarations: [
    ContactComponent
  ],
  exports: [
    ContactComponent
  ]
})
export class ContactModule {
}
