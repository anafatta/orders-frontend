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
  isSeller: any;

  constructor(private router: Router,
    private userService: UserService,
    private dataService: DataService,
    private otherdataService: OtherdataService) { }

  ngOnInit() {
    console.log('*****On init*****')
    // call service to retrieve client by seller
    const salesman = JSON.parse(localStorage.getItem('currentUser'));
    console.log('El vendedor es: ' + salesman.firstname + ' ' + salesman.lastname);
    this.userServiceSubscription = this.userService.getSeller(salesman.userId).subscribe((data: Seller[]) => {

      if (data !== null) {
        localStorage.setItem('sellerId', JSON.stringify(data));
        console.log('data ' + JSON.stringify(data));
      } else {
        localStorage.setItem('sellerId', JSON.stringify(null));
      }
      this.isSeller = JSON.parse(localStorage.getItem('sellerId'));

      if (this.isSeller === null) {
        console.log('Es admin');
        this.isAdmin = true;
        this.userService.getSellers().subscribe((dataseller: Seller[]) => {
          this.sellers = dataseller;
          console.log(this.sellers);
        });
      } else {
        this.otherdataService.get_Ctacli_Det0(this.isSeller.id).subscribe((dt0: Det0[]) => {
          console.log(JSON.stringify(dt0));
          this.det0 = dt0;
        });
        this.otherdataService.get_OrdersStatus(this.isSeller.id).subscribe((ordStat: Det0[]) => {
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

