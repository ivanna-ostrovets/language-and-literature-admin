import { Component, ViewEncapsulation } from '@angular/core';

import { Category } from '../../models/category';
import { Subject } from '../../models/subject';

import { CategoryService } from '../../services/category.service';
import { SubjectService } from '../../services/subject.service';

@Component({
  templateUrl: './categoryForm.component.html',
  styleUrls: ['./categoryForm.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CategoryFormComponent {
  constructor(
    private categoryService: CategoryService,
    private subjectService: SubjectService
  ) {}

  category: Category = new Category();
  subjects: Subject[] = [
    {id: 'language', name: 'Українська мова'},
    {id: 'literature', name: 'Українська література'}
  ];
  active: boolean = true;

  submit() {
    this.category = new Category();
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
}