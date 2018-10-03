import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomersService } from '../../services/customers.service';
import { DataService } from '../../services/data.service';
import { Seller, Cliente } from '../../models/models';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html',
  styleUrls: ['./view-customers.component.css']
})
export class ViewCustomersComponent implements OnInit {
  customers: Cliente[];

  constructor(private dataservice: DataService,
    private router: Router, private route: ActivatedRoute,
    private customersService: CustomersService) { }

  ngOnInit() {
    // call service to retrieve customers by seller
    const sellerId = '37';
    // let sellerId = this.dataservice.getSellerId();
    console.log('view customers...' + sellerId);


    this.customersService.getCustomers(sellerId).subscribe((data: Cliente[]) => {
      console.log('ViewCustomersComponent customers...' + data);
      this.customers = data;
      /*for (let customers of this.customers) {
        console.log("address " + customers.address + "fem" + customers.fem)
      }*/
    });

  }

}



