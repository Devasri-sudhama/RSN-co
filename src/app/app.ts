import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header-component/header-component';
import {AboutComponent} from './components/about-component/about-component';
import {ContactComponent} from './components/contact-component/contact-component';
import {FooterComponent} from './components/footer-component/footer-component';
import {RouterOutlet} from '@angular/router';
import {PartnersComponent} from './components/partners-component/partners-component';
import {CareersComponent} from './components/careers-component/careers-component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    RouterOutlet,
  ],
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
  styles: []
})
export class App {
  title = 'RSN & Company';
}
