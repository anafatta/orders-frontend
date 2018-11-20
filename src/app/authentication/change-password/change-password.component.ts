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
  auth : string;
  message : string;

  constructor(private router: Router,  private userService: UserService) { }

  ngOnInit() {
  }

  changePassword(user: string, oldpassword: string, newpassword: string, duplicatedPass: string){
    // ADD duplicatedPass
    if(newpassword != duplicatedPass) {
      this.message = 'La nueva password no coincide'
      return;
    }
    this.userService.changePassword(user, oldpassword, newpassword)
    .subscribe((data: any) => {
      this.auth = data['auth'];
      var userId = data['userId'];
      var username = data['firstname'] + " " +  data['lastname'];
      var token =  data['token'];
      this.message = data['message'];
      console.log("auth:" + this.auth + "   token:" + token);
      sessionStorage.setItem('token', JSON.stringify(token));
      sessionStorage.setItem('username', JSON.stringify(username));
      sessionStorage.setItem('userId', JSON.stringify(userId));
      // se recupera con   sessionStorage.getItem('token'))
    });
    var root = "/sellers";
    this.router.navigate([root]);

  }

}
