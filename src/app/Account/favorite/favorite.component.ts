import { Component, Input } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../common/product';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html'
})
export class FavoriteComponent {
  likedProducts: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList(): void {
    this.productService.findByFavorite(true).subscribe(
      likedProducts => this.likedProducts = likedProducts
    );
  }

  onFavoriteProductsChanged(product: Product): void {
    this.productService.toggleFavorite(product).subscribe(
      () => this.getProductList()
    );
  }
}
