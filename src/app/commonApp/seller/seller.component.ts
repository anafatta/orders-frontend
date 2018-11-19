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
  username : string;

  constructor(private router: Router, private userService: UserService, private dataService: DataService) { }

  ngOnInit() {
    // call service to retrieve client by seller
    console.log("entro al seller oninit")
    var userId = sessionStorage.getItem('userId');
    this.username = sessionStorage.getItem('username');
     this.userService.getSelleById(userId).subscribe((seller: Seller) => {
      console.log(seller.id + " " + seller.nom)
      if (seller) {
        this.isAdmin = false;
        sessionStorage.setItem('sellerId', JSON.stringify(seller.id));
      } else {
        this.isAdmin = true;
        this.userService.getSellers().subscribe((sellers: Seller[]) => {
          //salon
          this.sellers = sellers;
          console.log("call sellers works... " + this.sellers)
        });
      }
    });
  }
  onClick(ven: any) {
    console.log("click works ... ");
    //this.selectedSeller = ven;
    //this.dataService.setSellerId(this.selectedSeller);
    sessionStorage.setItem('sellerId', JSON.stringify(ven));
    var root = "orders/view";
    this.router.navigate([root]);
  }

}

