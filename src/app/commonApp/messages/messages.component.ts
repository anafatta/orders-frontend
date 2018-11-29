import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/models';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  users : User[]
  messageForm : FormGroup;


  constructor( private userService: UserService) { }

  ngOnInit() {
    this.messageForm = new FormGroup ({
      to: new FormControl(),
      message: new FormControl(),
    });
    
    this.userService.getUsers()
    .subscribe((data: User[]) => {
      this.users = data;
    });
    console.log(this.users); 
  }

  send() {    
    console.log("entro al send : " + this.messageForm.value);
    console.log("entro al send : " + this.messageForm.get('to').value + " "+ this.messageForm.get('message').value);
  }
}
