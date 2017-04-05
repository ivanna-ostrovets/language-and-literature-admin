import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';

import { CategoriesListComponent } from '../components/categoriesList/categoriesList.component';
import { CategoryFormComponent } from '../components/categoryForm/categoryForm.component';
import { FooterComponent } from '../components/footer/footer.component';
import { PageNotFoundComponent } from '../components/pageNotFound/pageNotFound.component';
import { TestFormComponent } from '../components/testForm/testForm.component';
import { TestsListComponent } from '../components/testsList/testsList.component';
import { ToolbarComponent } from '../components/toolbar/toolbar.component';
import { WelcomePageComponent } from '../components/welcomePage/welcomePage.component';

import { appRoutes } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
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
    TestFormComponent,
    TestsListComponent,
    ToolbarComponent,
    WelcomePageComponent,
  ],
  bootstrap: [
    AppComponent,
    FooterComponent,
    ToolbarComponent
  ]
})
export class AppModule {

}
