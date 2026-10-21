export class BaseModel {
  protected createdAt: Date = new Date();
  protected updatedAt: Date = new Date();
  protected isDeleted: boolean = false;

  constructor() {}

  getCreatedAt(): Date {
    return this.createdAt;
  }

  getUpdatedAt(): Date {
    return this.updatedAt;
  }

  isMarkedAsDeleted(): boolean {
    return this.isDeleted;
  }

  markAsDeleted(): void {
    this.isDeleted = true;
    this.updatedAt = new Date();
  }

  restore(): void {
    this.isDeleted = false;
    this.updatedAt = new Date();
  }

  touch(): void {
    this.updatedAt = new Date();
  }

  hasBeenModified(): boolean {
    return this.createdAt.getTime() !== this.updatedAt.getTime();
  }

  getAgeInDays(): number {
    const now = new Date();
    const diffMs = now.getTime() - this.createdAt.getTime();
    return Math.floor(diffMs / (1000 * 60 * 60 * 24));
  }

  getDaysSinceLastUpdate(): number {
    const now = new Date();
    const diffMs = now.getTime() - this.updatedAt.getTime();
    return Math.floor(diffMs / (1000 * 60 * 60 * 24));
  }

  clone(): BaseModel {
    const cloned = new BaseModel();
    cloned.createdAt = new Date(this.createdAt);
    cloned.updatedAt = new Date(this.updatedAt);
    cloned.isDeleted = this.isDeleted;
    return cloned;
  }

  validate(): boolean {
    return !this.isDeleted;
  }

  getMetadata(): { createdAt: Date; updatedAt: Date; isDeleted: boolean } {
    return {
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      isDeleted: this.isDeleted
    };
  }

  setMetadata(metadata: { createdAt?: Date; updatedAt?: Date; isDeleted?: boolean }): void {
    if (metadata.createdAt) this.createdAt = metadata.createdAt;
    if (metadata.updatedAt) this.updatedAt = metadata.updatedAt;
    if (metadata.isDeleted !== undefined) this.isDeleted = metadata.isDeleted;
  }

  toJSON(): any {
    return {
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      isDeleted: this.isDeleted
    };
  }

  static fromJSON(json: any): BaseModel {
    const model = new BaseModel();
    model.createdAt = json.createdAt ? new Date(json.createdAt) : new Date();
    model.updatedAt = json.updatedAt ? new Date(json.updatedAt) : new Date();
    model.isDeleted = json.isDeleted ?? false;
    return model;
  }

  isNew(): boolean {
    return this.getAgeInDays() === 0;
  }

  isStale(daysThreshold: number = 30): boolean {
    return this.getDaysSinceLastUpdate() > daysThreshold;
  }

  getTimeSinceCreation(): string {
    const days = this.getAgeInDays();
    if (days === 0) return 'Hoy';
    if (days === 1) return 'Ayer';
    if (days < 7) return `Hace ${days} días`;
    if (days < 30) return `Hace ${Math.floor(days / 7)} semanas`;
    return `Hace ${Math.floor(days / 30)} meses`;
  }

  getTimeSinceUpdate(): string {
    const days = this.getDaysSinceLastUpdate();
    if (days === 0) return 'Ahora mismo';
    if (days === 1) return 'Ayer';
    if (days < 7) return `Hace ${days} días`;
    if (days < 30) return `Hace ${Math.floor(days / 7)} semanas`;
    return `Hace ${Math.floor(days / 30)} meses`;
  }

  exportToString(): string {
    return JSON.stringify(this.toJSON());
  }
}