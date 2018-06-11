import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SellerComponent } from './orders/seller/seller.component';

// import { StoreModule } from '@ngrx/store';
// import { reducers } from './store/reducers';



import { AppComponent } from './app.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { NavbarComponent } from './common/navbar/navbar.component';
import { HomepageComponent } from './common/homepage/homepage.component';
import { PagenotfoundComponent } from './common/pagenotfound/pagenotfound.component';
import { OrdersModule } from './orders/orders.module';


const appRoutes: Routes = [ 
  { path: '', component: HomepageComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    PagenotfoundComponent,
    ],
  imports: [
    BrowserModule,
    FormsModule,
    // StoreModule.forRoot(reducers,{}),
    RouterModule.forRoot(appRoutes),
    AuthenticationModule,
    OrdersModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
