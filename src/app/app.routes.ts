import { PageNotFoundComponent } from '../components/pageNotFound/pageNotFound.component';
import { logInFormComponent } from '../components/logInForm/logInForm.component';
import { logInFormComponent } from '../components/createTestForm/createTestForm.component';

export const appRoutes =  [
  { path: 'login', component: LoginComponent },
  { path: 'create-test', component: CreateTestFormComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
