import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '@coffee-core/guards';

import {
  AppLoginComponent,
  AppSignUpComponent,
  AppShellComponent,
  DashboardComponent,
  PageNotFoundComponent
} from '@coffee-core/components';

const routes: Routes = [
  {
    path: '',
    component: AppShellComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'admin', loadChildren: '@coffee-admin/admin.module#AdminModule' },
    ],
    canActivate: [ AuthGuard ]
  },
  { path: 'login', component: AppLoginComponent },
  { path: 'signup', component: AppSignUpComponent },
  { path: '**', component: PageNotFoundComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
