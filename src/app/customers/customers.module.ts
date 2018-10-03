import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateCustomersComponent } from './create-customers/create-customers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewCustomersComponent } from './view-customers/view-customers.component';
import { ViewCustomersDetailsComponent } from './view-customers-details/view-customers-details.component';
import { MaterialModule } from '../material.module';


const customersRoutes: Routes = [
  { path: 'customers/create', component: CreateCustomersComponent },
  { path: 'customers/view', component: ViewCustomersComponent },
  { path: 'customers/detail/:id', component: ViewCustomersDetailsComponent }

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
    ViewCustomersDetailsComponent
  ],
  exports: [
    CreateCustomersComponent,
    ViewCustomersComponent,
    ViewCustomersDetailsComponent,
  ]
})
export class CustomersModule { }
