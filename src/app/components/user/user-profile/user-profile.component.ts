import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  // tslint:disable-next-line:no-inferrable-types
 public userName: string = 'user name here';
  email = 'rajesh@parking.com';
  firstName = 'Rajesh';
  lastName = 'Chowdary';


}
