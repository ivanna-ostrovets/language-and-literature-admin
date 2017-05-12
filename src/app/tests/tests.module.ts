import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppCommonModule } from '../../common/common.module';

import { CreateTestComponent } from './createTest/createTest.component';
import { EditTestComponent } from './editTest/editTest.component';
import { MatchingQuestionComponent } from './testForm/matchingQuestion/matchingQuestion.component';
import { SimpleQuestionComponent } from './testForm/simpleQuestion/simpleQuestion.component';
import { TestFormComponent } from './testForm/testForm.component';
import { TestsListComponent } from './testsList/testsList.component';

import { SubjectsResolver } from '../../common/services/resolvers/subjectsResolver.service';
import { TestResolver } from '../../common/services/resolvers/testResolver.service';

const testsRoutes: Routes =  [
  {
    path: 'tests',
    children: [
      {
        path: '',
        component: TestsListComponent,
        resolve: { subjects: SubjectsResolver }
      },
      {
        path: ':id/edit',
        component: EditTestComponent,
        resolve: {
          subjects: SubjectsResolver,
          test: TestResolver
        }
      },
      {
        path: 'create',
        component: CreateTestComponent,
        resolve: { subjects: SubjectsResolver }
      },
    ]
  },
];

@NgModule({
  imports: [
    AppCommonModule,
    RouterModule.forChild(testsRoutes)
  ],
  declarations: [
    CreateTestComponent,
    EditTestComponent,
    MatchingQuestionComponent,
    SimpleQuestionComponent,
    TestFormComponent,
    TestsListComponent,
  ]
})
export class TestsModule {

}
