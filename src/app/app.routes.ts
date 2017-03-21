import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todo/todo.component';
import { PageNotFoundComponent } from '../components/pageNotFound/pageNotFound.component';

export const appRoutes =  [
  { path: 'login', component: LoginComponent },
  { path: 'create-test', component: CreateTestFormComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
