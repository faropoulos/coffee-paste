import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  LoginComponent,
  ShellComponent,
  PageNotFoundComponent
} from '@coffee-core/components';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [ ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
