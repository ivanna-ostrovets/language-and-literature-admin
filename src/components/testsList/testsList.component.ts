import { Component, OnInit } from '@angular/core';

import { Category } from '../../models/category';
import { Subject } from '../../models/subject';
import { Test } from '../../models/test';

import { CategoryService } from '../../services/category.service';
import { SubjectService } from '../../services/subject.service';
import { TestService } from '../../services/test.service';
import { DialogService } from '../../services/dialog.service';

import { MdSnackBar } from '@angular/material';

const range = require('lodash.range');

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
  private _allCategories: Category[];
  private _allTests: Test[];

  constructor(
    private categoryService: CategoryService,
    private subjectService: SubjectService,
    private testService: TestService,
    private dialogService: DialogService,
    public snackBar: MdSnackBar
  ) {
  }

  ngOnInit() {
    this.testService.getAll()
      .then(tests => {
        this._allTests = tests;
      });

    this.subjectService.getAll()
      .then(subjects => {
        this.subjects = subjects;
      });

    this.categoryService.getAll()
      .then(categories => {
        this._allCategories = categories;
      });
  }

  getPagingRange(num: number): number[] {
    return range(0, Math.ceil(num / 7));
  }

  onSubjectChange(subjectId: string) {
    this.categories = this._allCategories.filter(category => category.subject === subjectId);
  }

  onCategoryChange(categoryId: string) {
    this.tests = this._allTests.filter(test => test.category === categoryId);
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
