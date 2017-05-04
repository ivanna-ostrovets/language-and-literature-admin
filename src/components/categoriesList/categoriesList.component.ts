import { Component, OnInit } from '@angular/core';

import { Category } from '../../models/category';
import { Subject } from '../../models/subject';

import { CategoryService } from '../../services/category.service';
import { SubjectService } from '../../services/subject.service';
import { DialogService } from '../../services/dialog.service';

import { MdSnackBar } from '@angular/material';

const range = require('lodash.range');
const sortBy = require('lodash.sortby');

@Component({
  templateUrl: './categoriesList.component.html',
  styleUrls: ['./categoriesList.component.scss']
})
export class CategoriesListComponent implements OnInit {
  categories: Category[] = [];
  subjects: Subject[] = [];
  subject: string;
  private _allCategories: Category[];

  constructor(
    private categoryService: CategoryService,
    private subjectService: SubjectService,
    private dialogService: DialogService,
    public snackBar: MdSnackBar
  ) {
  }

  ngOnInit() {
    this.subjectService.getAll()
      .then(subjects => {
      this.subjects = sortBy(subjects, ['name']);
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
    this.categories = sortBy(this._allCategories.filter(category => category.subject === subjectId), ['name']);
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
    return this.categoryService.remove(categoryId)
      .then(() => {
        this.categories = this.categories.filter(category => category._id !== categoryId);

        this.snackBar.open('Категорію видалено!', 'OK', {
          duration: 3000,
        });
      });
  }
}
