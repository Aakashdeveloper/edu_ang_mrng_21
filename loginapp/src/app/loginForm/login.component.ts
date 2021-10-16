import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ILogin} from './login.modal';
import {LoginService} from './login.service';
import {Router} from '@angular/router'

@Component({
    selector: 'app-form',
    templateUrl: './login.component.html'
})


export class LoginComponent {
    myEmployee = new ILogin('', '');


    constructor(private loginService: LoginService,
            private router: Router) {}

    submitForm(form:NgForm):void{
        console.log(form.value);
        this.loginService.login(form.value)
        // we receive the token and pass to next service
        .subscribe((res) => this.loginService.getUserInfo(res['token'])
        .subscribe((response) => this.userRole(response['role'])))
    }

    userRole(role): void{
        sessionStorage.setItem('role',role);
        this.router.navigate(['/profile'])
    }
}
