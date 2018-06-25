import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { OrdersService } from '../../services/orders.service';


@Component({
  selector: 'app-view-order-details',
  templateUrl: './view-order-details.component.html',
  styleUrls: ['./view-order-details.component.css']
})
export class ViewOrderDetailsComponent implements OnInit {
  orderDetail:OrderDetail;
  orderId: string;

  constructor(  private route: ActivatedRoute,
    private router: Router,
    private orderService: OrdersService) { }

  ngOnInit() {
    console.log("on init");
    let id = this.route.snapshot.paramMap.get('id');
    console.log ("snapshotId: " + id )
  }

}

export interface OrderDetail {
  id: number;
  clientId: number;
  clientName: string;
  address: string,
  date: Date;
  estimateAmount: number;  
}
