import { Injectable } from '@angular/core';
import { OrderDetail } from '../orders/view-order-details/view-order-details.component';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Order } from '../orders/view-orders/view-orders.component';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private httpClient : HttpClient) { }


getOrders(){
  return this.httpClient.get<Order>('http://lumasoft.dyndns.org.:8000/api/pedcab/vendedor/8');
}
}
