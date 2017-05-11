import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Category } from '../../../common/models/category';
import { Subject } from '../../../common/models/subject';

@Component({
  selector: 'llta-category-form',
  templateUrl: './categoryForm.component.html'
})
export class CategoryFormComponent implements OnInit {
  @ViewChild('categoryForm') categoryForm: NgForm;
  @Input() category: Category;
  @Input() subjects: Subject[];
  @Output() formEmitter: EventEmitter<NgForm> = new EventEmitter<NgForm>();

  ngOnInit() {
    this.formEmitter.emit(this.categoryForm);
  }
}
