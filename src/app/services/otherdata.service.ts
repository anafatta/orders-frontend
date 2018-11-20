import { Injectable } from '@angular/core';
import { Expreso, Provincia, Precio } from '../models/models';
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
  Get_Precio_id = '/precio/id_articulo/';

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
  getPrecio(id_articulo, id_conpag, id_cliente): Observable<Precio> {
    return this.httpClient.get<Precio>(this.ROOT_URL +
          this.Get_Precio_id + id_articulo +
          '/id_conpag/' + id_conpag +
          '/id_cliente/' + id_cliente);
  }

}