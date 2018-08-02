import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { OrdersService } from '../../services/orders.service';
import { Seller , OrderDetail , ItemDatum, Art, Variante, Peditem } from '../../models/models';




@Component({
  selector: 'app-view-order-details',
  templateUrl: './view-order-details.component.html',
  styleUrls: ['./view-order-details.component.css']
})
export class ViewOrderDetailsComponent implements OnInit {
  orderDetail:OrderDetail;
  orderId: string;
  articulos : Art[];

  constructor(  private route: ActivatedRoute,
    private router: Router,
    private orderService: OrdersService) { }

  ngOnInit() {
    console.log("on init");
    let id = this.route.snapshot.paramMap.get('id');
    this.orderService.getOrder(id).subscribe((data : OrderDetail) => {
      this.orderDetail=data;
      console.log("Order Detail DATA: .." + data);
    });
    //this.getDataFake();

    console.log("Order Detail ORDER_DETAIL: .." + this.orderDetail);
 
}

}




