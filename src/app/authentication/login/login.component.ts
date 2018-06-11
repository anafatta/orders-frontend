import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  inputEmail:string;
  inputPassword:string;
  rememberme: boolean;

  constructor() { }

  ngOnInit() {
  }

  login(){
    console.log(this.inputEmail);
    console.log(this.inputPassword);
    console.log(this.rememberme);
  }
}
