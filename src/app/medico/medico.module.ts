import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicoPageRoutingModule } from './medico-routing.module';

import { MedicoPage } from './medico.page';
import { HeaderModule } from '../header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicoPageRoutingModule,
    HeaderModule
  ],
  declarations: [MedicoPage]
})
export class MedicoPageModule { }
