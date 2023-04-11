import { Order } from "./order";

export interface Payment {
  id: number;
  moment: Date;
  order: Order;
}
