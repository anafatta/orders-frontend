import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Seller } from '../commonApp/seller/seller.component';
import { Observable } from 'rxjs';
//import { Store } from '@ngrx/store';
//import { AppState } from '../store/reducers';
//import { appReducerState }  from '../store/reducers/appReducers';


@Injectable({
  providedIn: 'root'
})

export class UserService {

 // constructor(private store: Store<AppState>) { }
 constructor(private httpClient:HttpClient ) { 

 }

getSellers(): Observable<Seller[]>  {
  return this.httpClient.get<Seller[]>('http://lumasoft.dyndns.org.:8000/api/vend');
}
}
