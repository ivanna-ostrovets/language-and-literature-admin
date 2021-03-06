import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';

import { CategoryService } from './services/category.service';
import { DialogService } from './services/dialog.service';
import { SubjectService } from './services/subject.service';
import { TestService } from './services/test.service';

import { CategoryResolver } from './services/resolvers/categoryResolver.service';
import { SubjectResolver } from './services/resolvers/subjectResolver.service';
import { SubjectsResolver } from './services/resolvers/subjectsResolver.service';
import { TestResolver } from './services/resolvers/testResolver.service';

import { BackButtonComponent } from './components/backButton/backButton.component';
import { ConfirmDialogComponent } from './services/dialog.service';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './components/pageNotFound/pageNotFound.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { WelcomePageComponent } from './components/welcomePage/welcomePage.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule
  ],
  declarations: [
    BackButtonComponent,
    ConfirmDialogComponent,
    FooterComponent,
    PageNotFoundComponent,
    ToolbarComponent,
    WelcomePageComponent
  ],
  entryComponents: [
    ConfirmDialogComponent
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
    WelcomePageComponent
  ],
  providers: [
    CategoryService,
    DialogService,
    SubjectService,
    TestService,

    CategoryResolver,
    SubjectResolver,
    SubjectsResolver,
    TestResolver
  ]
})
export class AppCommonModule {

}
