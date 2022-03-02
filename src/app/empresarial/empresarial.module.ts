import { NgModule } from '@angular/core';
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
    HeaderModule
  ],
  declarations: [EmpresarialPage]
})
export class EmpresarialPageModule { }
