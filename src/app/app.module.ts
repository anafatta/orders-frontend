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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomersModule } from './customers/customers.module';
import { CustomersService } from './services/customers.service';
import { OtherdataService } from './services/otherdata.service';
import { ImageService } from './services/image.service';
import { SidenavService } from './services/sidenav.service';
import { SpeedDialFabComponent } from './commonApp/speed-dial-fab/speed-dial-fab.component';
import { AuthenticationService } from './services/authentication.service';
import { AlertService } from './services/alert.service';
import { AccountsService } from './services/accounts.service';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { GlobalApp } from './_helpers/global';
import { AlertsComponent } from './commonApp/alerts/alerts.component';
import { AccountsModule } from './accounts/accounts.module';


const appRoutes: Routes = [
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SpeedDialFabComponent,
    AlertsComponent
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
    AccountsModule
  ],
  providers: [
    OrdersService,
    CustomersService,
    ImageService,
    SidenavService,
    OtherdataService,
    AuthenticationService,
    AccountsService,
    AlertService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    GlobalApp
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
