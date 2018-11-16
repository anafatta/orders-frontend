import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
// import { StoreModule } from '@ngrx/store';
// import { reducers } from './store/reducers';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { OrdersModule } from './orders/orders.module';
import { CommonAppModule } from './commonApp/commonApp.module';
import { PagenotfoundComponent } from './commonApp/pagenotfound/pagenotfound.component';
import { OrdersService } from './services/orders.service';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomersModule } from './customers/customers.module';
import { CustomersService } from './services/customers.service';
import { OtherdataService } from './services/otherdata.service';
import { ImageService } from './services/image.service';
import { SidenavService } from './services/sidenav.service';
import { SpeedDialFabComponent } from './commonApp/speed-dial-fab/speed-dial-fab.component';



const appRoutes: Routes = [
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SpeedDialFabComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    // StoreModule.forRoot(reducers,{}),
    RouterModule.forRoot(appRoutes),
    CommonAppModule,
    AuthenticationModule,
    OrdersModule,
    CustomersModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [
    OrdersService,
    CustomersService,
    ImageService,
    SidenavService,
    OtherdataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
