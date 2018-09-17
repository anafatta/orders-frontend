import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { DataService } from '../../services/data.service';
import { OrdersService } from '../../services/orders.service';
import { Cliente, Address, Flete, Art, DetalleArticulo, Variante, Peditem, ItemDatum, OrderDetail, Seller } from '../../models/models';
import { SellerComponent } from '../../commonApp/seller/seller.component';
import { Router } from '@angular/router';

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
  // expreso : Expreso [];
  selectedItems: Peditem[];
  price: number;
  isOpen: boolean;
  isOpen1: boolean;
  conven: string;
  observaciones: string;

  constructor(
    private router: Router,
    private dataservice: DataService,
    private userService: UserService,
    private orderService: OrdersService) { }

  ngOnInit() {
    this.isOpen = true;
    this.isOpen1 = false;
    this.selectedItems = [];
    this.sellerId = this.dataservice.getSellerId();
    this.userService.getClientsBySeller(this.sellerId).subscribe((data: Cliente[]) => {
      this.clients = data;
      console.log('Cliente Nro:' + this.clients);
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
    this.clientId = '621';
    this.userService.getClient(this.clientId).subscribe((data: Cliente) => {
      this.selectedClient = data;
      this.selectedAddress = this.selectedClient.address[0];
      this.selectedFlete = this.selectedAddress.flete;
      this.conven = '1';
      console.log('call client works... ' + this.clientId)
    });
  }

  onCondVentSelected() {

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
      console.log('call getArticuloById works... ' + this.articulo.art_id + ' ' + this.variantes.length)
    });
  }

  addVariante(variante: any) {
    if (this.selectedItems.length == 0 || !(this.selectedItems.some(e => e.itemdata === variante.itemdata_id))) {
      let peditem: Peditem;

      peditem = {
        itemdata: variante.itemdata_id,
        can_ped: 0,
        can_aut: 0,
        pre_ped: 0,
        pre_aut: 0,
        itemdatum: {
          id: 0,
          art1: {
            id: this.artId,
            codfac: '',
            nom: '',
          },
          variante: {
            itemdata_id: variante.itemdata_id,
            codigo: variante.codigo,
            nom: variante.nom,
          }
        }
      }
      this.selectedItems.push(peditem);
      console.log('selectedItems= ' + this.selectedItems.length + '   variante nombre=' + this.selectedItems[0].itemdatum.variante.nom);
    }
  }

  addCount(i: any, selectedCount: any) {
    this.selectedItems[i].can_ped = selectedCount;
    console.log('cantidad pedida=' + this.selectedItems[i].can_ped + '   index ' + i)

  }

  removeVariante(index: number) {
    this.selectedItems.splice(index, 1);
  }

  submitOrderDetail() {
    console.log('precio:' + this.price)

    for (let item of this.selectedItems) {
      item.pre_ped = this.price;
    }

    let order: OrderDetail;
    let seller: Seller;
    console.log('submitOrderDetail= ');
    order = {
      id: 0,
      nro: 0,
      fem: new Date(),
      ven: Number(this.sellerId),
      cli: this.selectedClient.id,
      conven: this.conven,
      observ: this.observaciones,
      cliente: this.selectedClient,
      vend: seller,
      address: this.selectedAddress,
      clidir: Number(this.selectedAddress.id),
      peditms: this.selectedItems,
    };

    this.orderService.submitOrder(order).subscribe((data: OrderDetail) => {
      console.log('order posteada');
    });
    var root = 'orders/view';
    this.router.navigate([root]);
  }

}



