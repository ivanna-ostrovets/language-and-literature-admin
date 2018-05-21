import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';

import { MatSnackBar } from '@angular/material';

import cloneDeep from 'lodash-es/cloneDeep';

import { TestsService } from '../../../shared/services/resources/tests.service';
import { Test } from '../../../shared/models/test.model';
import { Subject } from '../../../shared/models/subject.model';

@Component({
  templateUrl: './editTest.component.html',
})
export class EditTestComponent implements OnInit {
  id: string;
  originalTest: Test;
  subjects: Subject[];
  test: Test;
  testForm: NgForm;

  constructor(private location: Location,
              private route: ActivatedRoute,
              private testsService: TestsService,
              public snackBar: MatSnackBar) {
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
    return this.testsService.update(this.id, this.test)
      .subscribe(() => {
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
