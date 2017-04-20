import { Component, OnInit } from '@angular/core';

import { Category } from '../../models/category';
import { Subject } from '../../models/subject';

import { CategoryService } from '../../services/category.service';
import { SubjectService } from '../../services/subject.service';

import { MdSnackBar } from '@angular/material';

@Component({
  templateUrl: './categoriesList.component.html',
  styleUrls: ['./categoriesList.component.scss']
})
export class CategoriesListComponent implements OnInit {
  id: string;
  private sub: any;

  categories: Category[] = [];
  subjects: Subject[] = [];
  subject: Subject = new Subject();
  private _allCategories: Category[];

  constructor(
    private categoryService: CategoryService,
    private subjectService: SubjectService,
    public snackBar: MdSnackBar
  ) {
  }

  ngOnInit() {
    this.subjectService.getAll()
      .then(subjects => {
      this.subjects = subjects;
    });

    this.categoryService.getAll()
      .then(categories => {
        this._allCategories = categories;
      });
  }

  onSubjectChange(subjectId: string) {
    this.categories = this._allCategories.filter(category => category.subject === subjectId);
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
