import { Component, ViewChild, OnInit } from '@angular/core';
import { SidenavService } from './services/sidenav.service';
import { MatSidenav } from '@angular/material';
import { UserService } from './services/user.service';
import { Seller } from './models/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Simsiroglu Sales System';
  imgName: string;
  sellerData: Seller[];
  @ViewChild('sidenav') public sidenavend: MatSidenav;

  constructor(private sidenavService: SidenavService,
    private userService: UserService) {
  }

  ngOnInit(): void {
    this.sidenavService.setSidenav(this.sidenavend);
  }
  get user(): any {
    return JSON.parse(localStorage.getItem('currentUser'));
  }
  get seller(): any {
    return JSON.parse(localStorage.getItem('sellerId'));
  }

}
