import { Component, OnInit } from '@angular/core';

import { Subject } from '../../models/subject';

import { SubjectService } from '../../services/subject.service';

@Component({
  templateUrl: './subjectsList.component.html',
  styleUrls: ['./subjectsList.component.scss']
})
export class SubjectsListComponent implements OnInit {
  subjects: Subject[] = [];

  constructor(private subjectService: SubjectService) {
  }

  ngOnInit() {
    this.subjectService.getAll().then(subjects => {
      this.subjects = subjects;
    });
  }

  delete(subjectId: string) {

  }
}
