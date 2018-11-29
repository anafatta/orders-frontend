import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SellerComponent } from './seller/seller.component';
import { MaterialModule } from '../material.module';
import { SpeedDialFabComponent } from './speed-dial-fab/speed-dial-fab.component';
import { MessagesComponent } from './messages/messages.component';

const commonAppRoutes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'sellers', component: SellerComponent },
  { path: 'messages', component: MessagesComponent }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(commonAppRoutes),
    MaterialModule
  ],
  declarations: [
    NavbarComponent,
    HomepageComponent,
    PagenotfoundComponent,
    SellerComponent,
    SpeedDialFabComponent,
    MessagesComponent
  ],
  exports: [
    NavbarComponent,
    HomepageComponent,
    PagenotfoundComponent,
    SellerComponent,
    MessagesComponent
  ]
})
export class CommonAppModule { }
