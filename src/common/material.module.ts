import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { MatGridListModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatListModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { MatRadioModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatSlideToggleModule } from '@angular/material';
import { MatSnackBarModule } from '@angular/material';
import { MatTabsModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule
  ],
})
export class MaterialModule {
}
