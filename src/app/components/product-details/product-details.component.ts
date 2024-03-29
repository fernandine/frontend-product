import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CartItem } from 'src/app/common/cart-item';
import { Product } from 'src/app/common/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent implements OnInit {

  @Input() product!: Product;
  @Output() favoriteProductsChanged = new EventEmitter<Product>();

  quantity = 1;

  constructor(
    private cartService: CartService,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(() => {
      this.handleProductDetails()
    })
  }

  handleProductDetails() {
    const theProductId: number = +this.activatedRoute.snapshot.paramMap.get('id')!;
    this.productService.getOneProductById(theProductId).subscribe(
      (data: any) => {
        this.product = data
      })
  }

  addToCart() {
    const theCartItem = new CartItem(this.product);
    this.cartService.addToCart(theCartItem);
    this.quantity = 1;
  }

  toggleFavorite(): void {
    this.productService.toggleFavorite(this.product).subscribe(
      updatedProduct => this.favoriteProductsChanged.emit(updatedProduct)
    );
  }

  isFavorite(): boolean {
    return this.product.favorite;
  }
}

