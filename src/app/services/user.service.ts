import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente, Seller } from '../models/models';
// import { Store } from '@ngrx/store';
// import { AppState } from '../store/reducers';
// import { appReducerState }  from '../store/reducers/appReducers';


@Injectable({
  providedIn: 'root'
})

export class UserService {
  ROOT_URL = 'https://enigmatic-cove-26128.herokuapp.com/api';
  //ROOT_URL = 'http://lumasoft.dyndns.org:8000/api';
  LOGIN_URL = '/login';
  CHANGE_PASS_URL = "/changepass"
  // constructor(private store: Store<AppState>) { }
  constructor(private httpClient: HttpClient) {

  }
  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'

    })
};

  getSellers(): Observable<Seller[]> {

    return this.httpClient.get<Seller[]>(this.ROOT_URL + '/vend');
  }

  getClientsBySeller(id: string): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(this.ROOT_URL + '/clientes/vendedor/' + id);
  }

  getClient(id: string): Observable<Cliente> {
    return this.httpClient.get<Cliente>(this.ROOT_URL + '/clientes/id/' + id);
  }

 login(user: string, password: string) {
   console.log("user: " +user + "     password:  " + password)
   var login = {
    username: user,
     password: password
   }
  return this.httpClient.post(this.ROOT_URL + this.LOGIN_URL, login, this.httpOptions);
 }

 changePassword(user: string, oldpassword: string, newpassword: string) {
  console.log("user: " +user + "     new_password:  " + newpassword +  "     old_password:  " + oldpassword  )
  var changeForm = {
    "username":user,
    "newpassword":newpassword,
    "oldpassword":oldpassword
    }
 return this.httpClient.put(this.ROOT_URL + this.CHANGE_PASS_URL, changeForm, this.httpOptions);
}
}
