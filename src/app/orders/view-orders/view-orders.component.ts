import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { SellerComponent, Seller } from '../../commonApp/seller/seller.component';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {
  orders: Order[];

  constructor(private ordersService: OrdersService) { }

  ngOnInit() {
    // call service to retrieve orders by seller
    this.ordersService.getOrders().subscribe(data => {
      console.log();
    });
    
    
   this.orders = [
     {
      id:9873,
      clientId:1,
      clientName: 'Robert De Niro',
      date: new Date('01/12/2018'),
      estimateAmount: 12399
    },
    {
      id:10990,
      clientId:2,
      clientName: 'Julia Robert',
      date: new Date('11/11/2018'),
      estimateAmount: 45900
    },
    {
      id:11789,
      clientId:3,
      clientName: 'Brad Pitt',
      date: new Date('10/10/2018'),
      estimateAmount: 75300
    },

  ]

    
  }

}

/* export interface Order {
  id: number;
  nro:number;
  fem:Date;
  cliente: Cliente;
  vend: Seller;
  address: Address;
  clientId: number;
  clientName: string;
  date: Date;
  estimateAmount: number;  
}
export interface Cliente {
  id:number;
  nombre:string;
}
export interface Address {
  id:number;
  dir:string;
  localidad:string;
  codpos:string;
  prov:string;
} */

export interface Order {
id: number;
clientId: number;
clientName: string;
date: Date;
estimateAmount: number;  
}