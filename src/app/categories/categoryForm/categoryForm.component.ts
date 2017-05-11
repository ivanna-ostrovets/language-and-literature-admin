import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Category } from '../../../common/models/category';
import { Subject } from '../../../common/models/subject';

import { SubjectService } from '../../../common/services/subject.service';

@Component({
  selector: 'llta-category-form',
  templateUrl: './categoryForm.component.html'
})
export class CategoryFormComponent implements OnInit {
  @ViewChild('categoryForm') categoryForm: NgForm;
  @Input() category: Category;
  @Output() formEmitter: EventEmitter<NgForm> = new EventEmitter<NgForm>();

  subjects: Subject[] = [];

  constructor(private subjectService: SubjectService) {
  }

  ngOnInit() {
    this.formEmitter.emit(this.categoryForm);

    this.subjectService.getAll().then(subjects => {
      this.subjects = subjects;
    });
  }
}
