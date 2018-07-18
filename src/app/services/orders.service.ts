import { Injectable } from '@angular/core';
import { OrderDetail, Order } from '../models/models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  ROOT_URL = 'http://lumasoft.dyndns.org.:8000/api';
  GET_ORDERS_URL = '/pedcab/vendedor/';
  GET_ORDER_URL = '/pedcab/id/';

  constructor(private httpClient : HttpClient) { }


getOrders(sellereId: string) :  Observable<Order[]>{
  return this.httpClient.get<Order[]>(this.ROOT_URL + this.GET_ORDERS_URL + sellereId);
}

getOrder(id:string) : Observable<OrderDetail> {
  return this.httpClient.get<OrderDetail>(this.ROOT_URL + this.GET_ORDER_URL + + id)
}

}
