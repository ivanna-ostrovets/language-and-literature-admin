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
    <h3 mat-dialog-title>{{ data.title }}</h3>

    <mat-dialog-content>
      <p>{{ data.message }}</p>
    </mat-dialog-content>

    <mat-dialog-actions fxLayout="row" fxLayoutAlign="end">
      <button mat-button
              (click)="dialogRef.close(false)"
              color="primary">
        {{ data.cancelLabel || 'Ні' }}
      </button>
      <button mat-button
              (click)="dialogRef.close(true)"
              color="primary">
        {{ data.okLabel || 'Так' }}
      </button>
    </mat-dialog-actions>
  `
})
export class ConfirmDialogComponent {
  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }
}
