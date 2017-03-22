import { PageNotFoundComponent } from '../components/pageNotFound/pageNotFound.component';
import { LogInFormComponent } from '../components/logInForm/logInForm.component';
import { CreateTestFormComponent } from '../components/createTestForm/createTestForm.component';

export const appRoutes =  [
  { path: 'login', component: LogInFormComponent },
  { path: 'create-test', component: CreateTestFormComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
