import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  sellerId: string;

  constructor() { }


  setSellerId(id: string) {
    this.sellerId = id;
  }
  getSellerId(): string {
    return this.sellerId;
  }
}