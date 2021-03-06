import { Injectable } from '@angular/core';
import { OrderDetail, Order, Art, DetalleArticulo, Precio, CondicionPago } from '../models/models';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
    providedIn: 'root'
})
export class OrdersService {
    ROOT_URL = 'https://enigmatic-cove-26128.herokuapp.com/api';
    // ROOT_URL = 'http://localhost.:8000/api';
  
    GET_ORDERS_URL = '/pedcab/vendedor/';
    GET_ORDER_URL = '/pedcab/id/';
    GET_ARTICULOS_URL = '/articulos/';
    GET_ART_URL = '/articulos/id/';
    POST_ORDER_URL = '/pedcab/';
    Get_Expresos = '/expresos';
    Get_Expreso_Id = '/expresos/id/';
    Get_Precio_id = '/precio/id_articulo/';
    Get_Packings = '/packings/id/';
    Get_Stock = '/articulos/id/';
    Get_CondVen = '/conpag/';
    Get_CondVen_Id = '/conpag/id/';
    Get_Orders_Status = '/pedcab/estado/';

    constructor(private httpClient: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'

        })
    };
    // Retrieve Orders
    getOrders(sellereId: string): Observable<Order[]> {
        return this.httpClient.get<Order[]>(this.ROOT_URL + this.GET_ORDERS_URL + sellereId);
    }

    getOrder(id: string): Observable<OrderDetail> {
        return this.httpClient.get<OrderDetail>(this.ROOT_URL + this.GET_ORDER_URL + id);
    }
    getOrderStatus(sts: string, sellereId: string): Observable<OrderDetail> {
        return this.httpClient.get<OrderDetail>(this.ROOT_URL + this.Get_Orders_Status + sts + '/vendedor/' + sellereId);
    }
    getArticulos(): Observable<Art[]> {
        return this.httpClient.get<Art[]>(this.ROOT_URL + this.GET_ARTICULOS_URL);
    }

    getArticuloById(id: number, packing: number): Observable<DetalleArticulo> {
        return this.httpClient.get<DetalleArticulo>(this.ROOT_URL + this.GET_ART_URL + id + '/' + packing);
    }
    getPrecio(id_articulo, id_conpag, id_cliente): Observable<Precio> {
        return this.httpClient.get<Precio>(this.ROOT_URL +
            this.Get_Precio_id + id_articulo +
            '/id_conpag/' + id_conpag +
            '/id_cliente/' + id_cliente);
    }

    getStock(id: number): Observable<DetalleArticulo> {
        return this.httpClient.get<DetalleArticulo>(this.ROOT_URL + this.Get_Stock + id);
    }

    getPacking(id: number): Observable<DetalleArticulo> {
        return this.httpClient.get<DetalleArticulo>(this.ROOT_URL + this.Get_Packings + id);
    }

    getCondPag(): Observable<CondicionPago[]> {
        return this.httpClient.get<CondicionPago[]>(this.ROOT_URL + this.Get_CondVen);
    }
    getCondPagId(id): Observable<CondicionPago[]> {
        return this.httpClient.get<CondicionPago[]>(this.ROOT_URL + this.Get_CondVen_Id + id);
    }
    submitOrder(order: OrderDetail): Observable<OrderDetail> {
        let postOrder: Observable<OrderDetail>;
        postOrder = this.httpClient.post<OrderDetail>(this.ROOT_URL + this.POST_ORDER_URL, order, this.httpOptions);
        return postOrder;
    }
}
