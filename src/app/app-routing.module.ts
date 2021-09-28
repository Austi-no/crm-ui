import { ContactDetailComponent } from './components/contact/contact-detail/contact-detail.component';
import { AccountDetailComponent } from './components/account/account-detail/account-detail.component';
import { RegisterComponent } from './security/register/register.component';
import { LoginComponent } from './security/login/login.component';
import { HomeComponent } from './layout/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { CreateAccountComponent } from './components/account/create-account/create-account.component';
import { AccountListComponent } from './components/account/account-list/account-list.component';
import { CreateContactComponent } from './components/contact/create-contact/create-contact.component';
import { ContactListComponent } from './components/contact/contact-list/contact-list.component';
import { AuthGuard } from './security/helpers/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuard],
    children: [
      {
        path: '', component: DashboardComponent, canActivate: [AuthGuard]
      },
      {
        path: 'add-account', component: CreateAccountComponent, canActivate: [AuthGuard]
      },
      {
        path: 'account-detail/:id', component: AccountDetailComponent, canActivate: [AuthGuard]
      },
      {
        path: 'manage-accounts', component: AccountListComponent, canActivate: [AuthGuard]
      },
      {
        path: 'add-contact', component: CreateContactComponent, canActivate: [AuthGuard]
      },

      {
        path: 'contact-detail/:id', component: ContactDetailComponent, canActivate: [AuthGuard]
      },
      {
        path: 'manage-contacts', component: ContactListComponent, canActivate: [AuthGuard]
      }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
