import { Component, ViewChild, OnInit } from '@angular/core';
import { SidenavService } from './services/sidenav.service';
import { MatSidenav } from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Simsiroglu Sales System';
  imgName: string;
  @ViewChild('sidenav') public sidenavend: MatSidenav;

  constructor(private sidenavService: SidenavService) {
  }

  ngOnInit(): void {
    this.sidenavService.setSidenav(this.sidenavend);
    this.imgName = localStorage.getItem('img');
    console.log('Lo guardado es ' + this.imgName);
  }
  
}
