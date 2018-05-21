import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MatSnackBar } from '@angular/material';

import range from 'lodash-es/range';

import { SubjectsService } from '../../../shared/services/resources/subjects.service';
import { DialogService } from '../../../shared/services/dialog.service';
import { Subject } from '../../../shared/models/subject.model';

@Component({
  templateUrl: './subjectsList.component.html',
})
export class SubjectsListComponent implements OnInit {
  subjects: Subject[] = [];

  constructor(private subjectsService: SubjectsService,
              private route: ActivatedRoute,
              private dialogService: DialogService,
              public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: { subjects: Subject[] }) => {
        this.subjects = data.subjects;
      });
  }

  getPagingRange(num: number): number[] {
    const itemsPerPage = 7;

    return range(0, Math.ceil(num / itemsPerPage));
  }

  confirmDelete(subjectId: string) {
    const dialogRef = this.dialogService.confirm({
      title: 'Видалити предмет?',
      message: 'Зауважте, що пов\'язані теми та тести також будуть видалені!',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.delete(subjectId);
      }
    });
  }

  delete(subjectId: string) {
    return this.subjectsService.delete(subjectId)
      .subscribe(() => {
        this.subjects = this.subjects.filter(subject => subject._id !== subjectId);

        this.snackBar.open('Предмет видалено!', 'OK', {
          duration: 3000,
        });
      });
  }
}
