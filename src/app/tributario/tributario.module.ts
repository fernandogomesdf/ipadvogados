import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TributarioPageRoutingModule } from './tributario-routing.module';

import { TributarioPage } from './tributario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TributarioPageRoutingModule
  ],
  declarations: [TributarioPage]
})
export class TributarioPageModule {}
