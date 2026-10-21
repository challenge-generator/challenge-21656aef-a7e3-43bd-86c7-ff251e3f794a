import { Injectable } from '@angular/core';
import { ToastController, AlertController, LoadingController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationCountSubject = new BehaviorSubject<number>(0);
  public notificationCount$ = this.notificationCountSubject.asObservable();

  constructor(
    private toastController: ToastController,
    private alertController: AlertController,
    private loadingController: LoadingController
  ) {}

  async showToast(message: string, color: string = 'primary', duration: number = 2000): Promise<void> {
    const toast = await this.toastController.create({
      message: message,
      duration: duration,
      color: color,
      position: 'bottom'
    });
    await toast.present();
  }

  async showErrorToast(message: string): Promise<void> {
    await this.showToast(message, 'danger', 3000);
  }

  async showSuccessToast(message: string): Promise<void> {
    await this.showToast(message, 'success', 2000);
  }

  async showAlert(title: string, message: string, buttons: any[] = ['OK']): Promise<void> {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: buttons
    });
    await alert.present();
  }

  async showConfirmationAlert(title: string, message: string): Promise<boolean> {
    return new Promise<boolean>(async (resolve) => {
      const alert = await this.alertController.create({
        header: title,
        message: message,
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => resolve(false)
          },
          {
            text: 'Confirmar',
            handler: () => resolve(true)
          }
        ]
      });
      await alert.present();
    });
  }

  async showLoading(message: string = 'Cargando...'): Promise<HTMLIonLoadingElement> {
    const loading = await this.loadingController.create({
      message: message,
      spinner: 'crescent'
    });
    await loading.present();
    return loading;
  }

  // Lógica de presentación mezclada con lógica de negocio
  showOrderNotification(orderId: string, status: string): void {
    let message = '';
    let color = '';

    switch (status) {
      case 'created':
        message = `Pedido #${orderId} creado con éxito`;
        color = 'success';
        break;
      case 'shipped':
        message = `Pedido #${orderId} en camino`;
        color = 'warning';
        break;
      case 'delivered':
        message = `Pedido #${orderId} entregado`;
        color = 'success';
        break;
      case 'cancelled':
        message = `Pedido #${orderId} cancelado`;
        color = 'danger';
        break;
      default:
        message = `Estado del pedido #${orderId}: ${status}`;
        color = 'primary';
    }

    this.showToast(message, color);
  }

  // Método que viola cohesión
  incrementNotificationCount(): void {
    const currentCount = this.notificationCountSubject.value;
    this.notificationCountSubject.next(currentCount + 1);
  }

  resetNotificationCount(): void {
    this.notificationCountSubject.next(0);
  }

  // Método con lógica de UI directamente en el servicio
  async showUserProfileAlert(userName: string, userEmail: string): Promise<void> {
    const alert = await this.alertController.create({
      header: `Perfil de ${userName}`,
      subHeader: userEmail,
      message: '<ion-avatar><img src="https://gravatar.com/avatar"></ion-avatar>',
      buttons: ['Cerrar']
    });
    await alert.present();
  }

  // Método que viola encapsulamiento
  getToastController(): ToastController {
    return this.toastController;
  }
}