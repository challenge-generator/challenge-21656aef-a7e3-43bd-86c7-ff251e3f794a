import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Order } from '../models/order.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { ToastController } from '@ionic/angular/standalone';

@Injectable({
  providedIn: 'root'
})
export class FormatHelper {
  private currencyFormatSubject = new BehaviorSubject<string>('USD');
  public currencyFormat$: Observable<string> = this.currencyFormatSubject.asObservable();

  private dateFormatSubject = new BehaviorSubject<string>('DD/MM/YYYY');
  public dateFormat$: Observable<string> = this.dateFormatSubject.asObservable();

  constructor(private toastController: ToastController) {}

  formatCurrency(amount: number, currency?: string): string {
    const curr = currency || this.currencyFormatSubject.value;
    const symbols: { [key: string]: string } = {
      'USD': '$',
      'EUR': '€',
      'GBP': '£',
      'MXN': '$',
      'ARS': '$'
    };
    const symbol = symbols[curr] || '$';
    const formattedAmount = amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return `${symbol}${formattedAmount}`;
  }

  formatDate(date: Date | string, format?: string): string {
    const fmt = format || this.dateFormatSubject.value;
    const d = typeof date === 'string' ? new Date(date) : date;
    if (isNaN(d.getTime())) {
      return 'Fecha inválida';
    }
    const day = d.getDate().toString().padStart(2, '0');
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const year = d.getFullYear();
    const hours = d.getHours().toString().padStart(2, '0');
    const minutes = d.getMinutes().toString().padStart(2, '0');

    if (fmt === 'DD/MM/YYYY') {
      return `${day}/${month}/${year}`;
    } else if (fmt === 'MM/DD/YYYY') {
      return `${month}/${day}/${year}`;
    } else if (fmt === 'YYYY-MM-DD') {
      return `${year}-${month}-${day}`;
    } else if (fmt === 'DD/MM/YYYY HH:mm') {
      return `${day}/${month}/${year} ${hours}:${minutes}`;
    }
    return `${day}/${month}/${year}`;
  }

  formatPhone(phone: string, countryCode: string = '+54'): string {
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (countryCode === '+54') {
      if (cleanPhone.length === 10) {
        return `+54 9 ${cleanPhone.substring(0, 3)}-${cleanPhone.substring(3, 6)}-${cleanPhone.substring(6)}`;
      } else if (cleanPhone.length === 11) {
        return `+54 ${cleanPhone.substring(0, 2)}-${cleanPhone.substring(2, 5)}-${cleanPhone.substring(5, 8)}-${cleanPhone.substring(8)}`;
      }
    }
    return `${countryCode} ${cleanPhone}`;
  }

  formatUserName(user: User): string {
    const firstName = user.firstName || '';
    const lastName = user.lastName || '';
    const fullName = `${firstName} ${lastName}`.trim();
    if (fullName.length === 0) {
      return user.email || 'Usuario sin nombre';
    }
    return fullName.toUpperCase();
  }

  formatOrderStatus(status: string): string {
    const statusMap: { [key: string]: string } = {
      'pending': 'Pendiente',
      'processing': 'Procesando',
      'shipped': 'Enviado',
      'delivered': 'Entregado',
      'cancelled': 'Cancelado',
      'refunded': 'Reembolsado'
    };
    return statusMap[status.toLowerCase()] || status;
  }

  formatOrderId(orderId: string): string {
    return `#${orderId.toUpperCase().padStart(8, '0')}`;
  }

  formatCreditCard(cardNumber: string): string {
    const clean = cardNumber.replace(/\s/g, '');
    if (clean.length < 13 || clean.length > 19) {
      return 'Número de tarjeta inválido';
    }
    const lastFour = clean.slice(-4);
    const masked = '*'.repeat(clean.length - 4) + lastFour;
    return masked.replace(/(.{4})/g, '$1 ').trim();
  }

