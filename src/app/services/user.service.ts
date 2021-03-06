import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente, Seller, User } from '../models/models';
// import { Store } from '@ngrx/store';
// import { AppState } from '../store/reducers';
// import { appReducerState }  from '../store/reducers/appReducers';


@Injectable({
  providedIn: 'root'
})

export class UserService {
  ROOT_URL = 'https://enigmatic-cove-26128.herokuapp.com/api';
  // ROOT_URL = 'http://localhost.:8000/api';

  constructor(private httpClient: HttpClient) {}

  getSellers(): Observable<Seller[]> {
    return this.httpClient.get<Seller[]>(this.ROOT_URL + '/vend');
  }
  getSeller(id: any): Observable<Seller[]> {
    return this.httpClient.get<Seller[]>(this.ROOT_URL + '/vend/' + id);
  }

  getClientsBySeller(id: string): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(this.ROOT_URL + '/clientes/vendedor/' + id);
  }

  getClient(id: string): Observable<Cliente> {
    return this.httpClient.get<Cliente>(this.ROOT_URL + '/clientes/id/' + id);
  }

  getSelleById(userId : string) :Observable<Object>  {
  console.log("user: " +userId)
  return this.httpClient.get<Seller>(this.ROOT_URL + '/vend/'+ userId);
  }

  getUsers() : Observable<User[]> {
   return this.httpClient.get<User[]>(this.ROOT_URL + '/users');
  }
 
}
