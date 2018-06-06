import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '@coffee-core/guards';

import {
  AuthComponent,
  ShellComponent,
  PageNotFoundComponent
} from '@coffee-core/components';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'admin',
        loadChildren: '@coffee-admin/admin.module#AdminModule'
      },
    ]
  },
  { path: 'login', component: AuthComponent },
  { path: '**', component: PageNotFoundComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
