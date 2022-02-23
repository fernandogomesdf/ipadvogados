import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IsraelPageRoutingModule } from './israel-routing.module';

import { IsraelPage } from './israel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IsraelPageRoutingModule
  ],
  declarations: [IsraelPage]
})
export class IsraelPageModule {}
