import { Component, OnInit } from '@angular/core';

import { Category } from '../../models/category';
import { Subject } from '../../models/subject';
import { Test } from '../../models/test';

import { CategoryService } from '../../services/category.service';
import { SubjectService } from '../../services/subject.service';
import { TestService } from '../../services/test.service';
import { DialogService } from '../../services/dialog.service';

import { MdSnackBar } from '@angular/material';

import * as _ from 'lodash';

@Component({
  templateUrl: './testsList.component.html',
  styleUrls: ['./testsList.component.scss']
})
export class TestsListComponent implements OnInit {
  tests: Test[] = [];
  categories: Category[] = [];
  subjects: Subject[] = [];
  subject: string;
  category: string;

  constructor(
    private categoryService: CategoryService,
    private subjectService: SubjectService,
    private testService: TestService,
    private dialogService: DialogService,
    public snackBar: MdSnackBar
  ) {
  }

  ngOnInit() {
    this.subjectService.getAll()
      .then(subjects => {
        this.subjects = subjects;
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
