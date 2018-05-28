import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';

const authRoutes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent }
  
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes)
  ],
    declarations: 
    [LoginComponent,
     LogoutComponent,
     HeaderComponent
  ],
  exports : [
    LoginComponent,
    LogoutComponent,
    HeaderComponent
  ]
})
export class AuthenticationModule { }
