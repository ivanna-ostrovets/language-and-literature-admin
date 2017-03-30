import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'dialog-create-category',
  templateUrl: './dialog-create-category.html',
})
export class dialogCreateCategory {
  constructor(public dialogRef: MdDialogRef<dialogCreateCategory>) {}
}
