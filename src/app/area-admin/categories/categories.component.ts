import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { Category } from 'src/app/common/category';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html'
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];
  displayDialog: boolean = false;
  newCategory: boolean = false;
  category: Category = new Category(null, '');

  constructor(private categoryService: CategoriesService) { }

  ngOnInit(): void {
  this.categoryService.getCategory().subscribe(cat => {
  this.categories = cat;
  });
  }

  excluirCategoria(cat: Category): void {
    const index = this.categories.findIndex(p => p === cat);
    if (index !== -1) {
      this.categoryService.deleteCategory(cat.id).subscribe(() => {
        this.categories.splice(index, 1);
      });
    }
  }


  saveCategory(): void {
  if (this.newCategory) {
  this.categoryService.createCategory(this.category).subscribe(() => {
  this.categories.push(this.category);
  this.category;
  this.displayDialog = false;
  });
  } else {
  this.categoryService.updateCategory(this.category.id, this.category).subscribe(() => {
  this.categories[this.findSelectedCategoryIndex()] = this.category;
  this.category;
  this.displayDialog = false;
  });
  }
  }

  cancelSaveCategory(): void {
  this.category;
  this.displayDialog = false;
  }

  onRowSelect(event: any): void {
  this.newCategory = false;
  this.category = this.cloneCategory(event.data);
  this.displayDialog = true;
  }

  showAddDialog(): void {
  this.newCategory = true;
  this.category;
  this.displayDialog = true;
  }

  showEditDialog(cat: Category): void {
    this.newCategory = false;
    this.category = this.cloneCategory(cat);
    this.displayDialog = true;
  }

  private findSelectedCategoryIndex(): number {
  return this.categories.indexOf(this.category);
  }

  private cloneCategory(cat: Category): Category {
  return Object.assign({}, cat);
  }
}
