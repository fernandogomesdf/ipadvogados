import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FaleconoscoPageRoutingModule } from './faleconosco-routing.module';

import { FaleconoscoPage } from './faleconosco.page';
import { HeaderModule } from '../header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FaleconoscoPageRoutingModule,
    HeaderModule
  ],
  declarations: [FaleconoscoPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: []
})
export class FaleconoscoPageModule { }
