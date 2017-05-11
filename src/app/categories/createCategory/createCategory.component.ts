import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Category } from '../../../common/models/category';

import { CategoryService } from '../../../common/services/category.service';

import { MdSnackBar } from '@angular/material';

@Component({
  templateUrl: './createCategory.component.html'
})
export class CreateCategoryComponent {
  categoryForm: NgForm;
  category: Category = new Category();

  constructor(
    private categoryService: CategoryService,
    public snackBar: MdSnackBar
  ) {
  }

  submit() {
    return this.categoryService.create(this.category)
      .then(() => {
        this.category = new Category();

        this.snackBar.open('Категорію додано!', 'OK', {
          duration: 3000,
        });

        this.categoryForm.reset();
      });
  }
}
