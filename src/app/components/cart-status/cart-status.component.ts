import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/common/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-status',
  templateUrl: './cart-status.component.html'
})
export class CartStatusComponent implements OnInit {

  cartItems: CartItem[] = [];
  totalPrice: number = 0.00;
  totalQuantity: number = 0;

  constructor(private cartService: CartService) {

  }
  ngOnInit(): void {
    this.updateCartStatus();
  }


  //subscribe to cart totalPrice
  updateCartStatus() {

    this.cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    )

    this.cartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    )
  }
}
