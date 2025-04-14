import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicServerModule } from '@ionic/angular-server';

import { MedicoPageRoutingModule } from './medico-routing.module';

import { MedicoPage } from './medico.page';
import { HeaderModule } from '../header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicServerModule,
    MedicoPageRoutingModule,
    HeaderModule
  ],
  declarations: [MedicoPage],
  schemas: [NO_ERRORS_SCHEMA]
})
export class MedicoPageModule { }
