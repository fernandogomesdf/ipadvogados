import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MessageService } from 'primeng/api';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    ToastModule
  ],
  declarations: [
    HeaderComponent,
  ],
  exports: [
    HeaderComponent,
  ],
  providers: [MessageService],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HeaderModule { }
