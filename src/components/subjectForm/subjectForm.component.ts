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
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  submit(form: any) {
    this.subjectService.create(this.subject)
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
