import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CartItem } from 'src/app/common/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.scss']
})
export class CartDetailsComponent implements OnInit {

  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.listCartDetails();
  }

  listCartDetails() {
    this.cartItems = this.cartService.cartItems;

    this.cartService.totalPrice.subscribe(
      x => this.totalPrice = x
    );

    this.cartService.totalQuantity.subscribe(
      x => {
        this.totalQuantity = x
      }
    );

    this.cartService.computeCartTotals();
  }

  onDelete(cartItem: CartItem) {
    this.cartService.remove(cartItem);
  }

  get subtotal() {
    return this.cartItems.map(t => t.unitPrice * t.quantity).reduce((acc, value) => acc + value, 0);
  }

  get total() {
    return this.subtotal * 1.1;
  }
}
