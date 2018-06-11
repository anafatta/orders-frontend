import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SellerComponent } from './seller/seller.component';


const ordersRoutes: Routes = [
  { path: 'sellers', component: SellerComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ordersRoutes)

  ],
  declarations: [SellerComponent],
  exports : [
    SellerComponent
  ]
})
export class OrdersModule { }
