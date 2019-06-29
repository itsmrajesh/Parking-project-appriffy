import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarLogedinComponent } from './components/shared/navbar/navbar-logedin/navbar-logedin.component';
import { NavbarGeneralComponent } from './components/shared/navbar/navbar-general/navbar-general.component';
import { ContactUsComponent } from './components/shared/info/contact-us/contact-us.component';
import { AboutUsComponent } from './components/shared/info/about-us/about-us.component';
import { FooterComponent } from './components/shared/info/footer/footer.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { DashboardComponent } from './components/user/dashboard/dashboard.component';
import { MyAccountComponent } from './components/user/my-account/my-account.component';
import { ShowBookingsComponent } from './components/user/show-bookings/show-bookings.component';
import { HomeDashboardComponent } from './components/shared/home-dashboard/home-dashboard.component';
import { AuthComponent } from './components/auth/auth.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DashboardSidebarComponent } from './components/user/dashboard-sidebar/dashboard-sidebar.component';
import { MapsComponent } from './components/shared/info/maps/maps.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarLogedinComponent,
    NavbarGeneralComponent,
    ContactUsComponent,
    AboutUsComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    MyAccountComponent,
    ShowBookingsComponent,
    HomeDashboardComponent,
    AuthComponent,
    PageNotFoundComponent,
    DashboardSidebarComponent,
    MapsComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
