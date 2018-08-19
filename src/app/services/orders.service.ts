import { Injectable } from '@angular/core';
import { OrderDetail, Order, Art , DetalleArticulo} from '../models/models';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class OrdersService {
//  ROOT_URL = 'http://lumasoft.dyndns.org.:8000/api';
ROOT_URL = 'http://localhost.:8000/api';

  GET_ORDERS_URL = '/pedcab/vendedor/';
  GET_ORDER_URL = '/pedcab/id/';
  GET_ARTICULOS_URL = '/articulos/';
  GET_ART_URL = '/articulos/id/';
  POST_ORDER_URL = '/pedcab/';

  constructor(private httpClient : HttpClient) { }

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'

    })
  };

getOrders(sellereId: string) :  Observable<Order[]>{
  return this.httpClient.get<Order[]>(this.ROOT_URL + this.GET_ORDERS_URL + sellereId);
}

getOrder(id:string) : Observable<OrderDetail> {
  return this.httpClient.get<OrderDetail>(this.ROOT_URL + this.GET_ORDER_URL + + id)
}

getArticulos() : Observable<Art[]> {
  return this.httpClient.get<Art[]>(this.ROOT_URL + this.GET_ARTICULOS_URL)
}

getArticuloById(id: number) : Observable<DetalleArticulo> {
  return this.httpClient.get<DetalleArticulo>(this.ROOT_URL + this.GET_ART_URL + id)
}

submitOrder(order: OrderDetail) : Observable<OrderDetail> {
  let postOrder:   Observable<OrderDetail>
  postOrder = this.httpClient.post<OrderDetail>(this.ROOT_URL + this.POST_ORDER_URL,order, this.httpOptions);
  return postOrder;
}

}
