import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './registerForm/registerForm.component';
import {LoginComponent} from './loginForm/login.component';
import {RegisterPosterService} from './registerForm/registerForm.service';
import {AppRoutingModule} from './app-routing.modules'
import { LoginService } from './loginForm/login.service';
import { UserService } from './users/user.service';
import { UserComponent } from './users/user.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginGaurdService } from './login-gaurd.service';
import { AdminGaurdService } from './admin-gaurd.service';

@NgModule({
    declarations: [
        AppComponent,
        RegisterComponent,
        LoginComponent,
        UserComponent,
        HeaderComponent,
        ProfileComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [
        RegisterPosterService,
        LoginService,
        UserService,
        LoginGaurdService,
        AdminGaurdService
    ],
    bootstrap: [
        AppComponent
    ]
})


export class AppModule {};