import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { UserFormComponent } from './userForm/userForm.component';
import {FormPosterService} from './userForm/userForm.service';

@NgModule({
    declarations: [
        AppComponent,
        UserFormComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [
        FormPosterService
    ],
    bootstrap: [
        AppComponent
    ]
})


export class AppModule {};