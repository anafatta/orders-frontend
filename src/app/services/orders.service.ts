import { Injectable } from '@angular/core';
import { OrderDetail, Order } from '../models/models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private httpClient : HttpClient) { }


getOrders(sellereId: string) :  Observable<Order[]>{
  return this.httpClient.get<Order[]>('http://lumasoft.dyndns.org.:8000/api/pedcab/vendedor/'+ sellereId);
}

getOrder(id:string) : Observable<OrderDetail> {
  return this.httpClient.get<OrderDetail>('http://lumasoft.dyndns.org.:8000/api/pedcab/id/'+ id)
}

}
