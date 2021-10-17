import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';

@Injectable()

export  class LoginGaurdService implements CanActivate {
    token;

    constructor(private router: Router) {}

    canActivate(): boolean {
        this.token = sessionStorage.getItem('TOKEN_NUMBER');
        if(this.token == null ){
            this.router.navigate(['/login'])
            return false
        }

        return true
    }
}
