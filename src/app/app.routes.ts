import {RouterModule, Routes} from '@angular/router';
import {ServicesDetailComponent} from './components/services-detail-component/services-detail-component';
import {AboutComponent} from './components/about-component/about-component';
import {ContactComponent} from './components/contact-component/contact-component';
import {ValuesComponent} from './components/values-component/values-component';
import {PartnersComponent} from './components/partners-component/partners-component';
import {CareersComponent} from './components/careers-component/careers-component';
import {NewsroomComponent} from './components/newsroom-component/newsroom-component';

export const routes: Routes = [
  // OPTIONAL: 404 (add later)
  { path: '', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'services', component: ServicesDetailComponent },
  { path: 'values', component: ValuesComponent },
  { path: 'leadership', component: PartnersComponent },
  { path: 'career', component: CareersComponent },
  { path: 'newsroom', component: NewsroomComponent },
  { path: 'services/:slug', component: ServicesDetailComponent },
  { path: '**', redirectTo: '' }
];
