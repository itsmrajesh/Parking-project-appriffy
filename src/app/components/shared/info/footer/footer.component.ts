import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
 mail = 'info@parking.com';
  helpMail = 'help@parking.com';
  mobNumber = '+91 98765 43210';

  constructor() { }

  ngOnInit() {
  }

}
