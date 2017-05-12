import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Category } from '../../../common/models/category';
import { Subject } from '../../../common/models/subject';

@Component({
  selector: 'llta-category-form',
  templateUrl: './categoryForm.component.html'
})
export class CategoryFormComponent implements OnInit {
  @ViewChild('categoryForm') categoryForm: NgForm;
  @Input() category: Category;
  @Output() formEmitter: EventEmitter<NgForm> = new EventEmitter<NgForm>();

  subjects: Subject[];

  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.formEmitter.emit(this.categoryForm);

    this.route.data
      .subscribe((data: { subjects: Subject[] }) => {
        this.subjects = data.subjects;
      });
  }
}
