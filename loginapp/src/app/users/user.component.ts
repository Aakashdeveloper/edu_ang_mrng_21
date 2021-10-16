import {Component, OnInit} from '@angular/core';
import {UserService} from './user.service';

@Component({
    selector: 'app-form',
    templateUrl: './user.component.html'
})


export class UserComponent implements OnInit{
    allUser;

    constructor(private userService: UserService) {}

    ngOnInit(){
        this.userService.allUser()
        .subscribe((res) => this.allUser = res)
    }
}
