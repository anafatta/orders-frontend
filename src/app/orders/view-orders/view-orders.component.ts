import { Component, OnInit, ViewChild } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { DataService } from '../../services/data.service';
import { Seller, Order } from '../../models/models';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';

export interface OrdersList {
  id: number;
  nom: string;
  date: Date;
  address: string;
  // button: string;
}

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css'],
  providers: [DataService, OrdersService]
})
export class ViewOrdersComponent implements OnInit {
  orders: Order[];
  ordersData = null;
  displayedColumns: string[] = ['id', 'date', 'nom', 'address', 'button'];
  dataSource = new MatTableDataSource(this.orders);
  public services;

  constructor(
    private dataservice: DataService,
    private router: Router,
    private route: ActivatedRoute,
    private ordersService: OrdersService
  ) { }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    // call service to retrieve orders by seller
    const salesman = JSON.parse(localStorage.getItem('sellerId'));
    this.ordersService.getOrders(salesman.id).subscribe((data: Order[]) => {
      this.ordersData = data;
      this.dataSource.data = this.ordersData;
      // error => this.error = error
    });
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}



