import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Injectable()
export class SidenavService {
  private sidenavend: MatSidenav;


  public setSidenav(sidenavend: MatSidenav) {
    this.sidenavend = sidenavend;
  }

  public open() {
    return this.sidenavend.open();
  }


  public close() {
    return this.sidenavend.close();
  }

  public toggle(): void {
    this.sidenavend.toggle();
  }
}
