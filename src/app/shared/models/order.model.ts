import { UserModel } from './user.model';

export interface Order {
  order_id: string;
  user_id: string;
  product_id: string;
  product_name: string;
  quantity: number;
  unit_price: number;
  total_price: number;
  status: string;
  order_date: string;
  shipping_address: string;
  payment_method: string;
  payment_status: string;
  tracking_number: string | null;
  notes: string;
}

export class OrderModel implements Order {
  public order_id: string = '';
  public user_id: string = '';
  public product_id: string = '';
  public product_name: string = '';
  public quantity: number = 0;
  public unit_price: number = 0;
  public total_price: number = 0;
  public status: string = 'pending';
  public order_date: string = '';
  public shipping_address: string = '';
  public payment_method: string = '';
  public payment_status: string = 'pending';
  public tracking_number: string | null = null;
  public notes: string = '';

  constructor(data?: Partial<Order>) {
    if (data) {
      this.order_id = data.order_id ?? '';
      this.user_id = data.user_id ?? '';
      this.product_id = data.product_id ?? '';
      this.product_name = data.product_name ?? '';
      this.quantity = data.quantity ?? 0;
      this.unit_price = data.unit_price ?? 0;
      this.total_price = data.total_price ?? 0;
      this.status = data.status ?? 'pending';
      this.order_date = data.order_date ?? '';
      this.shipping_address = data.shipping_address ?? '';
      this.payment_method = data.payment_method ?? '';
      this.payment_status = data.payment_status ?? 'pending';
      this.tracking_number = data.tracking_number ?? null;
      this.notes = data.notes ?? '';
    }
  }

  static createFromApiResponse(apiResponse: any): OrderModel {
    const order = new OrderModel();
    order.order_id = apiResponse.id;
    order.user_id = apiResponse.userId;
    order.product_id = apiResponse.items?.[0]?.productId ?? '';
    order.product_name = apiResponse.items?.[0]?.name ?? '';
    order.quantity = apiResponse.items?.[0]?.quantity ?? 0;
    order.unit_price = apiResponse.items?.[0]?.price ?? 0;
    order.total_price = apiResponse.totalAmount;
    order.status = apiResponse.status;
    order.order_date = apiResponse.createdAt;
    order.shipping_address = apiResponse.shipping?.address ?? '';
    order.payment_method = apiResponse.payment?.method ?? '';
    order.payment_status = apiResponse.payment?.status ?? 'pending';
    order.tracking_number = apiResponse.trackingNumber ?? null;
    order.notes = apiResponse.notes ?? '';
    return order;
  }

  calculateTotal(): number {
    return this.quantity * this.unit_price;
  }

  isPending(): boolean {
    return this.status === 'pending';
  }

  isCompleted(): boolean {
    return this.status === 'completed';
  }

  isCancelled(): boolean {
    return this.status === 'cancelled';
  }

  isPaid(): boolean {
    return this.payment_status === 'paid';
  }

  hasTracking(): boolean {
    return this.tracking_number !== null && this.tracking_number !== '';
  }

  getStatusDisplay(): string {
    const statusMap: { [key: string]: string } = {
      'pending': 'Pendiente',
      'processing': 'Procesando',
      'shipped': 'Enviado',
      'delivered': 'Entregado',
      'completed': 'Completado',
      'cancelled': 'Cancelado'
    };
    return statusMap[this.status] || this.status;
  }

  getPaymentStatusDisplay(): string {
    const paymentStatusMap: { [key: string]: string } = {
      'pending': 'Pendiente',
      'processing': 'Procesando',
      'paid': 'Pagado',
      'failed': 'Fallido',
      'refunded': 'Reembolsado'
    };
    return paymentStatusMap[this.payment_status] || this.payment_status;
  }

  updateStatus(newStatus: string): void {
    this.status = newStatus;
  }

  updatePaymentStatus(newPaymentStatus: string): void {
    this.payment_status = newPaymentStatus;
  }

  setTrackingNumber(tracking: string): void {
    this.tracking_number = tracking;
  }

  toApiFormat(): any {
    return {
      id: this.order_id,
      userId: this.user_id,
      items: [
        {
          productId: this.product_id,
          name: this.product_name,
          quantity: this.quantity,
          price: this.unit_price
        }
      ],
      totalAmount: this.total_price,
      status: this.status,
      createdAt: this.order_date,
      shipping: {
        address: this.shipping_address
      },
      payment: {
        method: this.payment_method,
        status: this.payment_status
      },
      trackingNumber: this.tracking_number,
      notes: this.notes
    };
  }

  toJSON(): Order {
    return {
      order_id: this.order_id,
      user_id: this.user_id,
      product_id: this.product_id,
      product_name: this.product_name,
      quantity: this.quantity,
      unit_price: this.unit_price,
      total_price: this.total_price,
      status: this.status,
      order_date: this.order_date,
      shipping_address: this.shipping_address,
      payment_method: this.payment_method,
      payment_status: this.payment_status,
      tracking_number: this.tracking_number,
      notes: this.notes
    };
  }
}