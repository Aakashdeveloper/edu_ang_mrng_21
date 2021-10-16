import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {IUser} from './registerForm.modal';
import {RegisterPosterService} from './registerForm.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-form',
    templateUrl: './registerForm.component.html'
})


export class RegisterComponent {

    myEmployee = new IUser('', '', '', 0);

    constructor(
        private formPosterService: RegisterPosterService,
        private router: Router
        ) {}


    submitForm(form:NgForm):void{
        console.log(form.value);
        this.formPosterService.Register(form.value)
        .subscribe((res) => this.router.navigate(['/login']))
    }
}
