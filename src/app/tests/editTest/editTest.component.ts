import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';

import { Test } from '../../../common/models/test';
import { Subject } from '../../../common/models/subject';

import { TestService } from '../../../common/services/test.service';

import { MatSnackBar } from '@angular/material';

import { cloneDeep } from 'lodash';

@Component({
  templateUrl: './editTest.component.html'
})
export class EditTestComponent implements OnInit {
  id: string;
  originalTest: Test;
  subjects: Subject[];
  test: Test;
  testForm: NgForm;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private testService: TestService,
    public snackBar: MatSnackBar
  ) {
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: { subjects: Subject[], test: Test }) => {
        this.originalTest = data.test;
        this.copyOriginalTest();
        this.subjects = data.subjects;
      });

    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  submit() {
    return this.testService.update(this.id, this.test)
      .then(() => {
        this.snackBar.open('Тест оновлено!', 'OK', {
          duration: 3000,
        });

        this.goBack();
      });
  }

  goBack() {
    this.location.back();
  }

  copyOriginalTest() {
    this.test = cloneDeep(this.originalTest);
  }
}
