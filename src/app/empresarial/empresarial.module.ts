import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicServerModule } from '@ionic/angular-server';

import { EmpresarialPageRoutingModule } from './empresarial-routing.module';

import { EmpresarialPage } from './empresarial.page';
import { HeaderModule } from '../header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicServerModule,
    EmpresarialPageRoutingModule,
    HeaderModule
  ],
  declarations: [EmpresarialPage],
  schemas: [NO_ERRORS_SCHEMA]
})
export class EmpresarialPageModule { }
