import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';

import { CategoriesListComponent } from '../components/categoriesList/categoriesList.component';
import { CategoryFormComponent } from '../components/categoryForm/categoryForm.component';
import { FooterComponent } from '../components/footer/footer.component';
import { PageNotFoundComponent } from '../components/pageNotFound/pageNotFound.component';
import { SubjectFormComponent } from '../components/subjectForm/subjectForm.component';
import { SubjectsListComponent } from '../components/subjectsList/subjectsList.component';
import { TestFormComponent } from '../components/testForm/testForm.component';
import { TestsListComponent } from '../components/testsList/testsList.component';
import { ToolbarComponent } from '../components/toolbar/toolbar.component';
import { WelcomePageComponent } from '../components/welcomePage/welcomePage.component';
import { ConfirmDialogComponent } from '../services/dialog.service';

import { CategoryService } from '../services/category.service';
import { SubjectService } from '../services/subject.service';
import { TestService } from '../services/test.service';
import { DialogService } from '../services/dialog.service';

import { appRoutes } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    CategoriesListComponent,
    CategoryFormComponent,
    FooterComponent,
    PageNotFoundComponent,
    SubjectFormComponent,
    SubjectsListComponent,
    TestFormComponent,
    TestsListComponent,
    ToolbarComponent,
    WelcomePageComponent,
    ConfirmDialogComponent
  ],
  entryComponents: [
    ConfirmDialogComponent
  ],
  providers: [
    CategoryService,
    SubjectService,
    TestService,
    DialogService
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule {

}
