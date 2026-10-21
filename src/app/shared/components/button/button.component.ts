import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonButton, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, IonButton, IonIcon],
  template: `
    <ion-button
      [type]="type"
      [fill]="fill"
      [size]="size"
      [disabled]="isDisabled || !isValid()"
      [expand]="expand"
      [color]="color"
      (click)="handleClick($event)"
    >
      <ion-icon *ngIf="icon" [name]="icon" slot="start"></ion-icon>
      <ng-content></ng-content>
    </ion-button>
  `
})
export class ButtonComponent implements OnInit, OnDestroy {
  @Input() type: 'submit' | 'button' | 'reset' = 'button';
  @Input() fill: 'solid' | 'outline' | 'default' = 'solid';
  @Input() size: 'small' | 'default' | 'large' = 'default';
  @Input() expand: 'full' | 'block' | 'none' = 'none';
  @Input() color: string = 'primary';
  @Input() icon: string | undefined;
  @Input() disabled: boolean = false;
  @Input() validateEmail: boolean = false;
  @Input() emailValue: string = '';
  @Input() validatePassword: boolean = false;
  @Input() passwordValue: string = '';
  @Input() validateRequired: boolean = false;
  @Input() requiredValue: any = null;
  @Input() validateMinLength: boolean = false;
  @Input() minLengthValue: string = '';
  @Input() minLength: number = 0;
  @Input() validateMaxLength: boolean = false;
  @Input() maxLengthValue: string = '';
  @Input() maxLength: number = 0;
  @Input() validatePattern: boolean = false;
  @Input() patternValue: string = '';
  @Input() patternRegex: string = '';
  @Input() validateCustom: boolean = false;
  @Input() customValidationFn: ((value: any) => boolean) | undefined;

  @Output() buttonClick = new EventEmitter<Event>();
  @Output() validationFailed = new EventEmitter<string>();

  private isDisabled: boolean = false;
  private validationMessages: string[] = [];

  ngOnInit() {
    if (this.disabled) {
      this.isDisabled = true;
    }
  }

  ngOnDestroy() {
    this.validationMessages = [];
  }

  handleClick(event: Event) {
    if (!this.isValid()) {
      event.preventDefault();
      event.stopPropagation();
      this.validationFailed.emit(this.getValidationMessage());
      return;
    }
    this.buttonClick.emit(event);
  }

  isValid(): boolean {
    this.validationMessages = [];

    if (this.validateEmail && !this.isValidEmail(this.emailValue)) {
      this.validationMessages.push('El correo electrónico no es válido');
      return false;
    }

    if (this.validatePassword && !this.isValidPassword(this.passwordValue)) {
      this.validationMessages.push('La contraseña debe tener al menos 8 caracteres');
      return false;
    }

    if (this.validateRequired && this.isEmpty(this.requiredValue)) {
      this.validationMessages.push('Este campo es obligatorio');
      return false;
    }

    if (this.validateMinLength && this.isValidMinLength(this.minLengthValue)) {
      this.validationMessages.push(`El texto debe tener al menos ${this.minLength} caracteres`);
      return false;
    }

    if (this.validateMaxLength && this.isValidMaxLength(this.maxLengthValue)) {
      this.validationMessages.push(`El texto debe tener como máximo ${this.maxLength} caracteres`);
      return false;
    }

    if (this.validatePattern && !this.isValidPattern(this.patternValue)) {
      this.validationMessages.push('El formato no es válido');
      return false;
    }

    if (this.validateCustom && this.customValidationFn) {
      if (!this.customValidationFn(this.requiredValue)) {
        this.validationMessages.push('La validación personalizada falló');
        return false;
      }
    }

    return this.validationMessages.length === 0;
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  private isValidPassword(password: string): boolean {
    return password.length >= 8;
  }

  private isEmpty(value: any): boolean {
    return value === null || value === undefined || value === '';
  }

  private isValidMinLength(value: string): boolean {
    return value.length < this.minLength;
  }

  private isValidMaxLength(value: string): boolean {
    return value.length > this.maxLength;
  }

  private isValidPattern(value: string): boolean {
    if (!this.patternRegex) return true;
    const regex = new RegExp(this.patternRegex);
    return regex.test(value);
  }

  private getValidationMessage(): string {
    return this.validationMessages.join(', ');
  }

  setDisabled(disabled: boolean): void {
    this.isDisabled = disabled;
  }

  getValidationMessages(): string[] {
    return [...this.validationMessages];
  }
}