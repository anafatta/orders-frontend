import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {
  orders: Order[];

  constructor() { }

  ngOnInit() {
    // call service to retrieve orders by seller
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

export interface Order {
  id: number;
  clientId: number;
  clientName: string;
  date: Date;
  estimateAmount: number;  
}