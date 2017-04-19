import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Category } from '../../models/category';
import { Subject } from '../../models/subject';

import { CategoryService } from '../../services/category.service';
import { SubjectService } from '../../services/subject.service';

@Component({
  templateUrl: './categoryForm.component.html',
  styleUrls: ['./categoryForm.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CategoryFormComponent implements OnInit, OnDestroy {
  id: string;
  private sub: any;

  category: Category = new Category();
  subjects: Subject[] = [];

  constructor(
    private categoryService: CategoryService,
    private subjectService: SubjectService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.subjectService.getAll().then(subjects => {
      this.subjects = subjects;
    });

    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  submit() {
    this.categoryService.create(this.category)
      .then(() => {
        // TODO: Show toast

        this.category = new Category();
        this.id = '';
      });
  }
}
