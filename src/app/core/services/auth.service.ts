import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { User } from '../../shared/models/user.model';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;
  private readonly STORAGE_KEY = 'currentUser';

  constructor(
    private router: Router,
    private toastController: ToastController
  ) {
    this.currentUserSubject = new BehaviorSubject<User | null>(null);
    this.currentUser = this.currentUserSubject.asObservable();
    this.loadUserFromStorage();
  }

  private loadUserFromStorage(): void {
    Storage.get({ key: this.STORAGE_KEY }).then(result => {
      if (result.value) {
        const user: User = JSON.parse(result.value);
        this.currentUserSubject.next(user);
      }
    });
  }

  public login(email: string, password: string): Observable<User> {
    // Simulación de llamada a API
    const mockUser: User = {
      id: '1',
      email: email,
      name: 'Test User',
      role: 'user',
      lastLogin: new Date().toISOString()
    };

    return of(mockUser).pipe(
      tap(user => {
        this.currentUserSubject.next(user);
        Storage.set({ key: this.STORAGE_KEY, value: JSON.stringify(user) });
      }),
      catchError(error => {
        this.showErrorToast('Credenciales inválidas');
        return throwError(() => new Error('Login failed'));
      })
    );
  }

  public logout(): Observable<void> {
    return new Observable<void>(observer => {
      Storage.remove({ key: this.STORAGE_KEY }).then(() => {
        this.currentUserSubject.next(null);
        this.router.navigate(['/login']);
        this.showSuccessToast('Sesión cerrada correctamente');
        observer.next();
        observer.complete();
      }).catch(error => {
        this.showErrorToast('Error al cerrar sesión');
        observer.error(error);
      });
    });
  }

  public getCurrentUser(): Observable<User | null> {
    return this.currentUser;
  }

  public isAuthenticated(): Observable<boolean> {
    return this.currentUser.pipe(
      map(user => !!user)
    );
  }

  public hasRole(role: string): Observable<boolean> {
    return this.currentUser.pipe(
      map(user => user?.role === role)
    );
  }

  public updateUserProfile(updatedData: Partial<User>): Observable<User> {
    return this.currentUser.pipe(
      map(user => {
        if (!user) {
          throw new Error('No hay usuario autenticado');
        }
        const updatedUser: User = { ...user, ...updatedData };
        this.currentUserSubject.next(updatedUser);
        Storage.set({ key: this.STORAGE_KEY, value: JSON.stringify(updatedUser) });
        return updatedUser;
      }),
      catchError(error => {
        this.showErrorToast('Error al actualizar perfil');
        return throwError(() => new Error('Update failed'));
      })
    );
  }

  private async showErrorToast(message: string): Promise<void> {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      color: 'danger'
    });
    await toast.present();
  }

  private async showSuccessToast(message: string): Promise<void> {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      color: 'success'
    });
    await toast.present();
  }

  public registerUser(userData: Omit<User, 'id' | 'lastLogin'>): Observable<User> {
    // Simulación de registro
    const newUser: User = {
      id: Math.random().toString(36).substring(2, 9),
      ...userData,
      lastLogin: new Date().toISOString()
    };

    return of(newUser).pipe(
      tap(user => {
        this.currentUserSubject.next(user);
        Storage.set({ key: this.STORAGE_KEY, value: JSON.stringify(user) });
      }),
      catchError(error => {
        this.showErrorToast('Error al registrar usuario');
        return throwError(() => new Error('Registration failed'));
      })
    );
  }
}