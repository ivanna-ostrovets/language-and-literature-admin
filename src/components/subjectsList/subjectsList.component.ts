import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subject } from '../../models/subject';

import { SubjectService } from '../../services/subject.service';
import { DialogService } from '../../services/dialog.service';

import { MdSnackBar } from '@angular/material';

import * as _ from 'lodash';

@Component({
  templateUrl: './subjectsList.component.html'
})
export class SubjectsListComponent implements OnInit {
  subjects: Subject[] = [];

  constructor(
    private subjectService: SubjectService,
    private route: ActivatedRoute,
    private dialogService: DialogService,
    public snackBar: MdSnackBar
  ) {
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: { subjects: Subject[] }) => {
        this.subjects = data.subjects;
      });
  }

  getPagingRange(num: number): number[] {
    return _.range(0, Math.ceil(num / 7));
  }

  confirmDelete(subjectId: string) {
    const dialogRef = this.dialogService.confirm({
      title: 'Видалити предмет?',
      message: 'Зауважте, що пов\'язані категорії та тести також будуть видалені!'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.delete(subjectId);
      }
    });
  }

  delete(subjectId: string) {
    return this.subjectService.remove(subjectId)
      .then(() => {
        this.subjects = this.subjects.filter(subject => subject._id !== subjectId);

        this.snackBar.open('Предмет видалено!', 'OK', {
          duration: 3000,
        });
      });
  }
}
