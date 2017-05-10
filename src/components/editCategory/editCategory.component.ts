import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Category } from '../../models/category';
import { Subject } from '../../models/subject';

import { CategoryService } from '../../services/category.service';
import { SubjectService } from '../../services/subject.service';

import { MdSnackBar } from '@angular/material';

import * as _ from 'lodash';

@Component({
  templateUrl: './editCategory.component.html'
})
export class EditCategoryComponent implements OnInit {
  id: string;
  categoryForm: NgForm;
  category: Category;
  originalCategory: Category;
  subjects: Subject[] = [];

  constructor(
    private categoryService: CategoryService,
    private subjectService: SubjectService,
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

    this.subjectService.getAll().then(subjects => {
      this.subjects = subjects;
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
    this.category = _.cloneDeep(this.originalCategory);
  }
}
