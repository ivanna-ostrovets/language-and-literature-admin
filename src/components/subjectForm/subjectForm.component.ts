import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subject } from '../../models/subject';

import { SubjectService } from '../../services/subject.service';

import { MdSnackBar } from '@angular/material';

@Component({
  templateUrl: './subjectForm.component.html',
  styleUrls: ['./subjectForm.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SubjectFormComponent implements OnInit, OnDestroy {
  id: string;
  private sub: any;

  subject: Subject = new Subject();

  constructor(
    private subjectService: SubjectService,
    private route: ActivatedRoute,
    public snackBar: MdSnackBar
  ) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    if (this.id) {
      this.subjectService.get(this.id).then(subject => {
        this.subject = subject;
      });
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  submit(form: any) {
    if (this.id) {
      return this.subjectService.update(this.id, this.subject)
        .then(() => {
          this.snackBar.open('Предмет оновлено!', 'OK', {
            duration: 3000,
          });
        });
    }

    return this.subjectService.create(this.subject)
      .then(() => {
        this.subject = new Subject();
        this.id = '';

        this.snackBar.open('Предмет додано!', 'OK', {
          duration: 3000,
        });

        form.reset();
      });
  }
}
