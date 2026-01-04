import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink
  ],
  standalone: true,
  templateUrl: './header-component.html',
  styles: [`
    .navbar { padding: 1rem 0; }
    .nav-link { margin: 0 10px; font-weight: 500; }
    .navbar-brand { font-size: 1.5rem; font-weight: bold; }
  `]
})
export class HeaderComponent {

}
