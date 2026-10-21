import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User } from '../../shared/models/user.model';
import { ToastController } from '@ionic/angular';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.apiUrl + '/users';

  constructor(
    private http: HttpClient,
    private toastController: ToastController
  ) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl).pipe(
      catchError(error => {
        this.showErrorToast('Error al cargar usuarios');
        return throwError(() => new Error('Failed to fetch users'));
      })
    );
  }

  getUserById(id: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`).pipe(
      catchError(error => {
        this.showErrorToast('Error al cargar usuario');
        return throwError(() => new Error('Failed to fetch user'));
      })
    );
  }

  createUser(userData: Omit<User, 'id' | 'lastLogin'>): Observable<User> {
    return this.http.post<User>(this.apiUrl, userData).pipe(
      catchError(error => {
        this.showErrorToast('Error al crear usuario');
        return throwError(() => new Error('Failed to create user'));
      })
    );
  }

  updateUser(id: string, userData: Partial<User>): Observable<User> {
    return this.http.patch<User>(`${this.apiUrl}/${id}`, userData).pipe(
      catchError(error => {
        this.showErrorToast('Error al actualizar usuario');
        return throwError(() => new Error('Failed to update user'));
      })
    );
  }

  deleteUser(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError(error => {
        this.showErrorToast('Error al eliminar usuario');
        return throwError(() => new Error('Failed to delete user'));
      })
    );
  }

  searchUsers(query: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}?search=${query}`).pipe(
      catchError(error => {
        this.showErrorToast('Error al buscar usuarios');
        return throwError(() => new Error('Failed to search users'));
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

  // Método acoplado directamente a implementación específica
  getAdminUsers(): Observable<User[]> {
    return this.getUsers().pipe(
      map(users => users.filter(user => user.role === 'admin'))
    );
  }

  // Método con lógica de presentación mezclada
  getUserFullName(user: User): string {
    return `${user.name} (${user.role})`;
  }

  // Método que viola encapsulamiento
  updateUserDirectly(user: User): void {
    this.http.patch<User>(`${this.apiUrl}/${user.id}`, user).subscribe({
      next: () => {
        this.toastController.create({
          message: 'Usuario actualizado',
          duration: 2000,
          color: 'success'
        }).then(toast => toast.present());
      },
      error: () => {
        this.toastController.create({
          message: 'Error al actualizar',
          duration: 2000,
          color: 'danger'
        }).then(toast => toast.present());
      }
    });
  }
}