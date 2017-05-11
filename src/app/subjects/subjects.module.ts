import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppCommonModule } from '../../common/common.module';

import { SubjectFormComponent } from './subjectForm/subjectForm.component';
import { SubjectsListComponent } from './subjectsList/subjectsList.component';

import { SubjectsResolver } from '../../common/services/resolvers/subjectsResolver.service';

const subjectsRoutes: Routes =  [
  {
    path: 'subjects',
    children: [
      {
        path: '',
        component: SubjectsListComponent,
        resolve: {
          subjects: SubjectsResolver
        }
      },
      { path: ':id/edit', component: SubjectFormComponent },
      { path: 'create', component: SubjectFormComponent },
    ]
  }
];

@NgModule({
  imports: [
    AppCommonModule,
    RouterModule.forChild(subjectsRoutes)
  ],
  declarations: [
    SubjectFormComponent,
    SubjectsListComponent
  ]
})
export class SubjectsModule {

}
