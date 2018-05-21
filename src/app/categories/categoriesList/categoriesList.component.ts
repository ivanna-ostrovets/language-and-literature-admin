import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MatSnackBar } from '@angular/material';

import range from 'lodash-es/range';

import { CategoriesService } from '../../../shared/services/resources/categories.service';
import { DialogService } from '../../../shared/services/dialog.service';
import { Category } from '../../../shared/models/category.model';
import { Subject } from '../../../shared/models/subject.model';

@Component({
  templateUrl: './categoriesList.component.html',
})
export class CategoriesListComponent implements OnInit {
  categories: Category[] = [];
  subjects: Subject[] = [];
  subject: string;

  constructor(private categoriesService: CategoriesService,
              private route: ActivatedRoute,
              private dialogService: DialogService,
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

  confirmDelete(subjectId: string) {
    const dialogRef = this.dialogService.confirm({
      title: 'Видалити тему?',
      message: 'Зауважте, що пов\'язані тести також будуть видалені!',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.delete(subjectId);
      }
    });
  }

  delete(categoryId: string) {
    return this.categoriesService.delete(categoryId)
      .subscribe(() => {
        this.categories = this.categories.filter(category => category._id !== categoryId);

        this.snackBar.open('Тему видалено!', 'OK', {
          duration: 3000,
        });
      });
  }
}
