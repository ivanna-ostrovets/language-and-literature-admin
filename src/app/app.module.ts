import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { PageNotFoundComponent } from '../components/pageNotFound/pageNotFound.component';
import { logInFormComponent } from '../components/logInForm/logInForm.component';
import { logInFormComponent } from '../components/createTestForm/createTestForm.component';

import { appRoutes } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