  formatPercentage(value: number, decimals: number = 2): string {
    return `${(value * 100).toFixed(decimals)}%`;
  }

  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  truncateText(text: string, maxLength: number, suffix: string = '...'): string {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength - suffix.length) + suffix;
  }

  capitalizeWords(text: string): string {
    return text.replace(/\b\w/g, char => char.toUpperCase());
  }

  formatAddress(address: any): string {
    if (!address) return 'Sin dirección';
    const parts = [];
    if (address.street) parts.push(address.street);
    if (address.number) parts.push(address.number);
    if (address.city) parts.push(address.city);
    if (address.state) parts.push(address.state);
    if (address.zipCode) parts.push(address.zipCode);
    if (address.country) parts.push(address.country);
    return parts.join(', ');
  }

  formatUserDisplayName(user: User, includeEmail: boolean = false): string {
    const name = this.formatUserName(user);
    if (includeEmail && user.email) {
      return `${name} (${user.email})`;
    }
    return name;
  }

  formatOrderSummary(order: Order): string {
    const id = this.formatOrderId(order.id);
    const status = this.formatOrderStatus(order.status);
    const total = this.formatCurrency(order.total);
    const date = this.formatDate(order.createdAt);
    return `${id} - ${status} - ${total} - ${date}`;
  }

  async showFormatToast(message: string): Promise<void> {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
      color: 'primary'
    });
    await toast.present();
  }

  validateEmailFormat(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  validatePhoneFormat(phone: string): boolean {
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;
    return phoneRegex.test(phone);
  }

  validateDateFormat(dateString: string): boolean {
    const date = new Date(dateString);
    return !isNaN(date.getTime());
  }

  setCurrencyFormat(format: string): void {
    this.currencyFormatSubject.next(format);
  }

  setDateFormat(format: string): void {
    this.dateFormatSubject.next(format);
  }

  getCurrencySymbol(): string {
    const currency = this.currencyFormatSubject.value;
    const symbols: { [key: string]: string } = {
      'USD': '$',
      'EUR': '€',
      'GBP': '£',
      'MXN': '$',
      'ARS': '$'
    };
    return symbols[currency] || '$';
  }

  formatTimeAgo(date: Date | string): string {
    const d = typeof date === 'string' ? new Date(date) : date;
    const now = new Date();
    const seconds = Math.floor((now.getTime() - d.getTime()) / 1000);

    if (seconds < 60) return 'Hace un momento';
    if (seconds < 3600) return `Hace ${Math.floor(seconds / 60)} minutos`;
    if (seconds < 86400) return `Hace ${Math.floor(seconds / 3600)} horas`;
    if (seconds < 2592000) return `Hace ${Math.floor(seconds / 86400)} días`;
    if (seconds < 31536000) return `Hace ${Math.floor(seconds / 2592000)} meses`;
    return `Hace ${Math.floor(seconds / 31536000)} años`;
  }

  formatInitials(firstName: string, lastName: string): string {
    const first = firstName ? firstName.charAt(0).toUpperCase() : '';
    const last = lastName ? lastName.charAt(0).toUpperCase() : '';
    return `${first}${last}` || '?';
  }

  sanitizeInput(input: string): string {
    return input.replace(/[<>]/g, '').trim();
  }

  parseQueryParams(queryString: string): { [key: string]: string } {
    const params: { [key: string]: string } = {};
    const pairs = queryString.replace(/^\?/, '').split('&');
    pairs.forEach(pair => {
      const [key, value] = pair.split('=');
      if (key) {
        params[decodeURIComponent(key)] = decodeURIComponent(value || '');
      }
    });
    return params;
  }

  buildQueryString(params: { [key: string]: any }): string {
    const pairs: string[] = [];
    Object.keys(params).forEach(key => {
      if (params[key] !== null && params[key] !== undefined) {
        pairs.push(`${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`);
      }
    });
    return pairs.length > 0 ? `?${pairs.join('&')}` : '';
  }

  generateRandomId(length: number = 8): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  maskSensitiveData(data: string, showLastChars: number = 4): string {
    if (data.length <= showLastChars) {
      return '*'.repeat(data.length);
    }
    const masked = '*'.repeat(data.length - showLastChars);
    return masked + data.slice(-showLastChars);
  }

  formatJSON(json: any, indent: number = 2): string {
    try {
      return JSON.stringify(json, null, indent);
    } catch (error) {
      return 'Error al formatear JSON';
    }
  }

  parseJSON(jsonString: string): any {
    try {
      return JSON.parse(jsonString);
    } catch (error) {
      return null;
    }
  }

  cloneObject<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
  }

  mergeObjects<T>(target: T, source: Partial<T>): T {
    return { ...target, ...source };
  }

  isEmptyObject(obj: any): boolean {
    return Object.keys(obj).length === 0;
  }

  sortByKey<T>(array: T[], key: keyof T, ascending: boolean = true): T[] {
    return array.sort((a, b) => {
      const aVal = a[key];
      const bVal = b[key];
      if (aVal < bVal) return ascending ? -1 : 1;
      if (aVal > bVal) return ascending ? 1 : -1;
      return 0;
    });
  }

  groupBy<T>(array: T[], key: keyof T): { [group: string]: T[] } {
    return array.reduce((groups, item) => {
      const groupKey = String(item[key]);
      if (!groups[groupKey]) {
        groups[groupKey] = [];
      }
      groups[groupKey].push(item);
      return groups;
    }, {} as { [group: string]: T[] });
  }

  removeDuplicates<T>(array: T[], key?: keyof T): T[] {
    if (!key) {
      return Array.from(new Set(array));
    }
    const seen = new Set();
    return array.filter(item => {
      const value = item[key];
      if (seen.has(value)) {
        return false;
      }
      seen.add(value);
      return true;
    });
  }

  async copyToClipboard(text: string): Promise<boolean> {
    try {
      await navigator.clipboard.writeText(text);
      await this.showFormatToast('Copiado al portapapeles');
      return true;
    } catch (error) {
      return false;
    }
  }

  debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number
  ): (...args: Parameters<T>) => void {
    let timeout: any;
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }

  throttle<T extends (...args: any[]) => any>(
    func: T,
    limit: number
  ): (...args: Parameters<T>) => void {
    let inThrottle: boolean;
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
}