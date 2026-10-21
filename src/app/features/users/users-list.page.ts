import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, LoadingController, RefresherCustomEvent } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { Subject, takeUntil, forkJoin } from 'rxjs';
import { UserService } from '../../core/services/user.service';
import { AuthService } from '../../core/services/auth.service';
import { NotificationService } from '../../core/services/notification.service';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.page.html',
  styleUrls: ['./users-list.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule]
})
export class UsersListPage extends UserListBaseComponent implements OnInit, OnDestroy {
  public users: User[] = [];
  public filteredUsers: User[] = [];
  public searchQuery: string = '';
  public isLoading: boolean = false;
  public currentUser: User | null = null;
  private destroy$ = new Subject<void>();

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private notificationService: NotificationService,
    private loadingController: LoadingController
  ) {
    super();
  }

  ngOnInit(): void {
    this.loadCurrentUser();
    this.loadUsers();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadCurrentUser(): void {
    this.authService.getCurrentUser()
      .pipe(takeUntil(this.destroy$))
      .subscribe(user => {
        this.currentUser = user;
      });
  }

  public async loadUsers(): Promise<void> {
    this.isLoading = true;
    const loading = await this.notificationService.showLoading('Cargando usuarios...');

    this.userService.getUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (users) => {
          this.users = users;
          this.filteredUsers = users;
          this.isLoading = false;
          loading.dismiss();
        },
        error: async (error) => {
          this.isLoading = false;
          loading.dismiss();
          await this.notificationService.showErrorToast('Error al cargar usuarios');
          console.error('Error loading users:', error);
        }
      });
  }

  public onSearchChange(event: Event): void {
    const target = event.target as HTMLIonSearchbarElement;
    this.searchQuery = target.value?.toLowerCase() || '';
    this.filterUsers();
  }

  private filterUsers(): void {
    if (!this.searchQuery.trim()) {
      this.filteredUsers = this.users;
      return;
    }

    this.filteredUsers = this.users.filter(user =>
      user.name?.toLowerCase().includes(this.searchQuery) ||
      user.email?.toLowerCase().includes(this.searchQuery) ||
      user.lastName?.toLowerCase().includes(this.searchQuery)
    );
  }

  public async refreshData(event: RefresherCustomEvent): Promise<void> {
    this.userService.getUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (users) => {
          this.users = users;
          this.filterUsers();
          event.target.complete();
        },
        error: async (error) => {
          event.target.complete();
          await this.notificationService.showErrorToast('Error al actualizar usuarios');
          console.error('Error refreshing users:', error);
        }
      });
  }

  public async deleteUser(user: User): Promise<void> {
    const confirmed = await this.notificationService.showConfirmationAlert(
      'Confirmar eliminación',
      `¿Está seguro de eliminar al usuario ${user.name}?`
    );

    if (confirmed) {
      this.userService.deleteUser(user.id)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: async () => {
            await this.notificationService.showSuccessToast('Usuario eliminado correctamente');
            this.loadUsers();
          },
          error: async (error) => {
            await this.notificationService.showErrorToast('Error al eliminar usuario');
            console.error('Error deleting user:', error);
          }
        });
    }
  }

  public getUserStatus(user: User): string {
    return user.isActive ? 'Activo' : 'Inactivo';
  }

  public getUserInitials(user: User): string {
    const firstName = user.name?.charAt(0) || '';
    const lastName = user.lastName?.charAt(0) || '';
    return (firstName + lastName).toUpperCase();
  }

  public trackByUserId(index: number, user: User): string {
    return user.id;
  }
}

class UserListBaseComponent {
  protected baseTitle: string = 'Lista de Usuarios';
  protected baseRoute: string = '/users';

  protected getBaseInfo(): { title: string; route: string } {
    return {
      title: this.baseTitle,
      route: this.baseRoute
    };
  }

  protected logBaseAccess(): void {
    console.log('Acceso a lista de usuarios');
  }
}