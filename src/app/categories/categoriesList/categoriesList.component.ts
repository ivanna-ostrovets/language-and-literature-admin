import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Category } from '../../../common/models/category';
import { Subject } from '../../../common/models/subject';

import { CategoryService } from '../../../common/services/category.service';
import { DialogService } from '../../../common/services/dialog.service';

import { MatSnackBar } from '@angular/material';

import * as _ from 'lodash';

@Component({
  templateUrl: './categoriesList.component.html'
})
export class CategoriesListComponent implements OnInit {
  categories: Category[] = [];
  subjects: Subject[] = [];
  subject: string;

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private dialogService: DialogService,
    public snackBar: MatSnackBar
  ) {
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: { subjects: Subject[] }) => {
        this.subjects = data.subjects;
      });
  }

  getPagingRange(num: number): number[] {
    return _.range(0, Math.ceil(num / 7));
  }

  onSubjectChange(subjectId: string) {
    this.categoryService.getAll(subjectId)
      .then(categories => {
        this.categories = categories;
      });
  }

  confirmDelete(subjectId: string) {
    const dialogRef = this.dialogService.confirm({
      title: 'Видалити категорію?',
      message: 'Зауважте, що пов\'язані тести також будуть видалені!'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.delete(subjectId);
      }
    });
  }

  delete(categoryId: string) {
    return this.categoryService.delete(categoryId)
      .then(() => {
        this.categories = this.categories.filter(category => category._id !== categoryId);

        this.snackBar.open('Категорію видалено!', 'OK', {
          duration: 3000,
        });
      });
  }
}
