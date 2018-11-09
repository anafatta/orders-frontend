import { Component, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  greetingMessage = 'Hello guest';
  logout = true;

  constructor() { }

  ngOnInit() {
  }

}
