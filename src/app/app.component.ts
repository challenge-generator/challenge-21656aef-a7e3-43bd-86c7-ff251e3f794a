import { Component, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { AuthService } from './core/services/auth.service';
import { NotificationService } from './core/services/notification.service';
import { UserService } from './core/services/user.service';

@Component({
  selector: 'app-root',
  template: `
    <ion-app>
      <ion-router-outlet></ion-router-outlet>
    </ion-app>
  `,
  standalone: true,
  imports: [IonApp, IonRouterOutlet]
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private notificationService: NotificationService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.initializeApp();
  }

  private initializeApp(): void {
    this.authService.isAuthenticated().subscribe(isAuth => {
      if (!isAuth) {
        console.log('Aplicación iniciada - usuario no autenticado');
      } else {
        console.log('Aplicación iniciada - usuario autenticado');
      }
    });

    this.notificationService.notificationCount$.subscribe(count => {
      console.log(`Notificaciones pendientes: ${count}`);
    });

    this.loadInitialData();
  }

  private loadInitialData(): void {
    this.userService.getUsers().subscribe({
      next: (users) => console.log(`Cargados ${users.length} usuarios`),
      error: (err) => console.error('Error al cargar usuarios:', err)
    });
  }

  public getAppVersion(): string {
    return '1.0.0';
  }

  public getCurrentYear(): number {
    return new Date().getFullYear();
  }
}