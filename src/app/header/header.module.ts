
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { IonicServerModule } from '@ionic/angular-server';


@NgModule({
  imports: [
    IonicServerModule,
    CommonModule
  ],
  declarations: [
    HeaderComponent,
  ],
  exports: [
    HeaderComponent,
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HeaderModule { }
