import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Subject } from '../../../common/models/subject';

@Component({
  selector: 'llta-subject-form',
  templateUrl: './subjectForm.component.html'
})
export class SubjectFormComponent implements OnInit {
  @ViewChild('subjectForm') subjectForm: NgForm;
  @Input() subject: Subject;
  @Output() formEmitter: EventEmitter<NgForm> = new EventEmitter<NgForm>();

  ngOnInit() {
    this.formEmitter.emit(this.subjectForm);
  }
}
