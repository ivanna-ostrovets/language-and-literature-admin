import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppCommonModule } from '../common/common.module';
import { CategoriesModule } from './categories/categories.module';
import { SubjectsModule } from './subjects/subjects.module';
import { TestsModule } from './tests/tests.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from '../common/components/pageNotFound/pageNotFound.component';
import { WelcomePageComponent } from '../common/components/welcomePage/welcomePage.component';

const appRoutes: Routes =  [
  { path: '', component: WelcomePageComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    AppCommonModule,
    CategoriesModule,
    SubjectsModule,
    TestsModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {

}
