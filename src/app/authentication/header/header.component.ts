import { Component, OnInit } from '@angular/core';
import { UserService }  from '../../services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  greetingMessage = "Hello guest";
  logout = true;

  constructor(private user : UserService) { 

  }

  ngOnInit() {
    this.user.getAllStates().subscribe( state => {
      console.log(state);
    })
  }

}
