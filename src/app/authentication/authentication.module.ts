import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const authRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
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
      LogoutComponent
    ],
  exports: [
    LoginComponent,
    LogoutComponent,
  ]
})
export class AuthenticationModule { }
