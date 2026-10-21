import { format, parseISO, addDays, subDays, differenceInDays, isValid, isAfter, isBefore, startOfDay, endOfDay, addMonths, subMonths, isSameDay } from 'date-fns';

export class DateHelper {
  static formatDate(date: Date | string, formatStr: string = 'yyyy-MM-dd'): string {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    if (!isValid(dateObj)) {
      return 'Fecha inválida';
    }
    return format(dateObj, formatStr);
  }

  static formatDateTime(date: Date | string): string {
    return DateHelper.formatDate(date, 'yyyy-MM-dd HH:mm:ss');
  }

  static formatDateForDisplay(date: Date | string): string {
    return DateHelper.formatDate(date, 'dd/MM/yyyy');
  }

  static formatDateTimeForDisplay(date: Date | string): string {
    return DateHelper.formatDate(date, 'dd/MM/yyyy HH:mm');
  }

  static parseDate(dateString: string): Date | null {
    const parsed = parseISO(dateString);
    return isValid(parsed) ? parsed : null;
  }

  static addDaysToDate(date: Date | string, days: number): Date {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return addDays(dateObj, days);
  }

  static subtractDaysFromDate(date: Date | string, days: number): Date {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return subDays(dateObj, days);
  }

  static addMonthsToDate(date: Date | string, months: number): Date {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return addMonths(dateObj, months);
  }

  static subtractMonthsFromDate(date: Date | string, months: number): Date {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return subMonths(dateObj, months);
  }

  static getDaysDifference(date1: Date | string, date2: Date | string): number {
    const dateObj1 = typeof date1 === 'string' ? parseISO(date1) : date1;
    const dateObj2 = typeof date2 === 'string' ? parseISO(date2) : date2;
    return differenceInDays(dateObj1, dateObj2);
  }

  static isDateAfter(date1: Date | string, date2: Date | string): boolean {
    const dateObj1 = typeof date1 === 'string' ? parseISO(date1) : date1;
    const dateObj2 = typeof date2 === 'string' ? parseISO(date2) : date2;
    return isAfter(dateObj1, dateObj2);
  }

  static isDateBefore(date1: Date | string, date2: Date | string): boolean {
    const dateObj1 = typeof date1 === 'string' ? parseISO(date1) : date1;
    const dateObj2 = typeof date2 === 'string' ? parseISO(date2) : date2;
    return isBefore(dateObj1, dateObj2);
  }

  static isSameDate(date1: Date | string, date2: Date | string): boolean {
    const dateObj1 = typeof date1 === 'string' ? parseISO(date1) : date1;
    const dateObj2 = typeof date2 === 'string' ? parseISO(date2) : date2;
    return isSameDay(dateObj1, dateObj2);
  }

  static getStartOfDay(date: Date | string): Date {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return startOfDay(dateObj);
  }

  static getEndOfDay(date: Date | string): Date {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return endOfDay(dateObj);
  }

  static getCurrentDate(): Date {
    return new Date();
  }

  static getCurrentDateString(): string {
    return format(new Date(), 'yyyy-MM-dd');
  }

  static getCurrentDateTimeString(): string {
    return format(new Date(), 'yyyy-MM-dd HH:mm:ss');
  }

  static isValidDate(date: any): boolean {
    if (!date) return false;
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return isValid(dateObj);
  }

  static getRelativeTimeString(date: Date | string): string {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    const now = new Date();
    const diffDays = differenceInDays(now, dateObj);

    if (diffDays === 0) return 'Hoy';
    if (diffDays === 1) return 'Ayer';
    if (diffDays === -1) return 'Mañana';
    if (diffDays > 0 && diffDays < 7) return `Hace ${diffDays} días`;
    if (diffDays < 0 && diffDays > -7) return `En ${Math.abs(diffDays)} días`;

    return DateHelper.formatDateForDisplay(dateObj);
  }

  static getDateRangeArray(startDate: Date | string, endDate: Date | string): Date[] {
    const start = typeof startDate === 'string' ? parseISO(startDate) : startDate;
    const end = typeof endDate === 'string' ? parseISO(endDate) : endDate;
    const days = differenceInDays(end, start);
    const dates: Date[] = [];

    for (let i = 0; i <= days; i++) {
      dates.push(addDays(start, i));
    }

    return dates;
  }

  static getMonthName(date: Date | string): string {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return format(dateObj, 'MMMM');
  }

  static getDayOfWeek(date: Date | string): string {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return format(dateObj, 'EEEE');
  }

  static getShortMonthName(date: Date | string): string {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return format(dateObj, 'MMM');
  }

  static getYear(date: Date | string): number {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return dateObj.getFullYear();
  }

  static getMonth(date: Date | string): number {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return dateObj.getMonth() + 1;
  }

  static getDay(date: Date | string): number {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return dateObj.getDate();
  }

  static isWeekend(date: Date | string): boolean {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    const day = dateObj.getDay();
    return day === 0 || day === 6;
  }

  static getWeekNumber(date: Date | string): number {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    const startOfYear = new Date(dateObj.getFullYear(), 0, 1);
    const days = Math.floor((dateObj.getTime() - startOfYear.getTime()) / (24 * 60 * 60 * 1000));
    return Math.ceil((days + startOfYear.getDay() + 1) / 7);
  }
}