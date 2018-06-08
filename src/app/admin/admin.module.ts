import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@coffee-shared/shared.module';

import { AdminRoutingModule } from './admin-routing.module';

import * as Components from './components';
import * as Services from './services';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ],
  declarations: [
    Components.AdminCompaniesComponent
  ], 
  providers: [
    Services.AdminCompaniesService
  ]
})
export class AdminModule { }
