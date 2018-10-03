import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { DataService } from '../../services/data.service';
import { CustomersService } from '../../services/customers.service';
import { Cliente, Address, Flete, Art, DetalleArticulo, Variante, Peditem, ItemDatum, CustomersDetail, Seller } from '../../models/models';
import { SellerComponent } from '../../commonApp/seller/seller.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-customers',
  templateUrl: './edit-customers.component.html',
  styleUrls: ['./edit-customers.component.css']
})
export class EditCustomersDetailsComponent implements OnInit {
  customersDetail: Cliente;
  customersId: string;
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
    private fb: FormBuilder,
    private router: Router,
    private dataservice: DataService,
    private userService: UserService,
    private customersService: CustomersService,
    private route: ActivatedRoute,
  ) { }
  EditCustomerForm: FormGroup;
  ngOnInit() {
    this.isOpen = true;
    this.isOpen1 = false;
    this.selectedItems = [];
    this.sellerId = '37';
    console.log('on init');
    const id = this.route.snapshot.paramMap.get('id');
    console.log('getid' + id);
    this.customersService.getCustomer(id).subscribe((data: Cliente) => {
      this.customersDetail = data;
      //console.log('Customers Detail DATA: ..' + data);
    });
    // this.sellerId = this.dataservice.getSellerId();
    this.EditCustomerForm = this.fb.group({
      nom: ['', Validators.required],
      cuit: ['', Validators.required],
      razonsoc: [''],
      address: this.fb.array([
        this.initAddress(),
      ]),
      salesman: [this.sellerId],
    });
  }
  initAddress() {
    return this.fb.group({
      id: [''],
      dir: ['', Validators.required],
      localidad: ['', Validators.required],
      codpos: ['', Validators.required],
      prov: [''],
      flete: this.fb.array([
        this.initFlete(),
      ]),
    });
  }
  initFlete() {
    return this.fb.group({
      nom: [''],
    });
  }
  addAddress() {
    const control = <FormArray>this.EditCustomerForm.controls['address'];
    control.push(this.initAddress());
  }
  onSubmit() {
    this.customersService.setCustomer(this.EditCustomerForm.value).subscribe(data => {
      console.log(data);
    });
  }

  /*addVariante(variante: any) {
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

  submitCustomersDetail() {
    console.log('precio:' + this.price);

    for (const item of this.selectedItems) {
      item.pre_ped = this.price;
    }

    let customers: Cliente;
    let seller: Seller;
    console.log('submitCustomersDetail= ');
    customers = {
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

    this.customersService.submitCustomer(customers).subscribe((data: Cliente) => {
      console.log('customers posteada');
    });
    var root = 'customers/view';
    this.router.navigate([root]);
  }
*/
}



