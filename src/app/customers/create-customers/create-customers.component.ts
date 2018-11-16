import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { DataService } from '../../services/data.service';
import { CustomersService } from '../../services/customers.service';
import { OtherdataService } from '../../services/otherdata.service';
import { Cliente, Address, Flete, Art, DetalleArticulo, Variante, Peditem, Provincia } from '../../models/models';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-customers',
  templateUrl: './create-customers.component.html',
  styleUrls: ['./create-customers.component.css']
})
export class CreateCustomersComponent implements OnInit {
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
  provincias: Provincia[];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dataservice: DataService,
    private userService: UserService,
    private customersService: CustomersService,
    private odService: OtherdataService
  ) { }

  NewCustomerForm: FormGroup;
  addressForm: FormGroup;
  address: FormArray;

  ngOnInit() {
    this.isOpen = true;
    this.isOpen1 = false;
    this.selectedItems = [];
    // this.sellerId = '37';
    this.sellerId = this.dataservice.getSellerId();
    this.initForm();
    this.odService.getProvincias().subscribe((data: Provincia[]) => {
      this.provincias = data;
    });
  }
  initForm() {
    return this.NewCustomerForm = this.fb.group({
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
      dir: ['', Validators.required],
      localidad: ['', Validators.required],
      codpos: ['', Validators.required],
      prov: [''],
      expreso: ['1'],
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
    this.address = this.NewCustomerForm.get('address') as FormArray;
    this.address.push(this.initAddress());
    this.addressForm.patchValue({ id: '', dir: '', localidad: '', codpos: '', prov: '' });
  }
  removeAddress(i: number) {
    const address = this.NewCustomerForm.get('address') as FormArray;
    address.removeAt(i);
  }
  onSubmit() {
    this.customersService.setCustomer(this.NewCustomerForm.value).subscribe(data => {
      // console.log(data);
    });
  }
}



