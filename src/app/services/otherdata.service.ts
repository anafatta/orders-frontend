import { Injectable } from '@angular/core';
import { Expreso, Provincia } from '../models/models';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OtherdataService {
  ROOT_URL = 'https://enigmatic-cove-26128.herokuapp.com/api';
  Get_Expresos = '/expresos';
  Get_Expreso_Id = '/expresos/id/';
  Get_Provincia = '/provincia';
  Get_Provincia_Id = '/provincia/id/';

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'

    })
  };

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
