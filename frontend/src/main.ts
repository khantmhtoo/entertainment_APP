import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { RouterModule, provideRouter, withComponentInputBinding } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { APP_ROUTES } from './app/routes/app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    // Old way of implementing the Routes
    importProvidersFrom(
      RouterModule.forRoot(APP_ROUTES),
      BrowserAnimationsModule
    ),
    // New Way of implementing the Routes
    provideRouter(APP_ROUTES, withComponentInputBinding()),
    // {
    //   provide: AuthService,
    //   useClass: AuthService,
    // },
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    provideHttpClient(withInterceptorsFromDi()),
  ],
});