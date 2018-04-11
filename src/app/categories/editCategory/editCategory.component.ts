import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';

import { Category } from '../../../common/models/category';
import { Subject } from '../../../common/models/subject';

import { CategoryService } from '../../../common/services/category.service';

import { MatSnackBar } from '@angular/material';

import { cloneDeep } from 'lodash';

@Component({
  templateUrl: './editCategory.component.html'
})
export class EditCategoryComponent implements OnInit {
  category: Category;
  categoryForm: NgForm;
  id: string;
  originalCategory: Category;
  subjects: Subject[];

  constructor(
    private categoryService: CategoryService,
    private location: Location,
    private route: ActivatedRoute,
    public snackBar: MatSnackBar
  ) {
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: { category: Category, subjects: Subject[] }) => {
        this.originalCategory = data.category;
        this.copyOriginalCategory();
        this.subjects = data.subjects;
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
