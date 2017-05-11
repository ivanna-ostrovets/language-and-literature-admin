import { NgModule } from '@angular/core';

import { MdButtonModule } from '@angular/material';
import { MdCheckboxModule } from '@angular/material';
import { MdDialogModule } from '@angular/material';
import { MdGridListModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { MdListModule } from '@angular/material';
import { MdMenuModule } from '@angular/material';
import { MdRadioModule } from '@angular/material';
import { MdSelectModule } from '@angular/material';
import { MdSlideToggleModule } from '@angular/material';
import { MdSnackBarModule } from '@angular/material';
import { MdTabsModule } from '@angular/material';
import { MdToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    MdButtonModule,
    MdCheckboxModule,
    MdDialogModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdRadioModule,
    MdSelectModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdTabsModule,
    MdToolbarModule
  ],
  exports: [
    MdButtonModule,
    MdCheckboxModule,
    MdDialogModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdRadioModule,
    MdSelectModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdTabsModule,
    MdToolbarModule
  ],
})
export class MaterialModule {
}
