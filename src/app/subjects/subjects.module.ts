import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppCommonModule } from '../../common/common.module';

import { CreateSubjectComponent } from './createSubject/createSubject.component';
import { EditSubjectComponent } from './editSubject/editSubject.component';
import { SubjectFormComponent } from './subjectForm/subjectForm.component';
import { SubjectsListComponent } from './subjectsList/subjectsList.component';

import { SubjectResolver } from '../../common/services/resolvers/subjectResolver.service';
import { SubjectsResolver } from '../../common/services/resolvers/subjectsResolver.service';

const subjectsRoutes: Routes =  [
  {
    path: 'subjects',
    children: [
      {
        path: '',
        component: SubjectsListComponent,
        resolve: { subjects: SubjectsResolver }
      },
      {
        path: ':id/edit',
        component: EditSubjectComponent,
        resolve: { subject: SubjectResolver }
      },
      { path: 'create', component: CreateSubjectComponent }
    ]
  }
];

@NgModule({
  imports: [
    AppCommonModule,
    RouterModule.forChild(subjectsRoutes)
  ],
  declarations: [
    CreateSubjectComponent,
    EditSubjectComponent,
    SubjectFormComponent,
    SubjectsListComponent
  ]
})
export class SubjectsModule {

}
