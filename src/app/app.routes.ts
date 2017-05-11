import { CategoriesListComponent } from '../components/categoriesList/categoriesList.component';
import { PageNotFoundComponent } from '../components/pageNotFound/pageNotFound.component';
import { SubjectFormComponent } from '../components/subjectForm/subjectForm.component';
import { SubjectsListComponent } from '../components/subjectsList/subjectsList.component';
import { TestFormComponent } from '../components/testForm/testForm.component';
import { TestsListComponent } from '../components/testsList/testsList.component';
import { WelcomePageComponent } from '../components/welcomePage/welcomePage.component';
import { CreateCategoryComponent } from '../components/createCategory/createCategory.component';
import { EditCategoryComponent } from '../components/editCategory/editCategory.component';

import { CategoryResolver } from '../services/resolvers/categoryResolver.service';
import { SubjectsResolver } from '../services/resolvers/subjectsResolver.service';

export const appRoutes =  [
  { path: '', component: WelcomePageComponent },
  {
    path: 'categories',
    children: [
      {
        path: '',
        component: CategoriesListComponent,
        resolve: {
          subjects: SubjectsResolver
        }
      },
      {
        path: ':id/edit',
        component: EditCategoryComponent,
        resolve: {
          category: CategoryResolver,
          subjects: SubjectsResolver
        }
      },
      {
        path: 'create',
        component: CreateCategoryComponent,
        resolve: {
          subjects: SubjectsResolver
        }
      },
    ]
  },
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
  },
  {
    path: 'tests',
    children: [
      { path: '', component: TestsListComponent },
      { path: ':id/edit', component: TestFormComponent },
      { path: 'create', component: TestFormComponent },
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];
