import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()

export class FormPosterService{
    private url = "http://localhost:4500/users"

    constructor(private http: HttpClient){}

    employeeForm(employee): Observable<any[]>{
        return this.http.post<any[]>(this.url, employee)
    }
}