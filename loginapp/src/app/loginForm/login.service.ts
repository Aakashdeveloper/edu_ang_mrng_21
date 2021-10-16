import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()

export class LoginService{
    private loginUrl = "https://developerjwt.herokuapp.com/api/auth/login"
    private userInfo = "https://developerjwt.herokuapp.com/api/auth/userinfo"

    constructor(private http: HttpClient){}

    login(user): Observable<any[]>{
        console.log("in service", user)
        return this.http.post<any[]>(this.loginUrl, user,{
            headers: {
                'Content-Type':'application/json',
                'Accept':'application/json'
            }
        })
    }

    getUserInfo(token){
        sessionStorage.setItem('TOKEN_NUMBER',token)
        return this.http.get(this.userInfo,{
            headers: {'x-access-token':token}
        })
    }
}