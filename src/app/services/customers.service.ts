import { Injectable } from '@angular/core';
import { Cliente, Art, DetalleArticulo } from '../models/models';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';



@Injectable({
    providedIn: 'root'
})
export class CustomersService {
    ROOT_URL = 'https://enigmatic-cove-26128.herokuapp.com/api';
    // ROOT_URL = 'http://localhost.:8000/api';
  
    GET_CUSTOMERS_URL = '/clientes/vendedor/';
    GET_CUSTOMER_URL = '/clientes/id/';
    GET_ARTICULOS_URL = '/articulos/';
    GET_ART_URL = '/articulos/id/';
    CUSTOMERS_URL = '/clientes/';

    constructor(private httpClient: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
            'Something bad happened; please try again later.');
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
    submitCustomer(data) {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        sessionStorage.setItem('customers', JSON.stringify(data));
        // return this.httpClient.put(this.ROOT_URL + this.GET_CUSTOMER_URL + data.id, JSON.stringify(data), { headers: headers });
        return this.httpClient.put(this.ROOT_URL + this.GET_CUSTOMER_URL + data.id, JSON.stringify(data), { headers: headers })
            .pipe(
                catchError(this.handleError)
            );
    }
    setCustomer(data) {
        sessionStorage.setItem('ctype', JSON.stringify(data));
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.httpClient.put(this.ROOT_URL + this.GET_CUSTOMER_URL, JSON.stringify(data), { headers: headers });
    }

}
