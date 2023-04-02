import { Component } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html'
})
export class EditProductsComponent {
  products: Product[] = [];
  displayDialog: boolean = false;
  newProduct: boolean = false;
  product: Product = new Product();

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  this.productService.listProductAdmin().subscribe(p => {
  this.products = p;
  });
  }

  excluirProduct(prod: Product): void {
    const index = this.products.findIndex(p => p === prod);
    if (index !== -1) {
      this.productService.deleteProduct(prod.id).subscribe(() => {
        this.products.splice(index, 1);
      });
    }
  }


  saveCategory(): void {
  if (this.newProduct) {
  this.productService.createProduct(this.product).subscribe(() => {
  this.products.push(this.product);
  this.product;
  this.displayDialog = false;
  });
  } else {
  this.productService.updateProduct(this.product.id, this.product).subscribe(() => {
  this.products[this.findSelectedProductIndex()] = this.product;
  this.product;
  this.displayDialog = false;
  });
  }
  }

  cancelSaveCategory(): void {
  this.product;
  this.displayDialog = false;
  }

  onRowSelect(event: any): void {
  this.newProduct = false;
  this.product = this.cloneCategory(event.data);
  this.displayDialog = true;
  }

  showAddDialog(): void {
  this.newProduct = true;
  this.product;
  this.displayDialog = true;
  }

  showEditDialog(product: Product): void {
    this.newProduct = false;
    this.product = this.cloneCategory(product);
    this.displayDialog = true;
  }

  private findSelectedProductIndex(): number {
  return this.products.indexOf(this.product);
  }

  private cloneCategory(cat: Product): Product {
  return Object.assign({}, cat);
  }
}
