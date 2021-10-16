import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RegisterComponent} from './registerForm/registerForm.component';
import {LoginComponent} from './loginForm/login.component';
import { UserComponent } from './users/user.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
    {path:"register", component: RegisterComponent},
    {path:"login", component: LoginComponent},
    {path:"user", component: UserComponent},
    {path:"profile", component: ProfileComponent},
    {path:"", redirectTo:'register', pathMatch:"full"}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    providers: [],
    exports: [RouterModule]
})

export class AppRoutingModule {}