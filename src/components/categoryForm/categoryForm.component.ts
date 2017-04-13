import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Category } from '../../models/category';
import { Subject } from '../../models/subject';

import { CategoryService } from '../../services/category.service';
import { SubjectService } from '../../services/subject.service';

@Component({
  templateUrl: './categoryForm.component.html',
  styleUrls: ['./categoryForm.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CategoryFormComponent implements OnInit {
  category: Category = new Category();
  subjects: Subject[] = [];
  // [
  //   {id: 'language', name: 'Українська мова'},
  //   {id: 'literature', name: 'Українська література'}
  // ];

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

  submit() {
    this.categoryService.create(this.category)
      .then(() => {
        // TODO: Show toast

        this.category = new Category();
      });
  }
}
