import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { MessagesService } from '../../services/messages.service';
import { User, Message } from '../../models/models';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  users : User[]
  messageForm : FormGroup;
  messagesToMe : Message[];


  constructor( private userService: UserService, private messagesService : MessagesService) { }

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
    this.get();

  }

  send() {    
    var to =  this.messageForm.get('to').value ;
    var text = this.messageForm.get('message').value;
    // Validar que to y text no esten vacios

    console.log("entro al send : " + this.messageForm.get('to').value + " "+ this.messageForm.get('message').value);
    this.messagesService.send(to , text).subscribe(data => {
      console.log("mensaje enviado : " + data);
    })
  }

   get(){    
    console.log("entro al get : ");
    this.messagesService.get().subscribe((data : Message[]) => {
      this.messagesToMe = data;
      console.log("mensaje enviado : " + data);
    })
  }
}
