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

    this.isAdmin = true;
    this.userService.getSellers().subscribe((data: Seller[]) => {
      //salon
      this.sellers = data;
      console.log("call sellers works... " + this.sellers)
    });


  }
  onClick(ven: any) {
    console.log("click works ... ");
    this.selectedSeller = ven;
    this.dataService.setSellerId(this.selectedSeller);
    var root = "orders/view";
    this.router.navigate([root]);
  }

}

