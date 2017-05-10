import { CategoriesListComponent } from '../components/categoriesList/categoriesList.component';
import { CategoryFormComponent } from '../components/categoryForm/categoryForm.component';
import { PageNotFoundComponent } from '../components/pageNotFound/pageNotFound.component';
import { SubjectFormComponent } from '../components/subjectForm/subjectForm.component';
import { SubjectsListComponent } from '../components/subjectsList/subjectsList.component';
import { TestFormComponent } from '../components/testForm/testForm.component';
import { TestsListComponent } from '../components/testsList/testsList.component';
import { WelcomePageComponent } from '../components/welcomePage/welcomePage.component';

export const appRoutes =  [
  { path: '', component: WelcomePageComponent },
  {
    path: 'categories',
    children: [
      { path: '', component: CategoriesListComponent },
      { path: ':id/edit', component: CategoryFormComponent },
      { path: 'create', component: CategoryFormComponent },
    ]
  },
  {
    path: 'subjects',
    children: [
      { path: '', component: SubjectsListComponent },
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
