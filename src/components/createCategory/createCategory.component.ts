import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Category } from '../../models/category';
import { Subject } from '../../models/subject';

import { CategoryService } from '../../services/category.service';
import { SubjectService } from '../../services/subject.service';

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
    private subjectService: SubjectService,
    public snackBar: MdSnackBar
  ) {
  }

  ngOnInit() {
    this.subjectService.getAll().then(subjects => {
      this.subjects = subjects;
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
