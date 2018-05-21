import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MatSnackBar } from '@angular/material';

import range from 'lodash-es/range';

import { CategoriesService } from '../../../shared/services/resources/categories.service';
import { TestsService } from '../../../shared/services/resources/tests.service';
import { DialogService } from '../../../shared/services/dialog.service';
import { Category } from '../../../shared/models/category.model';
import { Subject } from '../../../shared/models/subject.model';
import { Test } from '../../../shared/models/test.model';

@Component({
  templateUrl: './testsList.component.html',
})
export class TestsListComponent implements OnInit {
  tests: Test[] = [];
  categories: Category[] = [];
  subjects: Subject[] = [];
  subject: string;
  category: string;

  constructor(private categoriesService: CategoriesService,
              private dialogService: DialogService,
              private route: ActivatedRoute,
              private testsService: TestsService,
              public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: { subjects: Subject[] }) => {
        this.subjects = data.subjects;
      });
  }

  getPagingRange(num: number): number[] {
    const itemsPerPage = 7;

    return range(0, Math.ceil(num / itemsPerPage));
  }

  onSubjectChange(subjectId: string) {
    this.categoriesService.getBySubjectId(subjectId)
      .subscribe(categories => {
        this.categories = categories;
      });
  }

  onCategoryChange(categoryId: string) {
    this.testsService.getByCategoryId(categoryId)
      .subscribe(tests => {
        this.tests = tests;
      });
  }

  confirmDelete(testId: string) {
    const dialogRef = this.dialogService.confirm({
      title: 'Видалити тест?',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.delete(testId);
      }
    });
  }

  delete(testId: string) {
    return this.testsService.delete(testId)
      .subscribe(() => {
        this.tests = this.tests.filter(test => test._id !== testId);

        this.snackBar.open('Тест видалено!', 'OK', {
          duration: 3000,
        });
      });
  }
}
