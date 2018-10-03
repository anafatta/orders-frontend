import { Injectable } from '@angular/core';
import { Cliente, Art, DetalleArticulo } from '../models/models';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
    providedIn: 'root'
})
export class CustomersService {
    ROOT_URL = 'http://lumasoft.dyndns.org.:8000/api';
    // ROOT_URL = 'http://localhost.:8000/api';

    GET_CUSTOMERS_URL = '/clientes/vendedor/';
    GET_CUSTOMER_URL = '/clientes/id/';
    GET_ARTICULOS_URL = '/articulos/';
    GET_ART_URL = '/articulos/id/';
    POST_CUSTOMERS_URL = '/clientes/';

    constructor(private httpClient: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'

        })
    };

    getCustomers(sellerId: string): Observable<Cliente[]> {
        return this.httpClient.get<Cliente[]>(this.ROOT_URL + this.GET_CUSTOMERS_URL + sellerId);
    }

    getCustomer(id: string): Observable<Cliente> {
        return this.httpClient.get<Cliente>(this.ROOT_URL + this.GET_CUSTOMER_URL + + id);
    }

    getArticulos(): Observable<Art[]> {
        return this.httpClient.get<Art[]>(this.ROOT_URL + this.GET_ARTICULOS_URL);
    }

    getArticuloById(id: number): Observable<DetalleArticulo> {
        return this.httpClient.get<DetalleArticulo>(this.ROOT_URL + this.GET_ART_URL + id);
    }

    submitCustomer(customers: Cliente): Observable<Cliente> {
        let postCustomer: Observable<Cliente>;
        postCustomer = this.httpClient.post<Cliente>(this.ROOT_URL + this.POST_CUSTOMERS_URL, customers, this.httpOptions);
        return postCustomer;
    }
    setCustomer(data) {
        console.log(data);
        sessionStorage.setItem('ctype', JSON.stringify(data));
        const headers = new HttpHeaders().set('Content-Type', 'application/json')
        return this.httpClient.post(this.ROOT_URL + this.POST_CUSTOMERS_URL, JSON.stringify(data), { headers: headers });
    }

}
