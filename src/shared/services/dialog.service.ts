import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';

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
