import { Injectable } from '@angular/core';
import { Det0 } from '../models/models';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  ROOT_URL = 'https://enigmatic-cove-26128.herokuapp.com/api';
  // ROOT_URL = 'http://localhost.:8000/api';

  Get_Ctacli_Det0 = '/ctacli/det0/ven/';
  Get_Ctacli_Det1 = '/ctacli/det1/ven/';
  Get_Ctacli_Det2 = '/ctacli/det2/ven/';

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'

    })
  };

  get_Ctacli_Det0(id: number): Observable<Det0[]> {
    return this.httpClient.get<Det0[]>(this.ROOT_URL + this.Get_Ctacli_Det0 + id);
  }
  get_Ctacli_Det1(id: number): Observable<Det0[]> {
    return this.httpClient.get<Det0[]>(this.ROOT_URL + this.Get_Ctacli_Det1 + id);
  }
  get_Ctacli_Det2(id: number): Observable<Det0[]> {
    return this.httpClient.get<Det0[]>(this.ROOT_URL + this.Get_Ctacli_Det2 + id);
  }

}
