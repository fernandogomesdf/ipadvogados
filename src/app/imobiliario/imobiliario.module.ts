import { CardModule } from 'primeng/card';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImobiliarioPageRoutingModule } from './imobiliario-routing.module';

import { ImobiliarioPage } from './imobiliario.page';
import { HeaderModule } from '../header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImobiliarioPageRoutingModule,
    HeaderModule,
    CardModule
  ],
  declarations: [ImobiliarioPage],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ImobiliarioPageModule { }
