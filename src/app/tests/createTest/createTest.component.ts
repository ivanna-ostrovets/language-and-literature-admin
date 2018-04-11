import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Test } from '../../../common/models/test';
import { Subject } from '../../../common/models/subject';

import { TestService } from '../../../common/services/test.service';

import { MatSnackBar } from '@angular/material';

@Component({
  templateUrl: './createTest.component.html'
})
export class CreateTestComponent implements OnInit {
  subjects: Subject[];
  test: Test = new Test();
  testForm: NgForm;

  constructor(
    private route: ActivatedRoute,
    private testService: TestService,
    public snackBar: MatSnackBar
  ) {
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: { subjects: Subject[] }) => {
        this.subjects = data.subjects;
      });
  }

  submit() {
    return this.testService.create(this.test)
      .then(() => {
        this.test = new Test();

        this.snackBar.open('Тест додано!', 'OK', {
          duration: 3000,
        });

        this.testForm.reset();
      });
  }
}
