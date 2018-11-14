import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user : string;
  password : string;
  message : string;
  constructor(private router: Router,  private userService: UserService) { }

  ngOnInit() {
  }

  login(user: string, password: string) {
    this.userService.login(user, password)
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

  changePass(){
    var root = "/changepassword";
    this.router.navigate([root]);
  }

}
