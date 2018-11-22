import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { DataService } from '../../services/data.service';
import { CustomersService } from '../../services/customers.service';
import { Cliente, Provincia} from '../../models/models';
import { SellerComponent } from '../../commonApp/seller/seller.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OtherdataService } from 'src/app/services/otherdata.service';

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
  provincias: Provincia[];
  provincia: Provincia[];

  constructor(
    private service: CustomersService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private odService: OtherdataService,
  ) { }

  ngOnInit() {
    const salesman = JSON.parse(localStorage.getItem('currentUser'));
    this.sellerId = salesman.userId;
    this.EditCustomerForm = this.fb.group({
      id: [''],
      nom: ['', Validators.required],
      cuit: ['', Validators.required],
      razonsoc: [''],
      address: this.fb.array([]),
      salesman: this.sellerId,
    });
    const customerid = this.route.snapshot.paramMap.get('id');
    this.service.getCustomer(customerid).subscribe((data: Cliente) => {
      this.customersDetail = data;
      this.initForm();
    });
    this.odService.getProvincias().subscribe((data: Provincia[]) => {
      this.provincias = data;
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
        dir: ['', Validators.required],
        localidad: ['', Validators.required],
        codpos: ['', Validators.required],
        prov: [''],
        expreso: ['1'],
      })
    );
    // this.addressForm.patchValue({ dir: '', localidad: '', codpos: '', prov: '', expreso: '1' });
  }
  removeAddress(i: number) {
    const address = this.EditCustomerForm.get('address') as FormArray;
    address.removeAt(i);
  }
  onSubmit() {
    this.service.submitCustomer(this.EditCustomerForm.value).subscribe(data => {
     // console.log();
    });
  }
}
