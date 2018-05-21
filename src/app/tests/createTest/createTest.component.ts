import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { MatSnackBar } from '@angular/material';

import { TestsService } from '../../../shared/services/resources/tests.service';
import { Test } from '../../../shared/models/test.model';
import { Subject } from '../../../shared/models/subject.model';

@Component({
  templateUrl: './createTest.component.html',
})
export class CreateTestComponent implements OnInit {
  subjects: Subject[];
  test: Test = new Test();
  testForm: NgForm;

  constructor(private route: ActivatedRoute,
              private testsService: TestsService,
              public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: { subjects: Subject[] }) => {
        this.subjects = data.subjects;
      });
  }

  submit() {
    return this.testsService.create(this.test)
      .subscribe(() => {
        this.test = new Test();

        this.snackBar.open('Тест додано!', 'OK', {
          duration: 3000,
        });

        this.testForm.reset();
      });
  }
}
