import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {
  MatButtonModule,
  MatIconModule,
  MatRippleModule,
  MatTooltipModule,
  MatInputModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
    MatTooltipModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  declarations: [],
  providers: [],
  exports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
    MatTooltipModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }