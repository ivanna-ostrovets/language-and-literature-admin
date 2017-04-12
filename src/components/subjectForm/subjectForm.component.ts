import { Component, ViewEncapsulation } from '@angular/core';

import { Subject } from '../../models/subject';

import { SubjectService } from '../../services/subject.service';

@Component({
  templateUrl: './subjectForm.component.html',
  styleUrls: ['./subjectForm.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SubjectFormComponent {
  constructor(private subjectService: SubjectService) {}

  subject: Subject = new Subject();

  submit() {
    this.subject = new Subject();
  }
}