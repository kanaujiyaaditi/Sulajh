import { Component } from '@angular/core';
import { NgcCookieConsentService } from 'ngx-cookieconsent';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],


})
export class AppComponent {
  title = 'Sulajh';
  constructor(private cookieConsentService: NgcCookieConsentService) {
    // Your constructor code
  }
}
