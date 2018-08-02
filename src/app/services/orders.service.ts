import { Injectable } from '@angular/core';
import { OrderDetail, Order, Art , DetalleArticulo} from '../models/models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  ROOT_URL = 'http://lumasoft.dyndns.org.:8000/api';
  GET_ORDERS_URL = '/pedcab/vendedor/';
  GET_ORDER_URL = '/pedcab/id/';
  GET_ARTICULOS_URL = '/articulos/';
  GET_ART_URL = '/articulos/id/';

  constructor(private httpClient : HttpClient) { }


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

}
