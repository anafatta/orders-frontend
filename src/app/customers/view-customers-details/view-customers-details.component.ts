import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CustomersService } from '../../services/customers.service';
import { Seller, Cliente, ItemDatum, Art, Variante, Peditem } from '../../models/models';

export interface ViewCustomersDetails {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-view-customers-details',
  templateUrl: './view-customers-details.component.html',
  styleUrls: ['./view-customers-details.component.css']
})
export class ViewCustomersDetailsComponent implements OnInit {
  customersDetail: Cliente;
  customersId: string;
  articulos: Art[];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private customersService: CustomersService) { }

  ngOnInit() {
    console.log('on init');
    const id = this.route.snapshot.paramMap.get('id');
    this.customersService.getCustomer(id).subscribe((data: Cliente) => {
      this.customersDetail = data;
      console.log('Customers Detail DATA: ..' + data);
    });
    // this.getDataFake();

    // console.log('Customers Detail ORDER_DETAIL: ..' + this.customersDetail);

  }

}
