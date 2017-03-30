import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';

import { FooterComponent } from '../components/footer/footer.component';
import { ToolbarComponent } from '../components/toolbar/toolbar.component';
import { PageNotFoundComponent } from '../components/pageNotFound/pageNotFound.component';
import { WelcomePageComponent } from '../components/welcomePage/welcomePage.component';
import { CategoriesListComponent } from '../components/categoriesList/categoriesList.component';
import { TestsListComponent } from '../components/testsList/testsList.component';
import { TestFormComponent } from '../components/testForm/testForm.component';
import { CategoryFormComponent } from '../components/categoryForm/categoryForm.component';

import { appRoutes } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    FooterComponent,
    ToolbarComponent,
    WelcomePageComponent,
    CategoriesListComponent,
    TestsListComponent,
    TestFormComponent,
    CategoryFormComponent,
  ],
  bootstrap: [
    AppComponent,
    FooterComponent,
    ToolbarComponent
  ]
})
export class AppModule {

}
