import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subject } from '../../models/subject';

import { SubjectService } from '../../services/subject.service';

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

  submit() {
    this.subjectService.create(this.subject)
      .then(() => {
        // TODO: Show toast

        this.subject = new Subject();
        this.id = '';
      });
  }
}
