import { Component, OnInit } from '@angular/core';
import { NgcCookieConsentModule, NgcCookieConsentConfig } from 'ngx-cookieconsent';

const cookieConfig: NgcCookieConsentConfig = {
  cookie: {
    domain: 'your-domain.com', // Replace with your domain
  },
  position: 'bottom',
  theme: 'classic',
  palette: {
    popup: {
      background: '#000',
      text: '#fff',
    },
    button: {
      background: '#f1d600',
      text: '#000',
    },
  },
  content: {
    message: 'This website uses cookies to ensure you get the best experience.',
    dismiss: 'Got it!',
    link: 'Learn more',
    href: '/cookie-policy', // Replace with your cookie policy page URL
  },
};

@Component({
  selector: 'app-consent',
  templateUrl: './consent.component.html',
  styleUrls: ['./consent.component.css']
})
export class ConsentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
