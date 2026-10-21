import { Routes } from '@angular/router';
import { AuthGuard } from '../features/auth/auth-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => import('../features/auth/login.page').then(m => m.LoginPage),
    canActivate: []
  },
  {
    path: 'users',
    loadComponent: () => import('../features/users/users-list.page').then(m => m.UsersListPage),
    canActivate: [AuthGuard],
    data: { roles: ['user', 'admin'] }
  },
  {
    path: 'user/:id',
    loadComponent: () => import('../features/users/user-detail.page').then(m => m.UserDetailPage),
    canActivate: [AuthGuard],
    data: { roles: ['user', 'admin'] }
  },
  {
    path: 'admin/users',
    loadComponent: () => import('../features/users/admin-users.page').then(m => m.AdminUsersPage),
    canActivate: [AuthGuard],
    data: { roles: ['admin'] }
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];