import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';



import { AppComponent } from './app.component';
import { AuthenticationModule } from './authentication/authentication.module'

const appRoutes: Routes = [
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers,{}),
    RouterModule.forRoot(appRoutes),
    AuthenticationModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
