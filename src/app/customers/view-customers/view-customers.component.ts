import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomersService } from '../../services/customers.service';
import { DataService } from '../../services/data.service';
import { Seller, Cliente } from '../../models/models';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { OtherdataService } from 'src/app/services/otherdata.service';
import { UserService } from 'src/app/services/user.service';

export interface CustomersList {
  id: number;
  nom: string;
}
export interface Provincia {
  id: number;
  nom: string;
}
export interface Seller {
  id: number;
  nom: string;
}

@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html',
  styleUrls: ['./view-customers.component.css'],
  providers: [DataService, CustomersService]
})
export class ViewCustomersComponent implements OnInit {
  customers: Cliente[];
  provincia: Provincia[];
  customersData = null;
  sellerData: Seller[];
  displayedColumns: string[] = ['id', 'nom', 'button'];
  dataSource = new MatTableDataSource(this.customers);
  public services;
  constructor(
    private dataservice: DataService,
    private router: Router,
    private route: ActivatedRoute,
    private customersService: CustomersService,
    private userService: UserService,
    private odService: OtherdataService) { }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    // call service to retrieve customers by seller
    const salesman = JSON.parse(localStorage.getItem('sellerId'));
    console.log('Este vendedor es ' + salesman.id);
    this.customersService.getCustomers(salesman.id).subscribe((data: Cliente[]) => {
      this.customersData = data;
      this.dataSource.data = this.customersData;
    });

    this.odService.getProvincia(this.customersData.prov).subscribe((data: Provincia[]) => {
      this.provincia = data;
    });
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
export class CustomersSource extends DataSource<any> {
  private customersSubject = new BehaviorSubject<CustomersList[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();

  constructor(private customersService: CustomersService) {
    super();
  }
  connect(collectionViewer: CollectionViewer): Observable<CustomersList[]> {
    const salesman = JSON.parse(localStorage.getItem('sellerId'));
    const sellerId = salesman.id;
    console.log('view customers...' + sellerId);
    return this.customersService.getCustomers(sellerId);
    // return this.customersSubject.asObservable();
  }
  disconnect(collectionViewer: CollectionViewer): void {
    // this.customersService.complete();
    // this.loadingSubject.complete();
  }
}



