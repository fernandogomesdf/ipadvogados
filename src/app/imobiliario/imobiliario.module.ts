import { NgModule } from '@angular/core';
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
    HeaderModule
  ],
  declarations: [ImobiliarioPage]
})
export class ImobiliarioPageModule { }
