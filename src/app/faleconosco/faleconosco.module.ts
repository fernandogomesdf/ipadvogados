import { MessageService } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';

import { IonicModule } from '@ionic/angular';

import { FaleconoscoPageRoutingModule } from './faleconosco-routing.module';

import { FaleconoscoPage } from './faleconosco.page';
import { HeaderModule } from '../header/header.module';
import { NgxMaskModule, IConfig } from 'ngx-mask';

//export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

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
    InputTextareaModule,
    ButtonModule,
    ToastModule,
    NgxMaskModule.forRoot()
  ],
  declarations: [FaleconoscoPage],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  providers: [MessageService]
})
export class FaleconoscoPageModule { }
