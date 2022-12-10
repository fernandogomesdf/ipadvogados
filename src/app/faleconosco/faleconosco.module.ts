
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FaleconoscoPageRoutingModule } from './faleconosco-routing.module';

import { FaleconoscoPage } from './faleconosco.page';
import { HeaderModule } from '../header/header.module';
import { NgxMaskModule } from 'ngx-mask';

//export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FaleconoscoPageRoutingModule,
    HeaderModule,
    NgxMaskModule.forRoot()
  ],
  declarations: [FaleconoscoPage],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  providers: []
})
export class FaleconoscoPageModule { }
