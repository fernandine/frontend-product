import { ProductCategory } from './../../common/product-category';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  items!: MenuItem[];

  productCategories: ProductCategory[] = [];

  constructor() { }

  ngOnInit() {
}

}
