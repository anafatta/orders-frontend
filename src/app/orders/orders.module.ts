import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateOrderComponent } from './create-order/create-order.component';
import { FormsModule } from '@angular/forms';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { ViewOrderDetailsComponent } from './view-order-details/view-order-details.component';


const ordersRoutes: Routes = [
  { path: 'orders/create', component: CreateOrderComponent },
  { path: 'orders/view/:sellerId', component: ViewOrdersComponent },
  { path: 'orders/detail/:id', component: ViewOrderDetailsComponent }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ordersRoutes),
    FormsModule
  ],
  declarations: [
    CreateOrderComponent,
    ViewOrdersComponent,
    ViewOrderDetailsComponent
  ],
  exports: [
    CreateOrderComponent,
    ViewOrdersComponent,
    ViewOrderDetailsComponent
  ]
})
export class OrdersModule { }
