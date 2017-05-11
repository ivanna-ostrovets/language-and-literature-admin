import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Category } from '../../../common/models/category';

import { CategoryService } from '../../../common/services/category.service';

import { MdSnackBar } from '@angular/material';

import { cloneDeep } from 'lodash';

@Component({
  templateUrl: './editCategory.component.html'
})
export class EditCategoryComponent implements OnInit {
  id: string;
  categoryForm: NgForm;
  category: Category;
  originalCategory: Category;

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private location: Location,
    public snackBar: MdSnackBar
  ) {
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: { category: Category }) => {
        this.originalCategory = data.category;
        this.copyOriginalCategory();
      });

    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  submit() {
    return this.categoryService.update(this.id, this.category)
      .then(() => {
        this.snackBar.open('Категорію оновлено!', 'OK', {
          duration: 3000,
        });

        this.goBack();
      });
  }

  goBack() {
    this.location.back();
  }

  copyOriginalCategory() {
    this.category = cloneDeep(this.originalCategory);
  }
}
