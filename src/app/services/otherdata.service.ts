import { Injectable } from '@angular/core';
import { Expreso, Provincia, Det0 } from '../models/models';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class OtherdataService {
  ROOT_URL = 'https://enigmatic-cove-26128.herokuapp.com/api';
  // ROOT_URL = 'http://localhost.:8000/api';

  Get_Expresos = '/expresos';
  Get_Expreso_Id = '/expresos/id/';
  Get_Provincia = '/provincia';
  Get_Provincia_Id = '/provincia/id/';
  Get_Ctacli_Det0 = '/ctacli/det0/ven/';
  Get_Order_Status = '/pedcab/estado/';

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'

    })
  };

  get_Ctacli_Det0(id: number): Observable<Det0[]> {
    return this.httpClient.get<Det0[]>(this.ROOT_URL + this.Get_Ctacli_Det0 + id);
  }
  get_OrdersStatus(id: number): Observable<Det0[]> {
    return this.httpClient.get<Det0[]>(this.ROOT_URL + this.Get_Order_Status + id);
  }

  // Retrieve adittional orders and customers data

  getExpresos(): Observable<Expreso[]> {
    return this.httpClient.get<Expreso[]>(this.ROOT_URL + this.Get_Expresos);
  }
  getExpreso(id: number): Observable<Expreso[]> {
    return this.httpClient.get<Expreso[]>(this.ROOT_URL + this.Get_Expreso_Id + id);
  }
  getProvincias(): Observable<Provincia[]> {
    return this.httpClient.get<Provincia[]>(this.ROOT_URL + this.Get_Provincia);
  }
  getProvincia(id): Observable<Provincia[]> {
    return this.httpClient.get<Provincia[]>(this.ROOT_URL + this.Get_Provincia_Id + id);
  }

}
