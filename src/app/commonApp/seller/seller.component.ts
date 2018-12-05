import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { DataService } from '../../services/data.service';
import { OtherdataService } from '../../services/otherdata.service';
import { Seller, Det0, OrderStatus } from '../../models/models';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit, OnDestroy {
  sellers: Seller[];
  isAdmin: boolean;
  selectedSeller: string;
  det0: Det0[];
  ordStatus: Det0[];
  semaforo: any;
  userServiceSubscription: Subscription;

  constructor(private router: Router,
              private userService: UserService,
              private dataService: DataService,
              private otherdataService: OtherdataService) { }

  ngOnInit() {
    console.log('*****On init*****')
    // call service to retrieve client by seller
    const salesman = JSON.parse(localStorage.getItem('currentUser'));
    console.log('El vendedor es salesman.lastname: ' + salesman.userId + ' ' +  salesman.lastname);
    this.userServiceSubscription = this.userService.getSeller(salesman.userId).subscribe((data: Seller[]) => {
      console.log('data ' + JSON.stringify(data));
      if (data) {
        localStorage.setItem('sellerId', JSON.stringify(data));
      }
      const isSeller = JSON.parse(localStorage.getItem('sellerId'));
      console.log('El vendedor es: isSeller.id' + isSeller.id);
      if (!isSeller) {
        this.isAdmin = true;
        console.log(this.isAdmin);
        this.userService.getSellers().subscribe((data: Seller[]) => {
          this.sellers = data;
          console.log(this.sellers);
        });
      } else {
        this.otherdataService.get_Ctacli_Det0(isSeller.id).subscribe((dt0: Det0[]) => {
          console.log(JSON.stringify(dt0));
          this.det0 = dt0;
        });
        this.otherdataService.get_OrdersStatus(isSeller.id).subscribe((ordStat: Det0[]) => {
          console.log(JSON.stringify(ordStat));
          this.ordStatus = ordStat;
        });
      }
    });
  }

  ngOnDestroy() {
    console.log('***** Estoy en on destroy *******');
    this.userServiceSubscription.unsubscribe();
  }

  onClick(ven: any) {
    this.selectedSeller = ven;
    localStorage.setItem('sellerIdMaster', JSON.stringify(ven));
    this.dataService.setSellerId(this.selectedSeller);
    var root = 'orders/view';
    this.router.navigate([root]);
  }
  get user(): any {
    return JSON.parse(localStorage.getItem('currentUser'));
  }
  get seller(): any {
    if (localStorage.getItem('sellerId')) {
      return JSON.parse(localStorage.getItem('sellerId'));
    }
  }
}

