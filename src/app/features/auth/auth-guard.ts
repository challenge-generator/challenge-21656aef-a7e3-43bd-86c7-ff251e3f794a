import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { map, take, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  
  return authService.isAuthenticated().pipe(
    take(1),
    switchMap(isAuthenticated => {
      if (isAuthenticated) {
        const requiredRoles = route.data['roles'] as string[];
        
        if (requiredRoles && requiredRoles.length > 0) {
          return authService.hasRole(requiredRoles[0]).pipe(
            map(hasRole => {
              if (hasRole) {
                return true;
              } else {
                router.navigate(['/unauthorized']);
                return false;
              }
            })
          );
        }
        
        return of(true);
      } else {
        router.navigate(['/login'], { 
          queryParams: { returnUrl: state.url }
        });
        return of(false);
      }
    })
  );
};

export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  
  return authService.hasRole('admin').pipe(
    take(1),
    map(hasRole => {
      if (hasRole) {
        return true;
      } else {
        router.navigate(['/unauthorized']);
        return false;
      }
    })
  );
};

export const guestGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  
  return authService.isAuthenticated().pipe(
    take(1),
    map(isAuthenticated => {
      if (!isAuthenticated) {
        return true;
      } else {
        router.navigate(['/users']);
        return false;
      }
    })
  );
};