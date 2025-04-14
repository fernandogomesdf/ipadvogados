import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { HeaderModule } from '../header/header.module';
import { IonicServerModule } from '@ionic/angular-server';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicServerModule,
    HomePageRoutingModule,
    HeaderModule
  ],
  declarations: [HomePage],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HomePageModule { }
