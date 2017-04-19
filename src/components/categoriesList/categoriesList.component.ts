import { Component, OnInit } from '@angular/core';

import { Category } from '../../models/category';
import { Subject } from '../../models/subject';

import { CategoryService } from '../../services/category.service';
import { SubjectService } from '../../services/subject.service';

@Component({
  templateUrl: './categoriesList.component.html',
  styleUrls: ['./categoriesList.component.scss']
})
export class CategoriesListComponent implements OnInit {
  categories: Category[] = [];
  subjects: Subject[] = [];
  subject: Subject = new Subject();

  constructor(
    private categoryService: CategoryService,
    private subjectService: SubjectService
  ) {
  }

  ngOnInit() {
    this.subjectService.getAll().then(subjects => {
      this.subjects = subjects;
    });
  }

  delete(categoryId: string) {

  }
}
