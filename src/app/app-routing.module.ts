import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { DashboardComponent } from './components/user/dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { HomeDashboardComponent } from './components/shared/home-dashboard/home-dashboard.component';
import { ContactUsComponent } from './components/shared/info/contact-us/contact-us.component';
import { MapsComponent } from './components/shared/info/maps/maps.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { ShowBookingsComponent } from './components/user/show-bookings/show-bookings.component';

const routes: Routes = [
  { path: ' ', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: HomeDashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'maps', component: MapsComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'bookings', component: ShowBookingsComponent },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
