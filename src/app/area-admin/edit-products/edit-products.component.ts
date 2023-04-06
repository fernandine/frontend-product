import { Component } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html'
})
export class EditProductsComponent {
  products!: Product[];
  product = new Product();
  displayDialog: boolean = false;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      data => {
        this.products = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  showEditDialog(product: Product): void {
    this.product = { ...product };
    this.displayDialog = true;
  }

  saveCategory(): void {
    this.productService.updateProduct(this.product.id, this.product)
      .subscribe(() => {
        this.products = [...this.products];
        this.displayDialog = false;
      });
  }

  cancelSaveCategory(): void {
    if (this.product) {
      this.product = new Product();
    }
    this.displayDialog = false;
  }

  excluirProduct(product: Product): void {
    if (confirm(`Deseja realmente excluir o produto ${product.name}?`)) {
      this.productService.deleteProduct(product.id)
        .subscribe(() => {
          this.products = this.products.filter(p => p.id !== product.id);
        });
    }
  }
}
