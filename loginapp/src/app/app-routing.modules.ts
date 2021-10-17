import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RegisterComponent} from './registerForm/registerForm.component';
import {LoginComponent} from './loginForm/login.component';
import { UserComponent } from './users/user.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginGaurdService } from './login-gaurd.service';
import { AdminGaurdService } from './admin-gaurd.service';


const routes: Routes = [
    {path:"register", component: RegisterComponent},
    {path:"login", component: LoginComponent},
    {path:"user", component: UserComponent, canActivate:[AdminGaurdService]},
    {path:"profile", component: ProfileComponent, canActivate:[LoginGaurdService] },
    {path:"", redirectTo:'register', pathMatch:"full"}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    providers: [
        LoginGaurdService,
        AdminGaurdService
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}