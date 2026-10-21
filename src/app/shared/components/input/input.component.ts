import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonInput, IonLabel, IonItem, IonList } from '@ionic/angular/standalone';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, FormsModule, IonInput, IonLabel, IonItem, IonList],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ],
  template: `
    <ion-list>
      <ion-item>
        <ion-label position="floating" *ngIf="label">{{ label }}</ion-label>
        <ion-input
          [type]="type"
          [placeholder]="placeholder"
          [value]="innerValue"
          [disabled]="disabled"
          [readonly]="readonly"
          [clearInput]="clearInput"
          [autocomplete]="autocomplete"
          [autocorrect]="autocorrect"
          [spellcheck]="spellcheck"
          [max]="max"
          [min]="min"
          [step]="step"
          (ionInput)="onInput($event)"
          (ionBlur)="onBlur($event)"
          (ionFocus)="onFocus($event)"
        ></ion-input>
      </ion-item>
    </ion-list>
    <div *ngIf="showError" class="error-message">
      {{ errorMessage }}
    </div>
  `,
  styles: [`
    .error-message {
      color: var(--ion-color-danger, #eb445a);
      font-size: 12px;
      padding: 4px 16px;
      margin-top: 4px;
    }
  `]
})
export class InputComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
  @Input() clearInput: boolean = false;
  @Input() autocomplete: string = 'off';
  @Input() autocorrect: string = 'off';
  @Input() spellcheck: boolean = false;
  @Input() max: string | undefined;
  @Input() min: string | undefined;
  @Input() step: string | undefined;
  @Input() errorMessage: string = 'Valor inválido';
  @Input() showError: boolean = false;

  @Output() valueChange = new EventEmitter<any>();
  @Output() ionBlurEvent = new EventEmitter<any>();
  @Output() ionFocusEvent = new EventEmitter<any>();

  innerValue: any = '';

  private onChange: (value: any) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: any): void {
    this.innerValue = value;
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInput(event: any): void {
    const value = event.detail.value;
    this.innerValue = value;
    this.onChange(value);
    this.valueChange.emit(value);
  }

  onBlur(event: any): void {
    this.onTouched();
    this.ionBlurEvent.emit(event);
  }

  onFocus(event: any): void {
    this.ionFocusEvent.emit(event);
  }

  getValue(): any {
    return this.innerValue;
  }

  setValue(value: any): void {
    this.innerValue = value;
    this.onChange(value);
  }

  clear(): void {
    this.innerValue = '';
    this.onChange('');
  }

  focus(): void {
    const inputElement = document.querySelector('ion-input');
    if (inputElement) {
      inputElement.focus();
    }
  }
}