import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

// import { StoreModule } from '@ngrx/store';
// import { reducers } from './store/reducers';



import { AppComponent } from './app.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { OrdersModule } from './orders/orders.module';
import { CommonAppModule } from './commonApp/commonApp.module';
import { PagenotfoundComponent } from './commonApp/pagenotfound/pagenotfound.component';


const appRoutes: Routes = [ 
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    // StoreModule.forRoot(reducers,{}),
    RouterModule.forRoot(appRoutes),
    CommonAppModule ,
    AuthenticationModule,
    OrdersModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
