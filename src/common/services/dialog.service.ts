import { Component, Inject, Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

interface DialogOptions {
  title?: string;
  message?: string;
  okLabel?: string;
  cancelLabel?: string;
}

@Injectable()
export class DialogService {
  constructor(private dialog: MatDialog) {
  }

  confirm(options: DialogOptions) {
    return this.dialog.open(ConfirmDialogComponent, { data: options });
  }
}


@Component({
  template: `
    <h3 md-dialog-title>{{ data.title }}</h3>

    <md-dialog-content>
      <p>{{ data.message }}</p>
    </md-dialog-content>

    <md-dialog-actions fxLayout="row" fxLayoutAlign="end">
      <button md-button
              (click)="dialogRef.close(false)"
              color="primary">
        {{ data.cancelLabel || 'Ні' }}
      </button>
      <button md-button
              (click)="dialogRef.close(true)"
              color="primary">
        {{ data.okLabel || 'Так' }}
      </button>
    </md-dialog-actions>
  `
})
export class ConfirmDialogComponent {
  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }
}
