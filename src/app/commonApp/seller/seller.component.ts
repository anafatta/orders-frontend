import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { DataService } from '../../services/data.service';
import { Seller } from '../../models/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {
  sellers: Seller[];
  isAdmin: boolean;
  selectedSeller: string;

  constructor(private router: Router, private userService: UserService, private dataService: DataService) { }

  ngOnInit() {
    // call service to retrieve client by seller
    const salesman = JSON.parse(localStorage.getItem('currentUser'));
    console.log('El vendedor es: ' + salesman.lastname);
    this.isAdmin = true;
    this.userService.getSellers().subscribe((data: Seller[]) => {
      this.sellers = data;
    });


  }
  onClick(ven: any) {
    this.selectedSeller = ven;
    this.dataService.setSellerId(this.selectedSeller);
    var root = 'orders/view';
    this.router.navigate([root]);
  }
  get user(): any {
    return JSON.parse(localStorage.getItem('currentUser'));
  }
  get seller(): any {
    return JSON.parse(localStorage.getItem('sellerId'));
  }
}

