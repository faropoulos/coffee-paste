import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '@coffee-shared/shared.module';

import {
  TestComponent
} from './components';

const routes: Routes = [
  { path: '', component: TestComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
