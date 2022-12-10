import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IonicModule } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { CardModule } from 'primeng/card';
import { HeaderModule } from './header/header.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule.withServerTransition({
        appId: 'ipadvogados'
    }), IonicModule.forRoot(), AppRoutingModule, CardModule, HeaderModule, BrowserAnimationsModule, HttpClientModule, FormsModule],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, MessageService],
    bootstrap: [AppComponent],
    schemas : [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }
