import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateCustomersComponent } from './create-customers/create-customers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewCustomersComponent } from './view-customers/view-customers.component';
import { ViewCustomersDetailsComponent } from './view-customers-details/view-customers-details.component';
import { MaterialModule } from '../material.module';
import { EditCustomersDetailsComponent } from './edit-customers/edit-customers.component';


const customersRoutes: Routes = [
  { path: 'customers/create', component: CreateCustomersComponent },
  { path: 'customers/view', component: ViewCustomersComponent },
  { path: 'customers/detail/:id', component: ViewCustomersDetailsComponent },
  { path: 'customers/edit/:id', component: EditCustomersDetailsComponent }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(customersRoutes),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
    CreateCustomersComponent,
    ViewCustomersComponent,
    ViewCustomersDetailsComponent,
    EditCustomersDetailsComponent,
  ],
  exports: [
    CreateCustomersComponent,
    ViewCustomersComponent,
    ViewCustomersDetailsComponent,
  ]
})
export class CustomersModule { }
