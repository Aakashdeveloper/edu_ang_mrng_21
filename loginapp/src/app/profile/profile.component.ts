import {Component, OnInit} from '@angular/core';
import {LoginService} from '../loginForm/login.service';
import {Router} from '@angular/router';

@Component({
    templateUrl: './profile.component.html'
})


export class ProfileComponent implements OnInit {
    userInfo;
    token;


    constructor(private loginService: LoginService,
            private router: Router) {}

    ngOnInit():void{
        var token = sessionStorage.getItem('TOKEN_NUMBER')
        this.loginService.getUserInfo(token)
        .subscribe((res) => this.userInfo=res)
    }

    logout(): void{
        sessionStorage.removeItem('TOKEN_NUMBER');
        sessionStorage.removeItem('role');
        this.router.navigate(['/login'])
    }
}

