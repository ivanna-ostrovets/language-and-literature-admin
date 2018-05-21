import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { MatSnackBar } from '@angular/material';

import cloneDeep from 'lodash-es/cloneDeep';

import { SubjectsService } from '../../../shared/services/resources/subjects.service';
import { Subject } from '../../../shared/models/subject.model';

@Component({
  templateUrl: './editSubject.component.html',
})
export class EditSubjectComponent implements OnInit {
  id: string;
  subjectForm: NgForm;
  subject: Subject;
  originalSubject: Subject;

  constructor(private subjectsService: SubjectsService,
              private route: ActivatedRoute,
              private location: Location,
              public snackBar: MatSnackBar) {
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
    return this.subjectsService.update(this.id, this.subject)
      .subscribe(() => {
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
