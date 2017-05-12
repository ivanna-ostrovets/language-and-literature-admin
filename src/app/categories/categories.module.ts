import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppCommonModule } from '../../common/common.module';

import { CategoriesListComponent } from './categoriesList/categoriesList.component';
import { CreateCategoryComponent } from './createCategory/createCategory.component';
import { EditCategoryComponent } from './editCategory/editCategory.component';
import { CategoryFormComponent } from './categoryForm/categoryForm.component';

import { CategoryResolver } from '../../common/services/resolvers/categoryResolver.service';
import { SubjectsResolver } from '../../common/services/resolvers/subjectsResolver.service';

const categoriesRoutes: Routes =  [
  {
    path: 'categories',
    children: [
      {
        path: '',
        component: CategoriesListComponent,
        resolve: { subjects: SubjectsResolver }
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
        resolve: { subjects: SubjectsResolver }
      },
    ]
  }
];

@NgModule({
  imports: [
    AppCommonModule,
    RouterModule.forChild(categoriesRoutes)
  ],
  declarations: [
    CategoriesListComponent,
    CreateCategoryComponent,
    EditCategoryComponent,
    CategoryFormComponent
  ]
})
export class CategoriesModule {
}
