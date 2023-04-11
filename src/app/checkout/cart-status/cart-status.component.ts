import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/common/cart-item';
import { CartService } from 'src/app/services/cart.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-cart-status',
  templateUrl: './cart-status.component.html'
})
export class CartStatusComponent implements OnInit {

  cartItems: CartItem[] = [];
  totalPrice: number = 0.00;
  totalQuantity: number = 0;

  constructor(private cartService: CartService,
    private router: Router) {

  }
  ngOnInit(): void {
    this.updateCartStatus();
  }

  goCheckoutCart() {
    this.router.navigate(["/checkout/cart-details"])
  }

  updateCartStatus() {

    this.cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    )

    this.cartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    )
  }
}
