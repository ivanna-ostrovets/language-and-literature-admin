import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Subject } from '../../../common/models/subject';

import { SubjectService } from '../../../common/services/subject.service';

import { MdSnackBar } from '@angular/material';

@Component({
  templateUrl: './subjectForm.component.html'
})
export class SubjectFormComponent implements OnInit, OnDestroy {
  id: string;
  private sub: any;

  subject: Subject = new Subject();

  constructor(
    private subjectService: SubjectService,
    private route: ActivatedRoute,
    private location: Location,
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

  cancel() {
    this.location.back();
  }

  submit(form: any) {
    if (this.id) {
      return this.subjectService.update(this.id, this.subject)
        .then(() => {
          this.snackBar.open('Предмет оновлено!', 'OK', {
            duration: 3000,
          });

          this.cancel();
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
