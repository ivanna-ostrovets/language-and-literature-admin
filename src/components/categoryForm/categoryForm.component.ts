import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  templateUrl: './categoryForm.component.html',
  styleUrls: ['./categoryForm.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CategoryFormComponent {
  category: string;
  subject: string;
  subjects: { value: string, viewValue: string }[] = [
    {value: 'language', viewValue: 'Українська мова'},
    {value: 'literature', viewValue: 'Українська література'}
  ];

  onSubmit(): {} {
    if (this.subject !== undefined) {
      return {
          subject: this.subject,
        category: this.category
      };
    }

    return {
      subject: this.category
    };
  }
}