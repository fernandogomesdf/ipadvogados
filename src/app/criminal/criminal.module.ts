import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicServerModule } from '@ionic/angular-server';

import { CriminalPageRoutingModule } from './criminal-routing.module';

import { CriminalPage } from './criminal.page';
import { HeaderModule } from '../header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicServerModule,
    CriminalPageRoutingModule,
    HeaderModule
  ],
  declarations: [CriminalPage],
  schemas: [NO_ERRORS_SCHEMA]
})
export class CriminalPageModule { }
