import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriminalPageRoutingModule } from './criminal-routing.module';

import { CriminalPage } from './criminal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriminalPageRoutingModule
  ],
  declarations: [CriminalPage]
})
export class CriminalPageModule {}
