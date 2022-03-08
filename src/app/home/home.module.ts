import { ButtonModule } from 'primeng/button';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { CardModule } from 'primeng/card';
import { HeaderModule } from '../header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    CardModule,
    HeaderModule,
    ButtonModule
  ],
  declarations: [HomePage],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HomePageModule { }
