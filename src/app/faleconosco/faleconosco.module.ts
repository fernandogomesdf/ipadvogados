import { CardModule } from 'primeng/card';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextareaModule } from 'primeng/inputtextarea';

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
    HeaderModule,
    CardModule,
    InputTextModule,
    InputMaskModule,
    InputTextareaModule
  ],
  declarations: [FaleconoscoPage],
  schemas: [NO_ERRORS_SCHEMA]
})
export class FaleconoscoPageModule { }
