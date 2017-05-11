import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppCommonModule } from '../../common/common.module';

import { MatchingQuestionComponent } from './testForm/matchingQuestion/matchingQuestion.component';
import { SimpleQuestionComponent } from './testForm/simpleQuestion/simpleQuestion.component';
import { TestFormComponent } from './testForm/testForm.component';
import { TestsListComponent } from './testsList/testsList.component';

import { SubjectsResolver } from '../../common/services/resolvers/subjectsResolver.service';

const testsRoutes: Routes =  [
  {
    path: 'tests',
    children: [
      {
        path: '',
        component: TestsListComponent,
        resolve: { subjects: SubjectsResolver }
      },
      { path: ':id/edit', component: TestFormComponent },
      { path: 'create', component: TestFormComponent },
    ]
  },
];

@NgModule({
  imports: [
    AppCommonModule,
    RouterModule.forChild(testsRoutes)
  ],
  declarations: [
    MatchingQuestionComponent,
    SimpleQuestionComponent,
    TestFormComponent,
    TestsListComponent
  ]
})
export class TestsModule {

}
