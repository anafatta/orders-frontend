import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SellerComponent } from './seller/seller.component';

const commonAppRoutes: Routes = [ 
  { path: '', component: HomepageComponent },
  { path: 'sellers', component: SellerComponent } 
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(commonAppRoutes),
  ],
  declarations: [
    NavbarComponent,
    HomepageComponent,
    PagenotfoundComponent,
    SellerComponent
  ],
  exports : [
    NavbarComponent,
    HomepageComponent,
    PagenotfoundComponent,
    SellerComponent
  ]
})
export class CommonAppModule { }
