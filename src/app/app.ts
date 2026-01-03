import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header-component/header-component';
import {AboutComponent} from './components/about-component/about-component';
import {ProjectsComponent} from './components/projects-component/projects-component';
import {ContactComponent} from './components/contact-component/contact-component';
import {FooterComponent} from './components/footer-component/footer-component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
  ],
  template: `
    <app-header></app-header>
    <app-about></app-about>
    <app-projects></app-projects>
    <app-contact></app-contact>
    <app-footer></app-footer>
  `,
  styles: []
})
export class App {
  title = 'RSN & Company';
}
