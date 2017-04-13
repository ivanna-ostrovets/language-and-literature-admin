import { Component, ViewEncapsulation } from '@angular/core';

import { Subject } from '../../models/subject';

import { SubjectService } from '../../services/subject.service';

@Component({
  templateUrl: './subjectForm.component.html',
  styleUrls: ['./subjectForm.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SubjectFormComponent {
  subject: Subject = new Subject();

  constructor(private subjectService: SubjectService) {
  }

  submit() {
    this.subjectService.create(this.subject)
      .then(() => {
        // TODO: Show toast

        this.subject = new Subject();
      });
  }
}
