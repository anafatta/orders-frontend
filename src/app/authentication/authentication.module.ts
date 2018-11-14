import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material.module';
import { ChangePasswordComponent } from './change-password/change-password.component';

const authRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'changepassword', component: ChangePasswordComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes),
    MaterialModule
  ],
  declarations:
    [LoginComponent,
      LogoutComponent,
      ChangePasswordComponent
    ],
  exports: [
    LoginComponent,
    LogoutComponent,
    ChangePasswordComponent
  ]
})
export class AuthenticationModule { }
