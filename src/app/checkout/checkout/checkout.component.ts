import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html'
})
export class CheckoutComponent {

  constructor(private router: Router) {}

  isCart(): boolean {
      return this.router.isActive('/checkout/cart-details', false)
  }

  isPayment(): boolean {
    return this.router.isActive('/checkout/payment', false);
  }

  isDelivery(): boolean {
    return this.router.isActive('/checkout/delivery', false);
  }
  isProfile(): boolean {
    return this.router.isActive('/checkout/profile-form', false);

  }

}
