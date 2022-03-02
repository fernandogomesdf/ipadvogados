import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministrativoPageRoutingModule } from './administrativo-routing.module';

import { AdministrativoPage } from './administrativo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdministrativoPageRoutingModule
  ],
  declarations: [AdministrativoPage]
})
export class AdministrativoPageModule {}
