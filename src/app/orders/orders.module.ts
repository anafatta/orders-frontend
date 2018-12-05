import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateOrderComponent } from './create-order/create-order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { ViewOrdersStatusComponent } from './view-orders-status/view-orders-status.component';
import { ViewOrderDetailsComponent, ViewOrderDetails } from './view-order-details/view-order-details.component';
import { MaterialModule } from '../material.module';


const ordersRoutes: Routes = [
  { path: 'orders/create', component: CreateOrderComponent },
  { path: 'orders/view', component: ViewOrdersComponent },
  { path: 'orders/detail/:id', component: ViewOrderDetailsComponent },
  { path: 'orders/status/:id', component: ViewOrdersStatusComponent }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ordersRoutes),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
    CreateOrderComponent,
    ViewOrdersComponent,
    ViewOrderDetailsComponent,
    ViewOrdersStatusComponent

  ],
  exports: [
    CreateOrderComponent,
    ViewOrdersComponent,
    ViewOrderDetailsComponent,
    ViewOrdersStatusComponent
  ]
})
export class OrdersModule { }
