import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  templateUrl: './subjectForm.component.html',
  styleUrls: ['./subjectForm.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SubjectFormComponent {
  subject: string;

  onSubmit(): void {
    let subject = {
      id: 'subject_',
      subject: this.subject
    };
  }
}