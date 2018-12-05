import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomersService } from '../../services/customers.service';
import { DataService } from '../../services/data.service';
import { Seller, Cliente, Det0 } from '../../models/models';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { OtherdataService } from 'src/app/services/otherdata.service';
import { UserService } from 'src/app/services/user.service';
import { AccountsService } from 'src/app/services/accounts.service';

export interface AccountsList {
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
  selector: 'app-view-accounts-detail-doc',
  templateUrl: './view-accounts-detail-doc.component.html',
  styleUrls: ['./view-accounts-detail-doc.component.css'],
  providers: [DataService, CustomersService, AccountsService]
})
export class ViewAccountsDetailDocComponent implements OnInit {
  accounts: Det0[];
  accountData = null;
  sellerData: Seller[];
  displayedColumns: string[] = ['estado', 'codfac', 'nom', 'nro', 'tip', 'fem', 'fve', 'obs', 'saldo'];
  dataSource = new MatTableDataSource(this.accounts);
  public services;
  constructor(
    private dataservice: DataService,
    private router: Router,
    private route: ActivatedRoute,
    private customersService: CustomersService,
    private userService: UserService,
    private odService: OtherdataService,
    private accountService: AccountsService) { }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    // call service to retrieve accounts by seller
    if (localStorage.getItem('sellerId')) {
      const salesman = JSON.parse(localStorage.getItem('sellerId'));
      this.accountService.get_Ctacli_Det2(salesman.id).subscribe((data: Det0[]) => {
        this.accountData = data;
        this.dataSource.data = this.accountData;
      });
    }
    if (localStorage.getItem('sellerIdMaster')) {
      const salesman = JSON.parse(localStorage.getItem('sellerIdMaster'));
      this.accountService.get_Ctacli_Det2(salesman).subscribe((data: Det0[]) => {
        this.accountData = data;
        this.dataSource.data = this.accountData;
      });
    }

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
export class CustomersSource extends DataSource<any> {
  private accountsSubject = new BehaviorSubject<AccountsList[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();

  constructor(private accountsService: CustomersService) {
    super();
  }
  connect(collectionViewer: CollectionViewer): Observable<AccountsList[]> {
    if (localStorage.getItem('sellerId')) {
      const salesman = JSON.parse(localStorage.getItem('sellerId'));
      const sellerId = salesman.id;
      return this.accountsService.getCustomers(sellerId);
    }
    if (localStorage.getItem('sellerIdMaster')) {
      const salesman = JSON.parse(localStorage.getItem('sellerIdMaster'));
      const sellerId = salesman;
      return this.accountsService.getCustomers(sellerId);
    }
  }
  disconnect(collectionViewer: CollectionViewer): void {
    // this.accountsService.complete();
    // this.loadingSubject.complete();
  }
}



