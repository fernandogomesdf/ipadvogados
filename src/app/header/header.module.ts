import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header.component';
import { NgModule } from '@angular/core';

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
    providers: []
})
export class HeaderModule { }