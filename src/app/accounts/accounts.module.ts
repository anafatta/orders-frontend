import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// import { CreateAccountsComponent } from './create-accounts/create-accounts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewAccountsComponent } from './view-accounts/view-accounts.component';
// import { ViewAccountsDetailsComponent } from './view-accounts-details/view-accounts-details.component';
import { MaterialModule } from '../material.module';
import { ViewAccountsDetailsComponent } from './view-accounts-detail/view-accounts-detail.component';
// import { EditAccountsDetailsComponent } from './edit-accounts/edit-accounts.component';


const accountsRoutes: Routes = [
  //  { path: 'accounts/create', component: CreateAccountsComponent },
  { path: 'accounts/view', component: ViewAccountsComponent },
  //  { path: 'accounts/detail/:id', component: ViewAccountsDetailsComponent },
  //  { path: 'accounts/edit/:id', component: EditAccountsDetailsComponent }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(accountsRoutes),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
    //  CreateAccountsComponent,
    ViewAccountsComponent,
    ViewAccountsDetailsComponent,
    //  EditAccountsDetailsComponent,
  ],
  exports: [
    //  CreateAccountsComponent,
    ViewAccountsComponent,
    //  ViewAccountsDetailsComponent,
  ]
})
export class AccountsModule { }
