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
  auth: string;
  message: string;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  login(user: string, password: string) {
    console.log("login:");
    if(!user){
      this.message = "Ingrese el usuario"
      console.log(this.message);
      return;
    }
    if(!password){
      this.message = "Ingrese la contraseña"
      console.log(this.message);
      return;
    }
    this.userService.login(user, password)
      .subscribe((data: any) => {
        console.log("data:" + data);
        if(data['auth'] == "false"){
          this.message = data['message'];
          console.log(this.message);
          return;
        }
        this.auth = data['auth'];
        var userId = data['userId'];
        var username = data['firstname'] + " " + data['lastname'];
        var token = data['token'];
        this.message = data['message'];
        console.log("auth:" + this.auth + "   token:" + token + "  username  " + username + "  userId   " + userId);
        sessionStorage.setItem('token', JSON.stringify(token));
        sessionStorage.setItem('username', JSON.stringify(username));
        sessionStorage.setItem('userId', JSON.stringify(userId));
        // se recupera con   sessionStorage.getItem('token'))
      });
     var root = "/sellers";
     this.router.navigate([root]);

  }



  changePass() {
    var root = "/changepassword";
    this.router.navigate([root]);
  }

}
