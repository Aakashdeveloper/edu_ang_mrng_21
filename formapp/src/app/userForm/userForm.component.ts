import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {IUser} from './userForm.modal';
import {FormPosterService} from './userForm.service';

@Component({
    selector: 'app-form',
    templateUrl: './userForm.component.html'
})


export class UserFormComponent {
    hasCodeLangError = false;
    myEmployee = new IUser('', '', '', '', 0, 'default');
    languages = ["Node", "React", "Angular", "MongoDb"]

    constructor(private formPosterService: FormPosterService) {}

    firstToUpper(value):void{
        if(value.length>0){
            this.myEmployee.firstname = value.charAt(0).toUpperCase()+value.slice(1).toLowerCase()
        }else{
            this.myEmployee.firstname = value
        }
    }

    validateCodeLang(event):void{
        if(this.myEmployee.codelang === "default"){
            this.hasCodeLangError = true
        }else{
            this.hasCodeLangError = false
        }
    }


    submitForm(form:NgForm):void{
        console.log(form.value);
        this.formPosterService.employeeForm(form.value)
        .subscribe((res) => console.log("Form Submitted"))
    }
}
