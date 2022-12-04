import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpresarialPageRoutingModule } from './empresarial-routing.module';

import { EmpresarialPage } from './empresarial.page';
import { HeaderModule } from '../header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpresarialPageRoutingModule,
    HeaderModule,
    CardModule,
    ButtonModule
  ],
  declarations: [EmpresarialPage],
  schemas: [NO_ERRORS_SCHEMA]
})
export class EmpresarialPageModule { }
