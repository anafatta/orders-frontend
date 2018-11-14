import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  message : string;
  constructor(private router: Router,  private userService: UserService) { }

  ngOnInit() {
  }

  changePassword(user: string, oldpassword: string, newpassword: string){
    this.userService.changePassword(user, oldpassword, newpassword)
    .subscribe((data: any) => {
        var auth = data['auth'];
        var token =  data['token'];
        this.message = data['message'];
        console.log("auth:" + auth + "   token:" + token);
        sessionStorage.setItem('token', JSON.stringify(token));
        // se recupera con   sessionStorage.getItem('token'))
    });
    var root = "/sellers";
    this.router.navigate([root]);

  }

}
