import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { OrdersService, } from '../../services/orders.service';
import { OtherdataService } from '../../services/otherdata.service';

import { Cliente, Address, Flete, Art, DetalleArticulo, Variante, Peditem, OrderDetail, Seller } from '../../models/models';
import { Precio } from '../../models/models';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith, filter } from 'rxjs/operators';

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
  myControl = new FormControl();
  filteredOptions: Observable<Cliente[]>;
  myControlArt = new FormControl();
  filteredOptionsArt: Observable<Art[]>;
  /*Ligthbox */
  myImgUrl: 'https://simsiroglu.com.ar/sim/wp-content/uploads/2017/07/polish.png';

  constructor(
    private userService: UserService,
    private orderService: OrdersService,
    private otherService: OtherdataService) { }

  ngOnInit() {
    this.isOpen = true;
    this.isOpen1 = false;
    this.selectedItems = [];
    if (localStorage.getItem('sellerId')) {
      const salesman = JSON.parse(localStorage.getItem('sellerId'));
      this.sellerId = salesman.id;
    }
    if (localStorage.getItem('sellerIdMaster')) {
      const salesman = JSON.parse(localStorage.getItem('sellerIdMaster'));
      this.sellerId = salesman;
    }
    this.userService.getClientsBySeller(this.sellerId).subscribe(
      (data: Cliente[]) => {
        this.clients = data;
        this.selectedClient = this.clients[0];
        console.log('Success');
      },
      (err) => {
        console.log('Failure');
      });
    // LOADING ARTICULOS
    this.orderService.getArticulos().subscribe((data: Art[]) => {
      this.articulos = data;
    });
    // Autocomplete filter
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(null),
        map(value => value ? this._filter(value) : this.clients)
      );
    this.filteredOptionsArt = this.myControlArt.valueChanges
      .pipe(
        startWith(null),
        map(value => value ? this._filterArt(value) : this.articulos)
      );
  }
  // Autocomplete filter
  displayFn(user?: Cliente): string | undefined {
    return user ? user.nom : undefined;
  }
  displayFnArt(art?: Art): string | undefined {
    return art ? art.nom : undefined;
  }
  // Autocomplete filter
  private _filter(value: string): Cliente[] {
    const filterValue = value.toLowerCase();
    return this.clients.filter(option => option.nom.toLowerCase().includes(filterValue));
  }
  private _filterArt(value: string): Art[] {
    const filterValueArt = value.toLowerCase();
    return this.articulos.filter(option => option.nom.toLowerCase().includes(filterValueArt));
  }
  // Autocomplete filter
  onClientSelected(event: any) {
    this.clientId = event.id;
    this.userService.getClient(this.clientId).subscribe(
      (data: Cliente) => {
        this.selectedClient = data;
        this.selectedAddress = this.selectedClient.address[0];
        this.selectedFlete = this.selectedAddress.flete;
        this.conven = '1';
      });
  }

  onCondVentSelected() {
  }
  onArtSelected(event: any) {
    console.log('Art = ' + event);
    this.artId = event.id;
    this.orderService.getArticuloById(this.artId).subscribe((data: DetalleArticulo) => {
      this.articulo = data;
      if (this.articulo && this.articulo.variantes && this.articulo.variantes.length > 0) {
        this.variantes = this.articulo.variantes;
        this.hasVariantes = true;
      } else {
        this.hasVariantes = false;
      }
      this.orderService.getPrecio(this.articulo.art_id, 1, this.selectedClient.id).subscribe((price: Precio) => {
        this.price = price.precio;
        console.log('Precio = ' + this.price);
      });
    });
  }

  addVariante(variante: any) {
    if (this.selectedItems.length === 0 || !(this.selectedItems.some(e => e.itemdata === variante.itemdata_id))) {
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
      };
      this.selectedItems.push(peditem);
      console.log('selectedItems= ' + this.selectedItems.length + '   variante nombre=' + this.selectedItems[0].itemdatum.variante.nom);
    }
  }

  addCount(i: any, selectedCount: any) {
    this.selectedItems[i].can_ped = selectedCount;
    console.log('cantidad pedida=' + this.selectedItems[i].can_ped + '   index ' + i);

  }

  removeVariante(index: number) {
    this.selectedItems.splice(index, 1);
  }

  submitOrderDetail() {
    console.log('precio:' + this.price);

    for (const item of this.selectedItems) {
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

    this.orderService.submitOrder(order).subscribe(
      (data: OrderDetail) => {
        console.log('Order Sent' + order);
      },
      (err) => {
        console.log('Failure');
      });
    // var root = 'orders/view';
    // this.router.navigate([root]);
  }

}



