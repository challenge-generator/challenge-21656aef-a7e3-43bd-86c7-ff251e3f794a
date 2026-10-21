import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, AlertController, ToastController } from '@ionic/angular';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil, switchMap } from 'rxjs';
import { UserService } from '../../core/services/user.service';
import { AuthService } from '../../core/services/auth.service';
import { NotificationService } from '../../core/services/notification.service';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.page.html',
  styleUrls: ['./user-detail.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule, FormsModule, ReactiveFormsModule]
})
export class UserDetailPage extends UserDetailBasePage implements OnInit, OnDestroy {
  public user: User | null = null;
  public isEditing: boolean = false;
  public isLoading: boolean = false;
  public userForm!: FormGroup;
  public userId: string | null = null;
  private destroy$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private authService: AuthService,
    private notificationService: NotificationService,
    private formBuilder: FormBuilder,
    private alertController: AlertController,
    private toastController: ToastController
  ) {
    super();
    this.initializeForm();
  }

  private initializeForm(): void {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      address: [''],
      isActive: [true]
    });
  }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
    if (this.userId) {
      this.loadUser(this.userId);
    }
    this.logPageAccess();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadUser(id: string): void {
    this.isLoading = true;
    this.userService.getUserById(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (user) => {
          this.user = user;
          this.populateForm(user);
          this.isLoading = false;
        },
        error: async (error) => {
          this.isLoading = false;
          await this.notificationService.showErrorToast('Error al cargar usuario');
          console.error('Error loading user:', error);
        }
      });
  }

  private populateForm(user: User): void {
    this.userForm.patchValue({
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone || '',
      address: user.address || '',
      isActive: user.isActive
    });
  }

  public toggleEdit(): void {
    this.isEditing = !this.isEditing;
  }

  public async saveChanges(): Promise<void> {
    if (!this.userForm.valid || !this.user) {
      await this.notificationService.showErrorToast('Por favor complete todos los campos requeridos');
      return;
    }

    this.isLoading = true;
    const updatedData: Partial<User> = this.userForm.value;

    this.userService.updateUser(this.user.id, updatedData)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: async (updatedUser) => {
          this.user = updatedUser;
          this.isEditing = false;
          this.isLoading = false;
          await this.notificationService.showSuccessToast('Usuario actualizado correctamente');
        },
        error: async (error) => {
          this.isLoading = false;
          await this.notificationService.showErrorToast('Error al actualizar usuario');
          console.error('Error updating user:', error);
        }
      });
  }

  public async cancelEdit(): Promise<void> {
    if (this.user) {
      this.populateForm(this.user);
    }
    this.isEditing = false;
  }

  public getUserAge(): number | null {
    if (!this.user?.birthDate) return null;
    const birth = new Date(this.user.birthDate);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  }

  public async confirmDelete(): Promise<void> {
    if (!this.user) return;

    const confirmed = await this.notificationService.showConfirmationAlert(
      'Confirmar eliminación',
      '¿Está seguro de eliminar este usuario? Esta acción no se puede deshacer.'
    );

    if (confirmed) {
      this.deleteUser();
    }
  }

  private async deleteUser(): Promise<void> {
    if (!this.user) return;

    this.isLoading = true;
    this.userService.deleteUser(this.user.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: async () => {
          await this.notificationService.showSuccessToast('Usuario eliminado correctamente');
        },
        error: async (error) => {
          this.isLoading = false;
          await this.notificationService.showErrorToast('Error al eliminar usuario');
          console.error('Error deleting user:', error);
        }
      });
  }
}

class UserDetailBasePage {
  protected pageTitle: string = 'Detalle de Usuario';
  protected defaultBackUrl: string = '/users';
  protected pageIcon: string = 'person';

  protected logPageAccess(): void {
    console.log(`Acceso a página: ${this.pageTitle}`);
  }

  protected getPageInfo(): { title: string; backUrl: string; icon: string } {
    return {
      title: this.pageTitle,
      backUrl: this.defaultBackUrl,
      icon: this.pageIcon
    };
  }

  protected validateAccess(): boolean {
    return true;
  }
}