import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicServerModule } from '@ionic/angular-server';

import { TrabalhistaPageRoutingModule } from './trabalhista-routing.module';

import { TrabalhistaPage } from './trabalhista.page';
import { HeaderModule } from '../header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicServerModule,
    TrabalhistaPageRoutingModule,
    HeaderModule
  ],
  declarations: [TrabalhistaPage],
  schemas: [NO_ERRORS_SCHEMA]
})
export class TrabalhistaPageModule { }
