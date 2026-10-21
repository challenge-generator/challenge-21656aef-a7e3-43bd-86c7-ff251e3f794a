import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ActionSheetController, AlertController } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { UserService } from '../../core/services/user.service';
import { AuthService } from '../../core/services/auth.service';
import { NotificationService } from '../../core/services/notification.service';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.page.html',
  styleUrls: ['./admin-users.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule, FormsModule]
})
export class AdminUsersPage extends UserListPage implements OnInit, OnDestroy {
  public adminUsers: User[] = [];
  public selectedUsers: Set<string> = new Set();
  public isSelectionMode: boolean = false;
  public bulkActionsVisible: boolean = false;
  private destroy$ = new Subject<void>();

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private notificationService: NotificationService,
    private actionSheetController: ActionSheetController,
    private alertController: AlertController
  ) {
    super(
      userService,
      authService,
      notificationService,
      {} as any
    );
  }

  ngOnInit(): void {
    this.loadAdminUsers();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public loadAdminUsers(): void {
    this.userService.getAdminUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (users) => {
          this.adminUsers = users;
        },
        error: async (error) => {
          await this.notificationService.showErrorToast('Error al cargar administradores');
          console.error('Error loading admin users:', error);
        }
      });
  }

  public toggleSelectionMode(): void {
    this.isSelectionMode = !this.isSelectionMode;
    if (!this.isSelectionMode) {
      this.selectedUsers.clear();
      this.bulkActionsVisible = false;
    }
  }

  public toggleUserSelection(userId: string): void {
    if (this.selectedUsers.has(userId)) {
      this.selectedUsers.delete(userId);
    } else {
      this.selectedUsers.add(userId);
    }
    this.bulkActionsVisible = this.selectedUsers.size > 0;
  }

  public isUserSelected(userId: string): boolean {
    return this.selectedUsers.has(userId);
  }

  public async showUserActions(user: User): Promise<void> {
    const actionSheet = await this.actionSheetController.create({
      header: 'Acciones de usuario',
      buttons: [
        {
          text: 'Ver detalle',
          icon: 'eye',
          handler: () => {
            console.log('View user:', user.id);
          }
        },
        {
          text: 'Editar usuario',
          icon: 'create',
          handler: () => {
            console.log('Edit user:', user.id);
          }
        },
        {
          text: 'Cambiar rol',
          icon: 'people',
          handler: () => {
            this.changeUserRole(user);
          }
        },
        {
          text: 'Desactivar usuario',
          icon: 'power',
          handler: () => {
            this.toggleUserActive(user);
          }
        },
        {
          text: 'Eliminar usuario',
          icon: 'trash',
          role: 'destructive',
          handler: () => {
            this.confirmDeleteUser(user);
          }
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel'
        }
      ]
    });

    await actionSheet.present();
  }

  private async changeUserRole(user: User): Promise<void> {
    const currentRole = user.role || 'user';
    const newRole = currentRole === 'admin' ? 'user' : 'admin';

    const alert = await this.alertController.create({
      header: 'Cambiar rol',
      message: `¿Cambiar rol de ${user.name} a ${newRole}?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Confirmar',
          handler: () => {
            this.updateUserRole(user, newRole);
          }
        }
      ]
    });

    await alert.present();
  }

  private updateUserRole(user: User, newRole: string): void {
    const updatedUser = { ...user, role: newRole };
    this.userService.updateUserDirectly(updatedUser);
  }

  private async toggleUserActive(user: User): Promise<void> {
    const action = user.isActive ? 'desactivar' : 'activar';
    const confirmed = await this.notificationService.showConfirmationAlert(
      `Confirmar ${action}`,
      `¿Está seguro de ${action} al usuario ${user.name}?`
    );

    if (confirmed) {
      const updatedUser = { ...user, isActive: !user.isActive };
      this.userService.updateUserDirectly(updatedUser);
      await this.notificationService.showSuccessToast(`Usuario ${action}do correctamente`);
      this.loadAdminUsers();
    }
  }

  private async confirmDeleteUser(user: User): Promise<void> {
    const confirmed = await this.notificationService.showConfirmationAlert(
      'Confirmar eliminación',
      `¿Está seguro de eliminar al administrador ${user.name}?`
    );

    if (confirmed) {
      this.userService.deleteUser(user.id)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: async () => {
            await this.notificationService.showSuccessToast('Administrador eliminado correctamente');
            this.loadAdminUsers();
          },
          error: async (error) => {
            await this.notificationService.showErrorToast('Error al eliminar administrador');
          }
        });
    }
  }

  public async bulkActivateUsers(): Promise<void> {
    const userIds = Array.from(this.selectedUsers);
    for (const userId of userIds) {
      const user = this.adminUsers.find(u => u.id === userId);
      if (user) {
        const updatedUser = { ...user, isActive: true };
        this.userService.updateUserDirectly(updatedUser);
      }
    }
    await this.notificationService.showSuccessToast('Usuarios activados correctamente');
    this.clearSelection();
    this.loadAdminUsers();
  }

  public async bulkDeactivateUsers(): Promise<void> {
    const userIds = Array.from(this.selectedUsers);
    for (const userId of userIds) {
      const user = this.adminUsers.find(u => u.id === userId);
      if (user) {
        const updatedUser = { ...user, isActive: false };
        this.userService.updateUserDirectly(updatedUser);
      }
    }
    await this.notificationService.showSuccessToast('Usuarios desactivados correctamente');
    this.clearSelection();
    this.loadAdminUsers();
  }

  public async bulkDeleteUsers(): Promise<void> {
    const confirmed = await this.notificationService.showConfirmationAlert(
      'Confirmar eliminación masiva',
      `¿Está seguro de eliminar ${this.selectedUsers.size} usuarios?`
    );

    if (confirmed) {
      const userIds = Array.from(this.selectedUsers);
      for (const userId of userIds) {
        this.userService.deleteUser(userId)
          .pipe(takeUntil(this.destroy$))
          .subscribe();
      }
      await this.notificationService.showSuccessToast('Usuarios eliminados correctamente');
      this.clearSelection();
      this.loadAdminUsers();
    }
  }

  private clearSelection(): void {
    this.selectedUsers.clear();
    this.bulkActionsVisible = false;
    this.isSelectionMode = false;
  }

  public getSelectedCount(): number {
    return this.selectedUsers.size;
  }

  public isAllSelected(): boolean {
    return this.selectedUsers.size === this.adminUsers.length && this.adminUsers.length > 0;
  }

  public toggleSelectAll(): void {
    if (this.isAllSelected()) {
      this.selectedUsers.clear();
    } else {
      this.adminUsers.forEach(user => this.selectedUsers.add(user.id));
    }
    this.bulkActionsVisible = this.selectedUsers.size > 0;
  }

  public filterAdminUsers(query: string): void {
    const searchTerm = query.toLowerCase();
    this.adminUsers = this.adminUsers.filter(user =>
      user.name?.toLowerCase().includes(searchTerm) ||
      user.email?.toLowerCase().includes(searchTerm) ||
      user.role?.toLowerCase().includes(searchTerm)
    );
  }
}

class UserListPage {
  public users: User[] = [];
  public searchQuery: string = '';
  public isLoading: boolean = false;

  constructor(
    protected userService: UserService,
    protected authService: AuthService,
    protected notificationService: NotificationService,
    protected loadingController: any
  ) {}

  protected getPageTitle(): string {
    return 'Lista de usuarios';
  }

  public logAccess(): void {
    console.log('Acceso a lista de usuarios');
  }

  public filterUsers(query: string): void {
    console.log('Filtering users with query:', query);
  }
}