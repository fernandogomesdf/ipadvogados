import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrabalhistaPageRoutingModule } from './trabalhista-routing.module';

import { TrabalhistaPage } from './trabalhista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrabalhistaPageRoutingModule
  ],
  declarations: [TrabalhistaPage]
})
export class TrabalhistaPageModule {}
