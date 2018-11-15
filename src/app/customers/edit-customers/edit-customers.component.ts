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
  EditCustomerForm: FormGroup;
  sellerId: string;
  customersService: CustomersService;
  id: number;
  addressForm: FormGroup;
  address: FormArray;

  constructor(
    private service: CustomersService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private dataservice: DataService,
  ) { }

  ngOnInit() {
    this.sellerId = '37';
    this.EditCustomerForm = this.fb.group({
      id: [''],
      nom: ['', Validators.required],
      cuit: ['', Validators.required],
      razonsoc: [''],
      address: this.fb.array([]),
      salesman: this.sellerId,
    });
    const customerid = this.route.snapshot.paramMap.get('id');
    console.log('el id es ' + customerid);
    this.service.getCustomer(customerid).subscribe((data: Cliente) => {
      this.customersDetail = data;
      this.initForm();
    });
  }
  initForm() {
    this.EditCustomerForm.patchValue({
      id: this.customersDetail.id,
      nom: this.customersDetail.nom,
      cuit: this.customersDetail.cuit,
      razonsoc: this.customersDetail.razonsoc,
    });
    this.setAddresses();
  }
  setAddresses() {
    const address = this.EditCustomerForm.get('address') as FormArray;
    this.customersDetail.address.forEach(x => {
      address.push(this.fb.group({
        id: [x.id],
        dir: [x.dir, Validators.required],
        localidad: [x.localidad, Validators.required],
        codpos: [x.codpos, Validators.required],
        prov: [x.prov],
      }));
    });
  }
  addAddress() {
    this.address = this.EditCustomerForm.get('address') as FormArray;
    this.address.push(
      this.fb.group({
        id: [''],
        dir: ['', Validators.required],
        localidad: ['', Validators.required],
        codpos: ['', Validators.required],
        prov: [''],
      })
    );
    // this.addressForm.patchValue({ id: '', dir: '', localidad: '', codpos: '', prov: '' });
  }
  removeAddress(i: number) {
    const address = this.EditCustomerForm.get('address') as FormArray;
    address.removeAt(i);
  }
  onSubmit() {
    this.service.submitCustomer(this.EditCustomerForm.value).subscribe(data => {
    });
  }
}
