import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { httpInterceptor } from './services/http.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideZoneChangeDetection({eventCoalescing: true})
    ,provideHttpClient(withInterceptors([httpInterceptor])),provideAnimations(), provideToastr()]
};
