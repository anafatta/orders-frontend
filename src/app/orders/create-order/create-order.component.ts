import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { DataService } from '../../services/data.service';
import { Cliente } from '../../models/models';


@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  sellerId : string;
  clients : Cliente[];
  selectedClient : string;
  client: Cliente;

  constructor( private dataservice : DataService, private userService : UserService) { 

  }

  ngOnInit() {
    this.sellerId = this.dataservice.getSellerId();

    this.userService.getClientsBySeller(this.sellerId).subscribe((data : Cliente[] ) => {
    this.clients = data;
    console.log("call clients works... "+ this.clients)
    });
  }

  onClientSelected(){
    this.userService.getClient(this.selectedClient).subscribe((data :Cliente) => {
   this.client = data;
   console.log("call client works... "+ this.selectedClient)
    });
   }

}
