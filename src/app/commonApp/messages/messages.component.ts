import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { MessagesService } from '../../services/messages.service';
import { User, Message, Doc } from '../../models/models';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  users : User[]
  messageForm : FormGroup;
  messages : Message[];
  messagesToMe = null;
  displayedColumns: string[] = ['createdD', 'fromName', 'message'];
  dataSource = new MatTableDataSource(this.messages);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor( private userService: UserService, private messagesService : MessagesService) { }

  ngOnInit() {
    this.messageForm = new FormGroup ({
      to: new FormControl(),
      toName : new FormControl(),
      message: new FormControl(),
    });
    
    this.userService.getUsers()
    .subscribe((data: User[]) => {
      this.users = data;
    });
    console.log(this.users); 
    this.messagesService.get().subscribe((data : Doc) => {
      console.log("mensajes : " + data);
      this.messagesToMe = data.docs;
      this.dataSource.data =  this.messagesToMe;
      console.log("mensaje recuperado : " + this.messagesToMe);
    //this.get();
    })
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    ;
  }

  send() {    
    var to =  this.messageForm.get('to').value ;
    let selectedUser = this.users.find(usr => usr.nro == to);
    var toName =  selectedUser.lastname;
    var text = this.messageForm.get('message').value;

    // Validar que to y text no esten vacios

    console.log("entro al send : " + this.messageForm.get('to').value + " "+ this.messageForm.get('message').value);
    this.messagesService.send(to , toName,  text).subscribe(data => {
      console.log("mensaje enviado : " + data);
    })
    this.messageForm.reset();
  }

}
