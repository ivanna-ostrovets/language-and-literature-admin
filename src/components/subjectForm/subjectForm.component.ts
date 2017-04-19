import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subject } from '../../models/subject';

import { SubjectService } from '../../services/subject.service';
import { SubmitService } from '../../services/submit.service';

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
    private submitService: SubmitService,
    private route: ActivatedRoute
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
        form.reset();
        this.submitService.openSnackBar('Предмет додано!');
      });
  }
}
