import { PageNotFoundComponent } from '../components/pageNotFound/pageNotFound.component';
import { WelcomePageComponent } from '../components/welcomePage/welcomePage.component';
import { CategoriesListComponent } from '../components/categoriesList/categoriesList.component';
import { TestsListComponent } from '../components/testsList/testsList.component';
import { TestFormComponent } from '../components/testForm/testForm.component';
import { CategoryFormComponent } from '../components/categoryForm/categoryForm.component';

export const appRoutes =  [
  { path: '/', component: WelcomePageComponent },
  { path: '/categories', component: CategoriesListComponent },
  { path: '/categories/:id', component: CategoryFormComponent },
  { path: '/create-category', component: CategoryFormComponent },
  { path: '/tests', component: TestsListComponent },
  { path: '/tests/:id', component: TestFormComponent },
  { path: '/create-test', component: TestFormComponent },
  { path: '**', component: PageNotFoundComponent }
];