import { Component } from '@angular/core';

import { MdDialog, MdDialogRef } from '@angular/material';

//import { dialogCreateCategory } from '../dialog-create-category/dialog-create-category.component';

@Component({
  selector: 'llta-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class HeaderComponent {
  subject: string;
  category: string;

  constructor(public dialog: MdDialog) {}

  //openDialog() {
  //  let dialogRef = this.dialog.open(dialogCreateCategory);
  //  dialogRef.afterClosed().subscribe(result => {
  //
  //  });
  //}
}