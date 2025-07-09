import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { AutoRefreshTokenService, provideKeycloak, UserActivityService, withAutoRefreshToken } from 'keycloak-angular';
import { environment } from '../environments/environment.development';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideKeycloak({
      config: {
        url: environment.keycloak.authority,
        realm: environment.keycloak.realm,
        clientId: environment.keycloak.clientId
      },
      initOptions: {
        onLoad: 'login-required',
        silentCheckSsoRedirectUri: window.location.origin + 'silent-check-ss.html'
      },
      features: [
        withAutoRefreshToken({
          onInactivityTimeout: 'logout',
          sessionTimeout: 60000
        })
      ],
      providers: [AutoRefreshTokenService, UserActivityService]
    })
  ]
};
