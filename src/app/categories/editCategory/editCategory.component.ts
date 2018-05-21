import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';

import { MatSnackBar } from '@angular/material';

import cloneDeep from 'lodash-es/cloneDeep';

import { CategoriesService } from '../../../shared/services/resources/categories.service';
import { Category } from '../../../shared/models/category.model';
import { Subject } from '../../../shared/models/subject.model';

@Component({
  templateUrl: './editCategory.component.html',
})
export class EditCategoryComponent implements OnInit {
  category: Category;
  categoryForm: NgForm;
  id: string;
  originalCategory: Category;
  subjects: Subject[];

  constructor(private categoriesService: CategoriesService,
              private location: Location,
              private route: ActivatedRoute,
              public snackBar: MatSnackBar) {
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
    return this.categoriesService.update(this.id, this.category)
      .subscribe(() => {
        this.snackBar.open('Тему оновлено!', 'OK', {
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
