import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';

import { CategoriesService } from './services/resources/categories.service';
import { SubjectsService } from './services/resources/subjects.service';
import { TestsService } from './services/resources/tests.service';
import { DialogService } from './services/dialog.service';

import { CategoryResolver } from './resolvers/category.resolver';
import { CategoriesResolver } from './resolvers/categories.resolver';
import { SubjectResolver } from './resolvers/subject.resolver';
import { SubjectsResolver } from './resolvers/subjects.resolver';
import { TestResolver } from './resolvers/test.resolver';
import { TestsResolver } from './resolvers/tests.resolver';

import { BackButtonComponent } from './components/backButton/backButton.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './components/pageNotFound/pageNotFound.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { WelcomePageComponent } from './components/welcomePage/welcomePage.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { TextEditorComponent } from './components/text-editor/text-editor.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    RouterModule,
  ],
  declarations: [
    BackButtonComponent,
    ConfirmDialogComponent,
    FooterComponent,
    PageNotFoundComponent,
    ToolbarComponent,
    WelcomePageComponent,
    TextEditorComponent,
  ],
  entryComponents: [
    ConfirmDialogComponent,
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,

    BackButtonComponent,
    ConfirmDialogComponent,
    FooterComponent,
    PageNotFoundComponent,
    ToolbarComponent,
    WelcomePageComponent,
    TextEditorComponent,
  ],
  providers: [
    CategoriesService,
    SubjectsService,
    TestsService,
    DialogService,

    CategoryResolver,
    CategoriesResolver,
    SubjectResolver,
    SubjectsResolver,
    TestResolver,
    TestsResolver,
  ],
})
export class SharedModule {

}
