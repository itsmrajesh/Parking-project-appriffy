import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Parking-project-appriffy';
  mail: string;
  mobNumber = '+91 98765 43210';
  constructor() {
    this.mail = 'info@parking.com';
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
  }
}
