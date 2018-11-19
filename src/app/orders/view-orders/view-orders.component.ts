import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OrdersService } from '../../services/orders.service';
import { DataService } from '../../services/data.service';
import { Seller, Order } from '../../models/models';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {
  orders: Order[];

  constructor(
    private dataservice: DataService,
    private router: Router,
    private route: ActivatedRoute,
    private ordersService: OrdersService
  ) { }

  ngOnInit() {
    // call service to retrieve orders by seller
    // let sellerId = this.route.snapshot.paramMap.get('sellerId');
   // let sellerId = this.dataservice.getSellerId();
    //sessionStorage.setItem('sellerId', JSON.stringify(sellerId));
    let sellerId = sessionStorage.getItem('sellerId');
    console.log('view orders...' + sellerId);

    this.ordersService.getOrders(sellerId).subscribe((data: Order[]) => {
      console.log('ViewOrdersComponent orders...' + data);
      this.orders = data;
      for (let order of this.orders)
        console.log("address " + order.address + "fem" + order.fem)
    })
      ;

  }

}



