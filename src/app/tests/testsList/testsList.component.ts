import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Category } from '../../../common/models/category';
import { Subject } from '../../../common/models/subject';
import { Test } from '../../../common/models/test';

import { CategoryService } from '../../../common/services/category.service';
import { TestService } from '../../../common/services/test.service';
import { DialogService } from '../../../common/services/dialog.service';

import { MdSnackBar } from '@angular/material';

import { range } from 'lodash';

@Component({
  templateUrl: './testsList.component.html'
})
export class TestsListComponent implements OnInit {
  tests: Test[] = [];
  categories: Category[] = [];
  subjects: Subject[] = [];
  subject: string;
  category: string;

  constructor(
    private categoryService: CategoryService,
    private dialogService: DialogService,
    private route: ActivatedRoute,
    private testService: TestService,
    public snackBar: MdSnackBar
  ) {
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: { subjects: Subject[] }) => {
        this.subjects = data.subjects;
      });
  }

  getPagingRange(num: number): number[] {
    return range(0, Math.ceil(num / 7));
  }

  onSubjectChange(subjectId: string) {
    this.categoryService.getAll(subjectId)
      .then(categories => {
        this.categories = categories;
      });
  }

  onCategoryChange(categoryId: string) {
    this.testService.getAll(categoryId)
      .then(tests => {
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
    return this.testService.remove(testId)
      .then(() => {
        this.tests = this.tests.filter(test => test._id !== testId);

        this.snackBar.open('Тест видалено!', 'OK', {
          duration: 3000,
        });
      });
  }
}
