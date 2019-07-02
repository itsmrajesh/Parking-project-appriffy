import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  mail = 'info@parking.com';
  mobNumber = '+91 98765 43210';
  constructor() { }

  ngOnInit() {
  }

}
