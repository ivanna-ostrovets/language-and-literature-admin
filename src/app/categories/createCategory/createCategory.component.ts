import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Category } from '../../../common/models/category';
import { Subject } from '../../../common/models/subject';

import { CategoryService } from '../../../common/services/category.service';

import { MdSnackBar } from '@angular/material';

@Component({
  templateUrl: './createCategory.component.html'
})
export class CreateCategoryComponent implements OnInit {
  categoryForm: NgForm;
  category: Category = new Category();
  subjects: Subject[] = [];

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    public snackBar: MdSnackBar
  ) {
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: { subjects: Subject[] }) => {
        this.subjects = data.subjects;
      });
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
