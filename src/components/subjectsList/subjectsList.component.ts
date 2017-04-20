import { Component, OnInit } from '@angular/core';

import { Subject } from '../../models/subject';

import { SubjectService } from '../../services/subject.service';

import { MdSnackBar } from '@angular/material';

@Component({
  templateUrl: './subjectsList.component.html',
  styleUrls: ['./subjectsList.component.scss']
})
export class SubjectsListComponent implements OnInit {
  subjects: Subject[] = [];

  constructor(
    private subjectService: SubjectService,
    public snackBar: MdSnackBar
  ) {
  }

  ngOnInit() {
    this.subjectService.getAll().then(subjects => {
      this.subjects = subjects;
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
