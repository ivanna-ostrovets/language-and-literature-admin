import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { MatSnackBar } from '@angular/material';

import { CategoriesService } from '../../../shared/services/resources/categories.service';
import { Category } from '../../../shared/models/category.model';
import { Subject } from '../../../shared/models/subject.model';

@Component({
  templateUrl: './createCategory.component.html',
})
export class CreateCategoryComponent implements OnInit {
  category: Category = new Category();
  categoryForm: NgForm;
  subjects: Subject[];

  constructor(private categoriesService: CategoriesService,
              private route: ActivatedRoute,
              public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: { subjects: Subject[] }) => {
        this.subjects = data.subjects;
      });
  }

  submit() {
    return this.categoriesService.create(this.category)
      .subscribe(() => {
        this.category = new Category();

        this.snackBar.open('Тему додано!', 'OK', {
          duration: 3000,
        });

        this.categoryForm.reset();
      });
  }
}
