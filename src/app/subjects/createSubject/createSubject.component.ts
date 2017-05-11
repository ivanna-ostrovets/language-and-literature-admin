import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Subject } from '../../../common/models/subject';

import { SubjectService } from '../../../common/services/subject.service';

import { MdSnackBar } from '@angular/material';

@Component({
  templateUrl: './createSubject.component.html'
})
export class CreateSubjectComponent {
  subjectForm: NgForm;
  subject: Subject = new Subject();

  constructor(
    private subjectService: SubjectService,
    public snackBar: MdSnackBar
  ) {
  }

  submit() {
    return this.subjectService.create(this.subject)
      .then(() => {
        this.subject = new Subject();

        this.snackBar.open('Предмет додано!', 'OK', {
          duration: 3000,
        });

        this.subjectForm.reset();
      });
  }
}
