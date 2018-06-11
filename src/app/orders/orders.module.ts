import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const ordersRoutes: Routes = [

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ordersRoutes)

  ],
  declarations: [

  ],
  exports : [

  ]
})
export class OrdersModule { }
