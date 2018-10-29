import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ImgInfo } from '../models/models';


@Injectable({
  providedIn: 'root'
})

export class ImageService {
  ROOT_URL = 'https://simsiroglu.com.ar/sim/wp-content/themes/shk/productgallery.php?action=getimg';
  constructor(private httpClient: HttpClient) {
  }
  getImg(codigo, color): Observable<ImgInfo> {
    return this.httpClient.get<ImgInfo>(this.ROOT_URL + '&codigo=' + codigo + '&color=' + color);
  }
}
