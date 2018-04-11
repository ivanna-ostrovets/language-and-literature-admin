import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Subject } from '../../../common/models/subject';

import { SubjectService } from '../../../common/services/subject.service';

import { MatSnackBar } from '@angular/material';

import { cloneDeep } from 'lodash';

@Component({
  templateUrl: './editSubject.component.html'
})
export class EditSubjectComponent implements OnInit {
  id: string;
  subjectForm: NgForm;
  subject: Subject;
  originalSubject: Subject;

  constructor(
    private subjectService: SubjectService,
    private route: ActivatedRoute,
    private location: Location,
    public snackBar: MatSnackBar
  ) {
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: { subject: Subject }) => {
        this.originalSubject = data.subject;
        this.copyOriginalSubject();
      });

    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  submit() {
    return this.subjectService.update(this.id, this.subject)
      .then(() => {
        this.snackBar.open('Предмет оновлено!', 'OK', {
          duration: 3000,
        });

        this.goBack();
      });
  }

  goBack() {
    this.location.back();
  }

  copyOriginalSubject() {
    this.subject = cloneDeep(this.originalSubject);
  }
}
