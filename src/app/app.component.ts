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
    const salesman = JSON.parse(localStorage.getItem('currentUser'));
    this.userService.getSeller(salesman.userId).subscribe((data: Seller[]) => {
      if (data) {
        localStorage.setItem('sellerId', JSON.stringify(data));
      }
    });
  }
  get user(): any {
    return JSON.parse(localStorage.getItem('currentUser'));
  }
  get seller(): any {
    return JSON.parse(localStorage.getItem('sellerId'));
  }

}
