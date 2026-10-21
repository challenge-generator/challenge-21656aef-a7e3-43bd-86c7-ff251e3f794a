export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  lastLogin: Date | null;
  role: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export class UserModel implements User {
  public id: string = '';
  public email: string = '';
  public password: string = '';
  public name: string = '';
  public lastLogin: Date | null = null;
  public role: string = '';
  public phone: string = '';
  public address: string = '';
  public city: string = '';
  public country: string = '';
  public isActive: boolean = true;
  public createdAt: Date = new Date();
  public updatedAt: Date = new Date();

  constructor(data?: Partial<User>) {
    if (data) {
      this.id = data.id ?? '';
      this.email = data.email ?? '';
      this.password = data.password ?? '';
      this.name = data.name ?? '';
      this.lastLogin = data.lastLogin ?? null;
      this.role = data.role ?? '';
      this.phone = data.phone ?? '';
      this.address = data.address ?? '';
      this.city = data.city ?? '';
      this.country = data.country ?? '';
      this.isActive = data.isActive ?? true;
      this.createdAt = data.createdAt ?? new Date();
      this.updatedAt = data.updatedAt ?? new Date();
    }
  }

  getFullName(): string {
    return this.name;
  }

  getInitials(): string {
    const parts = this.name.split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return this.name.substring(0, 2).toUpperCase();
  }

  isAdmin(): boolean {
    return this.role === 'admin';
  }

  isUserActive(): boolean {
    return this.isActive;
  }

  toggleActive(): void {
    this.isActive = !this.isActive;
    this.updatedAt = new Date();
  }

  updateProfile(data: Partial<User>): void {
    this.name = data.name ?? this.name;
    this.email = data.email ?? this.email;
    this.phone = data.phone ?? this.phone;
    this.address = data.address ?? this.address;
    this.city = data.city ?? this.city;
    this.country = data.country ?? this.country;
    this.updatedAt = new Date();
  }

  getProfileSummary(): string {
    return `${this.name} (${this.email}) - ${this.role}`;
  }

  validateEmail(): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.email);
  }

  validatePassword(): boolean {
    return this.password.length >= 6;
  }

  getAddressFormatted(): string {
    return `${this.address}, ${this.city}, ${this.country}`;
  }

  toJSON(): User {
    return {
      id: this.id,
      email: this.email,
      password: this.password,
      name: this.name,
      lastLogin: this.lastLogin,
      role: this.role,
      phone: this.phone,
      address: this.address,
      city: this.city,
      country: this.country,
      isActive: this.isActive,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };
  }

  static fromJSON(json: any): UserModel {
    return new UserModel({
      id: json.id,
      email: json.email,
      password: json.password,
      name: json.name,
      lastLogin: json.lastLogin ? new Date(json.lastLogin) : null,
      role: json.role,
      phone: json.phone,
      address: json.address,
      city: json.city,
      country: json.country,
      isActive: json.isActive,
      createdAt: json.createdAt ? new Date(json.createdAt) : new Date(),
      updatedAt: json.updatedAt ? new Date(json.updatedAt) : new Date()
    });
  }
}