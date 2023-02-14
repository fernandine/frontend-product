import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SelectItem } from 'primeng/api/selectitem';
import { CartItem } from 'src/app/common/cart-item';
import { Product } from 'src/app/common/product';
import { ProductCategory } from 'src/app/common/product-category';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  darkMode = true;

  products: Product[] = [];
  sortOptions: SelectItem[] = [];
  productCategories: ProductCategory[] = [];
  nameCategory!: ProductCategory;
  currentCategoryId: number = 1;
  previousCategoryId: number = 1;
  searchMode: boolean = false;

  // new properties
  thePageNumber: number = 1;
  thePageSize: number = 10;
  theTotalElements: number = 0;

  previousKeyword: string = '';

  pageSize: number = 3;
  currentPage: number = 0;

  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private route: ActivatedRoute) { }

    toggleTheme() {
      this.darkMode = !this.darkMode;
    }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
      this.listProductCategories();
    })
  }


  listProductCategories() {
    this.productService.getProductCategories().subscribe(
      (data: any) => {
        this.productCategories = data;
      }
    )
  }

  listProducts() {
    this.searchMode = this.route.snapshot.paramMap.has('keyword')
    if (this.searchMode) {
      this.handleSearchProducts();
    } else {
      this.handleListProducts();
    }
  }


  handleSearchProducts() {
    const theKeyword: string = this.route.snapshot.paramMap.get('keyword')!

    if (this.previousKeyword != theKeyword) {
      this.thePageNumber = 1;
    }

    this.previousKeyword = theKeyword;

  //  console.log(`keyword=${theKeyword}, pageNumber=${this.thePageNumber}`);


    this.productService.searchProductsPaginate(this.thePageNumber - 1, this.thePageSize, theKeyword)
      .subscribe(this.processResult())
  }


  handleListProducts() {
    const routeHasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if (routeHasCategoryId) {
      // get the "id" param string. convert string to a number using the "+" symbol
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;
    }
    else {
      // not category id available ... default to category id 1
      this.currentCategoryId = 1;
    }

    if (this.previousCategoryId != this.currentCategoryId) {
      this.thePageNumber = 1;
    }
    this.previousCategoryId = this.currentCategoryId;

    //console.log(`currentCategoryId=${this.currentCategoryId},`
    //  + `thePageNumber=${this.thePageNumber}`);


    this.productService.getProductListPaginate(
      this.thePageNumber - 1,
      this.thePageSize,
      this.currentCategoryId).subscribe(this.processResult())
  }

  updatePageSize(pageSize: string) {
    this.thePageSize = +pageSize;
    this.thePageNumber = 1;
    this.listProducts();
  }

  processResult() {
    return (data: any) => {
      this.products = data.content;
      this.thePageSize = data.size;
      this.thePageNumber = data.number + 1;
      this.theTotalElements = data.totalElements;
    }
  }

  addToCart(theProduct: Product) {
  //  console.log(`Adding to cart: ${theProduct.name}, ${theProduct.unitPrice}`);

    const theCartItem = new CartItem(theProduct);
    this.cartService.addToCart(theCartItem);

  }

  onPageChange(event: { page: number; }) {
    this.currentPage = event.page;
  }

}
