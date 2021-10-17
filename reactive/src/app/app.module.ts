import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import { UserComponent} from './userform/userFrom.component';

@NgModule({
    declarations: [
        AppComponent,
        UserComponent
    ],
    imports: [
        ReactiveFormsModule,
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {}