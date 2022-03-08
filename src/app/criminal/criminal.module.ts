import { ButtonModule } from 'primeng/button';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriminalPageRoutingModule } from './criminal-routing.module';

import { CriminalPage } from './criminal.page';
import { CardModule } from 'primeng/card';
import { HeaderModule } from '../header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriminalPageRoutingModule,
    CardModule,
    HeaderModule,
    ButtonModule
  ],
  declarations: [CriminalPage],
  schemas: [NO_ERRORS_SCHEMA]
})
export class CriminalPageModule { }
