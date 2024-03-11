import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./service/auth.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),
  importProvidersFrom(HttpClientModule), { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
};
