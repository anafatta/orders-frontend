import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PasschangeComponent } from './passwordchange/passchange/passchange.component';

const authRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'change-password', component: PasschangeComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes),
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations:
    [LoginComponent,
      LogoutComponent,
      PasschangeComponent
    ],
  exports: [
    LoginComponent,
    LogoutComponent,
    PasschangeComponent
  ]
})
export class AuthenticationModule { }
