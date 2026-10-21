import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { IonicModule } from '@ionic/angular/standalone';

import { routes } from './app.routes';
import { AuthService } from './core/services/auth.service';
import { UserService } from './core/services/user.service';
import { NotificationService } from './core/services/notification.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withComponentInputBinding(),
      withViewTransitions()
    ),
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(IonicModule.forRoot()),
    AuthService,
    UserService,
    NotificationService
  ]
};