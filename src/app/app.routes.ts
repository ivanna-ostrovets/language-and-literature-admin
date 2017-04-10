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
  { path: 'categories', component: CategoriesListComponent },
  { path: 'categories/:id', component: CategoryFormComponent },
  { path: 'create-category', component: CategoryFormComponent },
  { path: 'subjects', component: SubjectsListComponent },
  { path: 'subjects/:id', component: SubjectFormComponent },
  { path: 'create-subject', component: SubjectFormComponent },
  { path: 'create-test', component: TestFormComponent },
  { path: 'tests', component: TestsListComponent },
  { path: 'tests/:id', component: TestFormComponent },
  { path: '**', component: PageNotFoundComponent }
];