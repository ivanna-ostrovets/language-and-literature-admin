import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';

import { SubjectResolver } from '../../shared/resolvers/subject.resolver';
import { SubjectsResolver } from '../../shared/resolvers/subjects.resolver';

import { CreateSubjectComponent } from './createSubject/createSubject.component';
import { EditSubjectComponent } from './editSubject/editSubject.component';
import { SubjectFormComponent } from './subjectForm/subjectForm.component';
import { SubjectsListComponent } from './subjectsList/subjectsList.component';

const subjectsRoutes: Routes = [
  {
    path: 'subjects',
    children: [
      {
        path: '',
        component: SubjectsListComponent,
        resolve: { subjects: SubjectsResolver },
      },
      {
        path: ':id/edit',
        component: EditSubjectComponent,
        resolve: { subject: SubjectResolver },
      },
      { path: 'create', component: CreateSubjectComponent },
    ],
  },
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(subjectsRoutes),
  ],
  declarations: [
    CreateSubjectComponent,
    EditSubjectComponent,
    SubjectFormComponent,
    SubjectsListComponent,
  ],
})
export class SubjectsModule {

}
