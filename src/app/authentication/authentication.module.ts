import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PagenotfoundComponent } from '../common/pagenotfound/pagenotfound.component';
import { HomepageComponent } from '../common/homepage/homepage.component';
import { RouterModule, Routes } from '@angular/router';

const authRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes)
  ],
    declarations: 
    [LoginComponent,
     LogoutComponent
  ],
  exports : [
    LoginComponent,
    LogoutComponent,
  ]
})
export class AuthenticationModule { }
