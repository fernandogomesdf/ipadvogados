import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuperioresPageRoutingModule } from './superiores-routing.module';

import { SuperioresPage } from './superiores.page';
import { HeaderModule } from '../header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuperioresPageRoutingModule,
    HeaderModule
  ],
  declarations: [SuperioresPage]
})
export class SuperioresPageModule { }
