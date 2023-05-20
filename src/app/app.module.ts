import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialPadButtonComponent } from './dial-pad-button/dial-pad-button.component';
import { PracticeAreasComponent } from './practice-areas/practice-areas.component';
import { ProbonoComponent } from './probono/probono.component';
import { CareerComponent } from './career/career.component';
import { TeamComponent } from './team/team.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NgcCookieConsentModule, NgcCookieConsentConfig } from 'ngx-cookieconsent';
import { ConsentComponent } from './consent/consent.component';
import { FormsModule } from '@angular/forms';

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
const routes:Routes = [
  { path: 'dialButtonComponent',
  component: DialPadButtonComponent},
  { path: 'home',
  component: HomeComponent},
  { path: 'career',
  component: CareerComponent},
  { path: 'consent',
  component: ConsentComponent},
  { path: 'contactUs',
  component: ContactUsComponent},
  { path: 'login',
  component: LoginComponent},
  { path: 'practice',
  component: PracticeAreasComponent},
  { path: 'probono',
  component: ProbonoComponent},
  { path: 'team',
  component: TeamComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DialPadButtonComponent,
    PracticeAreasComponent,
    ProbonoComponent,
    CareerComponent,
    TeamComponent,
    ContactUsComponent,
    ConsentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    NgcCookieConsentModule.forRoot(cookieConfig),
    FormsModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

