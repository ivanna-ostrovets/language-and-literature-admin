import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { MatSnackBar } from '@angular/material';

import { SubjectsService } from '../../../shared/services/resources/subjects.service';
import { Subject } from '../../../shared/models/subject.model';

@Component({
  templateUrl: './createSubject.component.html',
})
export class CreateSubjectComponent {
  subjectForm: NgForm;
  subject: Subject = new Subject();

  constructor(private subjectsService: SubjectsService,
              public snackBar: MatSnackBar) {
  }

  submit() {
    return this.subjectsService.create(this.subject)
      .subscribe(() => {
        this.subject = new Subject();

        this.snackBar.open('Предмет додано!', 'OK', {
          duration: 3000,
        });

        this.subjectForm.reset();
      });
  }
}
