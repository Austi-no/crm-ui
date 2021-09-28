import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './layout/home/home.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { CreateAccountComponent } from './components/account/create-account/create-account.component';
import { AccountListComponent } from './components/account/account-list/account-list.component';
import { CreateContactComponent } from './components/contact/create-contact/create-contact.component';
import { ContactListComponent } from './components/contact/contact-list/contact-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoginComponent } from './security/login/login.component';
import { RegisterComponent } from './security/register/register.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AuthInterceptor } from './security/helpers/auth.interceptor';
import { ChartsModule } from 'ng2-charts';
import { AccountDetailComponent } from './components/account/account-detail/account-detail.component';
import { ContactDetailComponent } from './components/contact/contact-detail/contact-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    DashboardComponent,
    NavBarComponent,
    SidebarComponent,
    CreateAccountComponent,
    AccountListComponent,
    CreateContactComponent,
    ContactListComponent,
    LoginComponent,
    RegisterComponent,
    AccountDetailComponent,
    ContactDetailComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule, HttpClientModule,
    FormsModule, ToastrModule.forRoot(), NgxSpinnerModule, ChartsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
