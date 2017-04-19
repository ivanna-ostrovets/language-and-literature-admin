import { Injectable } from '@angular/core';
import { MdSnackBar } from '@angular/material';


@Injectable()
export class SubmitService {
  constructor(public snackBar: MdSnackBar) {}

  openSnackBar(message: string, action: string = '', duration: number = 3000) {
    this.snackBar.open(message, action, {
      duration,
    });
  }
}
