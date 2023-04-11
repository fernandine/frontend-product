import { OrderItem } from "./orderItem";
import { Payment } from "./payment";
import { User } from "./user";

export interface Order {
  id: number;
  moment: Date;
  status: string;
  client: User;
  payment: Payment;
  items: OrderItem[];
}
