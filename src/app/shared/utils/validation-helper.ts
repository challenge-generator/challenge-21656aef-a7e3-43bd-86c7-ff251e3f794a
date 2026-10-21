export class ValidationHelper {
  static validateEmail(email: string): boolean {
    if (!email || email.trim() === '') {
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  static validateEmailRequired(email: string): string | null {
    if (!email || email.trim() === '') {
      return 'El correo electrónico es requerido';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'El formato del correo electrónico es inválido';
    }
    return null;
  }

  static validateEmailFormat(email: string): boolean {
    if (!email || email.trim() === '') {
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  static validatePhone(phone: string): boolean {
    if (!phone || phone.trim() === '') {
      return false;
    }
    const phoneRegex = /^\+?[0-9]{10,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  }

  static validatePhoneRequired(phone: string): string | null {
    if (!phone || phone.trim() === '') {
      return 'El teléfono es requerido';
    }
    const phoneRegex = /^\+?[0-9]{10,15}$/;
    if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
      return 'El formato del teléfono es inválido';
    }
    return null;
  }

  static validatePhoneFormat(phone: string): boolean {
    if (!phone || phone.trim() === '') {
      return false;
    }
    const phoneRegex = /^\+?[0-9]{10,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  }

  static validatePassword(password: string): boolean {
    if (!password || password.length < 8) {
      return false;
    }
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
  }

  static validatePasswordRequired(password: string): string | null {
    if (!password || password.trim() === '') {
      return 'La contraseña es requerida';
    }
    if (password.length < 8) {
      return 'La contraseña debe tener al menos 8 caracteres';
    }
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    if (!hasUpperCase) {
      return 'La contraseña debe contener al menos una letra mayúscula';
    }
    if (!hasLowerCase) {
      return 'La contraseña debe contener al menos una letra minúscula';
    }
    if (!hasNumber) {
      return 'La contraseña debe contener al menos un número';
    }
    if (!hasSpecialChar) {
      return 'La contraseña debe contener al menos un carácter especial';
    }
    return null;
  }

  static validatePasswordStrength(password: string): number {
    if (!password || password.length === 0) return 0;
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (password.length >= 12) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength += 1;
    return strength;
  }

  static validateRequired(value: any): boolean {
    if (value === null || value === undefined) {
      return false;
    }
    if (typeof value === 'string') {
      return value.trim().length > 0;
    }
    if (Array.isArray(value)) {
      return value.length > 0;
    }
    return true;
  }

  static validateRequiredField(fieldName: string, value: any): string | null {
    if (value === null || value === undefined) {
      return `${fieldName} es requerido`;
    }
    if (typeof value === 'string' && value.trim().length === 0) {
      return `${fieldName} es requerido`;
    }
    if (Array.isArray(value) && value.length === 0) {
      return `${fieldName} es requerido`;
    }
    return null;
  }

  static validateMinLength(value: string, minLength: number): boolean {
    return value && value.length >= minLength;
  }

  static validateMinLengthField(fieldName: string, value: string, minLength: number): string | null {
    if (!value || value.length < minLength) {
      return `${fieldName} debe tener al menos ${minLength} caracteres`;
    }
    return null;
  }

  static validateMaxLength(value: string, maxLength: number): boolean {
    return value && value.length <= maxLength;
  }

  static validateMaxLengthField(fieldName: string, value: string, maxLength: number): string | null {
    if (value && value.length > maxLength) {
      return `${fieldName} no debe exceder ${maxLength} caracteres`;
    }
    return null;
  }

  static validateRange(value: number, min: number, max: number): boolean {
    return value >= min && value <= max;
  }

  static validateRangeField(fieldName: string, value: number, min: number, max: number): string | null {
    if (value < min || value > max) {
      return `${fieldName} debe estar entre ${min} y ${max}`;
    }
    return null;
  }

  static validateUrl(url: string): boolean {
    if (!url || url.trim() === '') {
      return false;
    }
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  static validateUrlField(fieldName: string, url: string): string | null {
    if (!url || url.trim() === '') {
      return `${fieldName} es requerido`;
    }
    try {
      new URL(url);
      return null;
    } catch {
      return `El formato de ${fieldName} es inválido`;
    }
  }

  static validateDni(dni: string): boolean {
    if (!dni || dni.trim() === '') {
      return false;
    }
    const dniRegex = /^[0-9]{8}[A-Za-z]$/;
    return dniRegex.test(dni);
  }

  static validateDniField(dni: string): string | null {
    if (!dni || dni.trim() === '') {
      return 'El DNI es requerido';
    }
    const dniRegex = /^[0-9]{8}[A-Za-z]$/;
    if (!dniRegex.test(dni)) {
      return 'El formato del DNI es inválido';
    }
    return null;
  }

  static validateCreditCard(cardNumber: string): boolean {
    if (!cardNumber || cardNumber.trim() === '') {
      return false;
    }
    const cleaned = cardNumber.replace(/\s/g, '');
    if (!/^\d{13,19}$/.test(cleaned)) {
      return false;
    }
    let sum = 0;
    let isEven = false;
    for (let i = cleaned.length - 1; i >= 0; i--) {
      let digit = parseInt(cleaned.charAt(i), 10);
      if (isEven) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      sum += digit;
      isEven = !isEven;
    }
    return sum % 10 === 0;
  }

  static validateCreditCardField(cardNumber: string): string | null {
    if (!cardNumber || cardNumber.trim() === '') {
      return 'El número de tarjeta es requerido';
    }
    const cleaned = cardNumber.replace(/\s/g, '');
    if (!/^\d{13,19}$/.test(cleaned)) {
      return 'El número de tarjeta debe tener entre 13 y 19 dígitos';
    }
    let sum = 0;
    let isEven = false;
    for (let i = cleaned.length - 1; i >= 0; i--) {
      let digit = parseInt(cleaned.charAt(i), 10);
      if (isEven) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      sum += digit;
      isEven = !isEven;
    }
    if (sum % 10 !== 0) {
      return 'El número de tarjeta es inválido';
    }
    return null;
  }

  static validateUsername(username: string): boolean {
    if (!username || username.trim().length < 3) {
      return false;
    }
    const usernameRegex = /^[a-zA-Z0-9_]+$/;
    return usernameRegex.test(username);
  }

  static validateUsernameField(username: string): string | null {
    if (!username || username.trim() === '') {
      return 'El nombre de usuario es requerido';
    }
    if (username.trim().length < 3) {
      return 'El nombre de usuario debe tener al menos 3 caracteres';
    }
    const usernameRegex = /^[a-zA-Z0-9_]+$/;
    if (!usernameRegex.test(username)) {
      return 'El nombre de usuario solo puede contener letras, números y guiones bajos';
    }
    return null;
  }

  static validateMatch(value: string, confirmValue: string): boolean {
    return value === confirmValue;
  }

  static validateMatchField(fieldName: string, value: string, confirmValue: string): string | null {
    if (value !== confirmValue) {
      return `Los campos ${fieldName} no coinciden`;
    }
    return null;
  }

  static validateNumeric(value: string): boolean {
    if (!value || value.trim() === '') {
      return false;
    }
    return !isNaN(Number(value)) && !isNaN(parseFloat(value));
  }

  static validateNumericField(fieldName: string, value: string): string | null {
    if (!value || value.trim() === '') {
      return `${fieldName} es requerido`;
    }
    if (isNaN(Number(value)) || isNaN(parseFloat(value))) {
      return `${fieldName} debe ser un número válido`;
    }
    return null;
  }

  static validateInteger(value: string): boolean {
    if (!value || value.trim() === '') {
      return false;
    }
    return Number.isInteger(Number(value));
  }

  static validateDecimal(value: string): boolean {
    if (!value || value.trim() === '') {
      return false;
    }
    const decimalRegex = /^\d+(\.\d+)?$/;
    return decimalRegex.test(value);
  }

  static validateAlphanumeric(value: string): boolean {
    if (!value || value.trim() === '') {
      return false;
    }
    return /^[a-zA-Z0-9]+$/.test(value);
  }

  static validateAlphabetic(value: string): boolean {
    if (!value || value.trim() === '') {
      return false;
    }
    return /^[a-zA-Z]+$/.test(value);
  }

  static validatePostalCode(postalCode: string): boolean {
    if (!postalCode || postalCode.trim() === '') {
      return false;
    }
    const postalCodeRegex = /^\d{5}$/;
    return postalCodeRegex.test(postalCode);
  }

  static validatePostalCodeField(postalCode: string): string | null {
    if (!postalCode || postalCode.trim() === '') {
      return 'El código postal es requerido';
    }
    const postalCodeRegex = /^\d{5}$/;
    if (!postalCodeRegex.test(postalCode)) {
      return 'El código postal debe tener 5 dígitos';
    }
    return null;
  }

  static validateDateNotPast(date: Date | string): boolean {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return dateObj >= today;
  }

  static validateDateNotPastField(fieldName: string, date: Date | string): string | null {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (dateObj < today) {
      return `${fieldName} no puede ser una fecha pasada`;
    }
    return null;
  }

  static validateDateNotFuture(date: Date | string): boolean {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return dateObj <= today;
  }

  static validateDateRange(startDate: Date | string, endDate: Date | string): boolean {
    const start = typeof startDate === 'string' ? new Date(startDate) : startDate;
    const end = typeof endDate === 'string' ? new Date(endDate) : endDate;
    return start <= end;
  }

  static validateDateRangeField(startDate: Date | string, endDate: Date | string): string | null {
    const start = typeof startDate === 'string' ? new Date(startDate) : startDate;
    const end = typeof endDate === 'string' ? new Date(endDate) : endDate;
    if (start > end) {
      return 'La fecha de inicio debe ser anterior a la fecha de fin';
    }
    return null;
  }
}