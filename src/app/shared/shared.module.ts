import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule
  ],
  declarations: [],
  providers: [],
  exports: [
    CommonModule,
    MatButtonModule
  ]
})
export class SharedModule { }