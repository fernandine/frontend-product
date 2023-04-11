import { Order } from "./order";
import { Product } from "./product";

export interface OrderItem {
  id: OrderItemPK;
  quantity: number;
  price: number;
}

export interface OrderItemPK {
  order: Order;
  product: Product;
}
