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
  addressForm: FormGroup;
  address: FormArray;
  addresses: Address[] = [];
  ngOnInit() {
    this.isOpen = true;
    this.isOpen1 = false;
    this.selectedItems = [];
    this.sellerId = '37';
    const id = this.route.snapshot.paramMap.get('id');
    this.customersService.getCustomer(id).subscribe((data: Cliente) => {
      this.customersDetail = data;
      this.initForm();
    });
  }
  initForm() {
    let addresses = this.customersDetail.address;
    console.log(addresses);
    return this.EditCustomerForm = this.fb.group({
      id: [this.customersDetail.id],
      nom: [this.customersDetail.nom, Validators.required],
      cuit: [this.customersDetail.cuit, Validators.required],
      razonsoc: [this.customersDetail.razonsoc],
      address: this.fb.array([
        this.initAddress(0),
        this.initAddress(1),
      ]),
      salesman: [this.sellerId],
    });
  }

  initAddress(x) {
    let i = x;
    let address = this.customersDetail.address;
    return this.addressForm = this.fb.group({
      id: [address[i].id],
      dir: [address[i].dir, Validators.required],
      localidad: [address[i].localidad, Validators.required],
      codpos: [address[i].codpos, Validators.required],
      prov: [address[i].prov],
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
    this.address = this.EditCustomerForm.get('address') as FormArray;
    this.address.push(this.initAddress());
    this.addressForm.patchValue({ id: '', dir: '', localidad: '', codpos: '', prov: '' });
  }
  removeAddress(i: number) {
    const address = this.EditCustomerForm.get('address') as FormArray;
    address.removeAt(i);
  }
  onSubmit() {
    this.customersService.submitCustomer(this.EditCustomerForm.value).subscribe(data => {
      // console.log(data);
    });
  }
}



