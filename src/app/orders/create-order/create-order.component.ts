import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { DataService } from '../../services/data.service';
import { OrdersService } from '../../services/orders.service'
import { Cliente, Address, Flete, Art, DetalleArticulo, Variante, Peditem } from '../../models/models';


@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  sellerId: string;
  clients: Cliente[];
  clientId: string;
  selectedClient: Cliente;
  addressSelectedId: string;
  selectedAddress: Address;
  selectedFlete: Flete;
  articulos: Art[];
  artId: number;
  articulo: DetalleArticulo;
  hasVariantes: boolean;
  variantes: Variante[];
  //expreso : Expreso [];
  selectedItems: Peditem[];
  constructor(private dataservice: DataService, private userService: UserService, private orderService: OrdersService) {

  }

  ngOnInit() {
    this.sellerId = this.dataservice.getSellerId();
    this.userService.getClientsBySeller(this.sellerId).subscribe((data: Cliente[]) => {
      this.clients = data;
      this.selectedClient = this.clients[0];
    });
    // LOADING ARTICULOS
    this.orderService.getArticulos().subscribe((data: Art[]) => {
      this.articulos = data;
    });


  }

  onClientSelected(event: any) {
    console.log('Selected value');
    console.log(event);
    this.clientId = event;
    this.userService.getClient(this.clientId).subscribe((data: Cliente) => {
      this.selectedClient = data;
      this.selectedAddress = this.selectedClient.address[0];
      this.selectedFlete = this.selectedAddress.flete;

      console.log("call client works... " + this.clientId)
    });
  }

  onArtSelected(event: any) {
    this.artId = event;
    this.orderService.getArticuloById(this.artId).subscribe((data: DetalleArticulo) => {
      this.articulo = data;      
      if (this.articulo && this.articulo.variantes && this.articulo.variantes.length > 0) {
        this.variantes = this.articulo.variantes;
        this.hasVariantes = true;
      } else {
        this.hasVariantes = false;
      }
      console.log("call getArticuloById works... " + this.articulo.art_id + " " +   this.variantes.length)
    });
  }

}
