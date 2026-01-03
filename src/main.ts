import { bootstrapApplication } from '@angular/platform-browser';
import {provideRouter, withInMemoryScrolling, withRouterConfig} from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {routes} from './app/app.routes';
import {App} from './app/app';

bootstrapApplication(App, {
  providers: [
    provideHttpClient(),
    provideRouter(
      routes,
      withRouterConfig({
        onSameUrlNavigation: 'reload'
      }),
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled'
      })
    ),
    importProvidersFrom(ReactiveFormsModule)
  ]
});
