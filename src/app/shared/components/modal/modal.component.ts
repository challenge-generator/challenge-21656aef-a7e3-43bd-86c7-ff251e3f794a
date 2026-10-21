import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonFooter, IonList, IonItem, IonLabel, IonInput, IonTextarea } from '@ionic/angular/standalone';
import { User } from '../../models/user.model';
import { Order } from '../../models/order.model';

interface ModalData {
  title: string;
  content: string;
  data?: any;
}

interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'number' | 'textarea';
  value: string;
  required: boolean;
}

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonModal,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonContent,
    IonFooter,
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea
  ],
  template: `
    <ion-modal [isOpen]="isOpen" (didDismiss)="onDismiss()" [breakpoints]="breakpoints" [initialBreakpoint]="initialBreakpoint">
      <ng-template>
        <ion-header>
          <ion-toolbar>
            <ion-buttons slot="start">
              <ion-button (click)="onCancel()">Cancelar</ion-button>
            </ion-buttons>
            <ion-title>{{ modalTitle }}</ion-title>
            <ion-buttons slot="end">
              <ion-button (click)="onConfirm()" [strong]="true">Confirmar</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>

        <ion-content class="ion-padding">
          <div *ngIf="mode === 'display'">
            <div class="display-content">
              <h2>{{ displayData?.title }}</h2>
              <p>{{ displayData?.content }}</p>
              <div *ngIf="displayData?.data" class="data-section">
                <pre>{{ displayData.data | json }}</pre>
              </div>
            </div>
          </div>

          <div *ngIf="mode === 'form'">
            <ion-list>
              <ion-item *ngFor="let field of formFields">
                <ion-label position="floating">{{ field.label }}</ion-label>
                <ion-input
                  *ngIf="field.type !== 'textarea'"
                  [type]="field.type"
                  [(ngModel)]="field.value"
                  [required]="field.required"
                  (ionChange)="onFieldChange(field.name, $event)"
                ></ion-input>
                <ion-textarea
                  *ngIf="field.type === 'textarea'"
                  [(ngModel)]="field.value"
                  [required]="field.required"
                  (ionChange)="onFieldChange(field.name, $event)"
                ></ion-textarea>
              </ion-item>
            </ion-list>
          </div>

          <div *ngIf="mode === 'user'">
            <ion-list>
              <ion-item>
                <ion-label position="floating">Nombre</ion-label>
                <ion-input [(ngModel)]="userData.name" (ionChange)="onUserFieldChange('name', $event)"></ion-input>
              </ion-item>
              <ion-item>
                <ion-label position="floating">Email</ion-label>
                <ion-input type="email" [(ngModel)]="userData.email" (ionChange)="onUserFieldChange('email', $event)"></ion-input>
              </ion-item>
              <ion-item>
                <ion-label position="floating">Teléfono</ion-label>
                <ion-input type="tel" [(ngModel)]="userData.phone" (ionChange)="onUserFieldChange('phone', $event)"></ion-input>
              </ion-item>
              <ion-item>
                <ion-label position="floating">Dirección</ion-label>
                <ion-input [(ngModel)]="userData.address" (ionChange)="onUserFieldChange('address', $event)"></ion-input>
              </ion-item>
            </ion-list>
          </div>

          <div *ngIf="mode === 'order'">
            <ion-list>
              <ion-item>
                <ion-label position="floating">ID de Orden</ion-label>
                <ion-input [(ngModel)]="orderData.id" [readonly]="true"></ion-input>
              </ion-item>
              <ion-item>
                <ion-label position="floating">Cliente</ion-label>
                <ion-input [(ngModel)]="orderData.customerName" (ionChange)="onOrderFieldChange('customerName', $event)"></ion-input>
              </ion-item>
              <ion-item>
                <ion-label position="floating">Total</ion-label>
                <ion-input type="number" [(ngModel)]="orderData.total" (ionChange)="onOrderFieldChange('total', $event)"></ion-input>
              </ion-item>
              <ion-item>
                <ion-label position="floating">Estado</ion-label>
                <ion-input [(ngModel)]="orderData.status" (ionChange)="onOrderFieldChange('status', $event)"></ion-input>
              </ion-item>
            </ion-list>
          </div>
        </ion-content>

        <ion-footer>
          <ion-toolbar>
            <ion-buttons slot="start">
              <ion-button color="medium" (click)="onCancel()">Cancelar</ion-button>
            </ion-buttons>
            <ion-buttons slot="end">
              <ion-button (click)="onConfirm()" [strong]="true">Confirmar</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-footer>
      </ng-template>
    </ion-modal>
  `,
  styles: [`
    .display-content {
      padding: 16px;
    }
    .data-section {
      margin-top: 16px;
      background: #f5f5f5;
      padding: 12px;
      border-radius: 8px;
    }
    pre {
      white-space: pre-wrap;
      word-wrap: break-word;
    }
  `]
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() isOpen: boolean = false;
  @Input() mode: 'display' | 'form' | 'user' | 'order' = 'display';
  @Input() modalTitle: string = 'Modal';
  @Input() breakpoints: number[] = [0, 0.5, 1];
  @Input() initialBreakpoint: number = 0.5;

  @Output() closed = new EventEmitter<void>();
  @Output() confirmed = new EventEmitter<any>();
  @Output() cancelled = new EventEmitter<void>();
  @Output() dataChanged = new EventEmitter<{ field: string; value: any }>();

  @ViewChild('modalContent') modalContent: ElementRef | undefined;

  displayData: ModalData | null = null;
  formFields: FormField[] = [];
  userData: Partial<User> = {};
  orderData: Partial<Order> = {};

  private formState: Map<string, any> = new Map();
  private isDirty: boolean = false;

  ngOnInit() {
    this.initializeDefaults();
  }

  ngOnDestroy() {
    this.formState.clear();
    this.displayData = null;
    this.formFields = [];
    this.userData = {};
    this.orderData = {};
  }

  private initializeDefaults(): void {
    if (this.mode === 'user') {
      this.userData = {
        name: '',
        email: '',
        phone: '',
        address: ''
      };
    } else if (this.mode === 'order') {
      this.orderData = {
        id: '',
        customerName: '',
        total: 0,
        status: 'pending'
      };
    }
  }

  setDisplayData(data: ModalData): void {
    this.displayData = data;
    this.isDirty = false;
  }

  setFormFields(fields: FormField[]): void {
    this.formFields = fields.map(field => ({ ...field }));
    fields.forEach(field => {
      this.formState.set(field.name, field.value);
    });
    this.isDirty = false;
  }

  setUserData(user: User): void {
    this.userData = { ...user };
    this.trackChange('user', user);
    this.isDirty = false;
  }

  setOrderData(order: Order): void {
    this.orderData = { ...order };
    this.trackChange('order', order);
    this.isDirty = false;
  }

  onFieldChange(fieldName: string, event: any): void {
    const value = event.detail?.value || event;
    this.formState.set(fieldName, value);
    this.isDirty = true;
    this.dataChanged.emit({ field: fieldName, value });
  }

  onUserFieldChange(fieldName: string, event: any): void {
    const value = event.detail?.value || event;
    (this.userData as any)[fieldName] = value;
    this.isDirty = true;
    this.dataChanged.emit({ field: `user.${fieldName}`, value });
  }

  onOrderFieldChange(fieldName: string, event: any): void {
    const value = event.detail?.value || event;
    (this.orderData as any)[fieldName] = value;
    this.isDirty = true;
    this.dataChanged.emit({ field: `order.${fieldName}`, value });
  }

  onDismiss(): void {
    this.closed.emit();
    this.resetState();
  }

  onCancel(): void {
    this.cancelled.emit();
    this.resetState();
  }

  onConfirm(): void {
    let result: any;

    switch (this.mode) {
      case 'display':
        result = this.displayData;
        break;
      case 'form':
        result = this.formFields.reduce((acc, field) => {
          acc[field.name] = field.value;
          return acc;
        }, {} as Record<string, any>);
        break;
      case 'user':
        result = this.userData;
        break;
      case 'order':
        result = this.orderData;
        break;
    }

    this.confirmed.emit(result);
    this.isDirty = false;
  }

  private trackChange(source: string, data: any): void {
    if (source === 'user') {
      Object.keys(data).forEach(key => {
        this.formState.set(`user.${key}`, (data as any)[key]);
      });
    } else if (source === 'order') {
      Object.keys(data).forEach(key => {
        this.formState.set(`order.${key}`, (data as any)[key]);
      });
    }
  }

  private resetState(): void {
    this.displayData = null;
    this.formFields = [];
    this.userData = {};
    this.orderData = {};
    this.formState.clear();
    this.isDirty = false;
    this.initializeDefaults();
  }

  getFormState(): Map<string, any> {
    return new Map(this.formState);
  }

  hasChanges(): boolean {
    return this.isDirty;
  }

  getUserData(): Partial<User> {
    return { ...this.userData };
  }

  getOrderData(): Partial<Order> {
    return { ...this.orderData };
  }

  getFormData(): Record<string, any> {
    return this.formFields.reduce((acc, field) => {
      acc[field.name] = field.value;
      return acc;
    }, {} as Record<string, any>);
  }
}