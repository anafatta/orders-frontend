import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CustomersService } from '../../services/customers.service';
import { OtherdataService } from '../../services/otherdata.service';
import { Seller, Cliente, ItemDatum, Art, Variante, Peditem, Provincia } from '../../models/models';

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
  provincia: Provincia[];
  address: number;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private customersService: CustomersService,
    private odService: OtherdataService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.customersService.getCustomer(id).subscribe((data: Cliente) => {
      this.customersDetail = data;
      // Ver foreach
      let address = this.customersDetail.address[0].prov;
      this.odService.getProvincia(address).subscribe((datax: Provincia[]) => {
        this.provincia = datax;
        // console.log('La prov es ' + this.provincia.nom);
      });
    });

  }

}
