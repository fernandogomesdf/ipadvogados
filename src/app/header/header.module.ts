
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';


@NgModule({
  imports: [
    IonicModule,
    CommonModule
  ],
  declarations: [
    HeaderComponent,
  ],
  exports: [
    HeaderComponent,
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HeaderModule { }
