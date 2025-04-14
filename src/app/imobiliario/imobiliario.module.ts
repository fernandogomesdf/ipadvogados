
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicServerModule } from '@ionic/angular-server';

import { ImobiliarioPageRoutingModule } from './imobiliario-routing.module';

import { ImobiliarioPage } from './imobiliario.page';
import { HeaderModule } from '../header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicServerModule,
    ImobiliarioPageRoutingModule,
    HeaderModule
  ],
  declarations: [ImobiliarioPage],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ImobiliarioPageModule { }
