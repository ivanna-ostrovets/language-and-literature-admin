import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Category } from '../../models/category';
import { Subject } from '../../models/subject';

import { CategoryService } from '../../services/category.service';
import { SubjectService } from '../../services/subject.service';

import { MdSnackBar } from '@angular/material';

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
    private route: ActivatedRoute,
    private location: Location,
    public snackBar: MdSnackBar
  ) {
  }

  ngOnInit() {
    this.subjectService.getAll().then(subjects => {
      this.subjects = subjects;
    });

    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    if (this.id) {
      this.categoryService.get(this.id).then(category => {
        this.category = category;
      });
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  cancel() {
    this.location.back();
  }

  submit(form: any) {
    if (this.id) {
      return this.categoryService.update(this.id, this.category)
        .then(() => {
          this.snackBar.open('Категорію оновлено!', 'OK', {
            duration: 3000,
          });

          this.cancel();
        });
    }

    return this.categoryService.create(this.category)
      .then(() => {
        this.category = new Category();
        this.id = '';

        this.snackBar.open('Категорію додано!', 'OK', {
          duration: 3000,
        });

        form.reset();
      });
  }
}
