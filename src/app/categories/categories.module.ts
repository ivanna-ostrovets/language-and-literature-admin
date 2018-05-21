import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';

import { CategoryResolver } from '../../shared/resolvers/category.resolver';
import { SubjectsResolver } from '../../shared/resolvers/subjects.resolver';
import { CategoriesListComponent } from './categoriesList/categoriesList.component';
import { CreateCategoryComponent } from './createCategory/createCategory.component';
import { EditCategoryComponent } from './editCategory/editCategory.component';
import { CategoryFormComponent } from './categoryForm/categoryForm.component';

const categoriesRoutes: Routes = [
  {
    path: 'categories',
    children: [
      {
        path: '',
        component: CategoriesListComponent,
        resolve: { subjects: SubjectsResolver },
      },
      {
        path: ':id/edit',
        component: EditCategoryComponent,
        resolve: {
          category: CategoryResolver,
          subjects: SubjectsResolver,
        },
      },
      {
        path: 'create',
        component: CreateCategoryComponent,
        resolve: { subjects: SubjectsResolver },
      },
    ],
  },
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(categoriesRoutes),
  ],
  declarations: [
    CategoriesListComponent,
    CreateCategoryComponent,
    EditCategoryComponent,
    CategoryFormComponent,
  ],
})
export class CategoriesModule {
}
