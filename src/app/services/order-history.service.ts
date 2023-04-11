import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../common/order';

@Injectable({
  providedIn: 'root'
})
export class OrderHistoryService {

  private orderUrl = environment.shopApiUrl  + '/orders'

  constructor(private http: HttpClient) { }

  getOrder(): Observable<Order[]> {
    return this.http.get<Order[]>(this.orderUrl);
  }

  getOrderById(id: number):Observable<Order> {
    return this.http.get<Order>(`${this.orderUrl}/${id}`);
  }

  createOrder(order: Order): Observable<any> {
    return this.http.post(`${this.orderUrl}`, order);
  }

  updateOrder(id: number, value: any): Observable<any> {
    return this.http.put(`${this.orderUrl}/${id}`, value);
  }

  deleteOrder(id: number): Observable<any> {
    return this.http.delete(`${this.orderUrl}/${id}`);
  }
}
