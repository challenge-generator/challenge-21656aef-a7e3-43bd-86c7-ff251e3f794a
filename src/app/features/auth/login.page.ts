import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonButton, IonInput, IonItem, IonList, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonToast } from '@ionic/angular/standalone';
import { AuthService } from '../../core/services/auth.service';
import { NotificationService } from '../../core/services/notification.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonButton,
    IonInput,
    IonItem,
    IonList,
    IonLabel,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonToast
  ],
  templateUrl: './login.page.html'
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';
  isLoading: boolean = false;
  showPassword: boolean = false;
  emailError: string = '';
  passwordError: string = '';

  constructor(
    private authService: AuthService,
    private notificationService: NotificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe(user => {
      if (user) {
        this.router.navigate(['/users']);
      }
    });
  }

  async onLogin(): Promise<void> {
    this.emailError = '';
    this.passwordError = '';
    
    if (!this.email || !this.email.trim()) {
      this.emailError = 'El correo electrónico es requerido';
      return;
    }
    
    if (!this.validateEmail(this.email)) {
      this.emailError = 'Por favor ingresa un correo electrónico válido';
      return;
    }
    
    if (!this.password || this.password.length < 6) {
      this.passwordError = 'La contraseña debe tener al menos 6 caracteres';
      return;
    }

    if (!this.validatePasswordStrength(this.password)) {
      this.passwordError = 'La contraseña debe contener al menos una letra mayúscula, una minúscula y un número';
      return;
    }

    this.isLoading = true;

    this.authService.login(this.email, this.password).subscribe({
      next: (user) => {
        this.isLoading = false;
        this.notificationService.showSuccessToast('Bienvenido ' + user.name + ' ' + user.lastName);
        this.redirectUserByRole(user);
      },
      error: (error) => {
        this.isLoading = false;
        this.handleLoginError(error);
      }
    });
  }

  private validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  private validatePasswordStrength(password: string): boolean {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    return hasUpperCase && hasLowerCase && hasNumber;
  }

  private redirectUserByRole(user: any): void {
    if (user.role === 'admin') {
      this.router.navigate(['/admin-users']);
    } else {
      this.router.navigate(['/users']);
    }
  }

  private handleLoginError(error: any): void {
    if (error.status === 401) {
      this.notificationService.showErrorToast('Credenciales incorrectas. Por favor verifica tu correo y contraseña.');
    } else if (error.status === 0) {
      this.notificationService.showErrorToast('Error de conexión. Verifica tu conexión a internet e intenta nuevamente.');
    } else if (error.status === 500) {
      this.notificationService.showErrorToast('Error del servidor. Por favor intenta más tarde.');
    } else {
      this.notificationService.showErrorToast('Ocurrió un error inesperado. Por favor intenta nuevamente.');
    }
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  async onForgotPassword(): Promise<void> {
    if (!this.email || !this.validateEmail(this.email)) {
      this.notificationService.showErrorToast('Por favor ingresa tu correo electrónico primero');
      return;
    }
    
    const confirmed = await this.notificationService.showConfirmationAlert(
      'Recuperar contraseña',
      '¿Te enviaremos un enlace de recuperación a ' + this.email + '?'
    );
    
    if (confirmed) {
      this.notificationService.showSuccessToast('Enlace de recuperación enviado a tu correo');
    }
  }

  onRegister(): void {
    this.router.navigate(['/register']);
  }

  clearErrors(): void {
    this.emailError = '';
    this.passwordError = '';
  }
}