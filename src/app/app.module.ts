import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { CategoriesModule } from './categories/categories.module';
import { SubjectsModule } from './subjects/subjects.module';
import { TestsModule } from './tests/tests.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from '../shared/components/pageNotFound/pageNotFound.component';
import { WelcomePageComponent } from '../shared/components/welcomePage/welcomePage.component';

const appRoutes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    SharedModule,
    CategoriesModule,
    SubjectsModule,
    TestsModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {

}
