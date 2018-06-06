import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatIconModule,
  MatRippleModule,
  MatTooltipModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
    MatTooltipModule
  ],
  declarations: [],
  providers: [],
  exports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
    MatTooltipModule
  ]
})
export class SharedModule { }