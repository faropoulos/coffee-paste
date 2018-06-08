import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {
  MatButtonModule,
  MatIconModule,
  MatRippleModule,
  MatTooltipModule,
  MatInputModule,
  MatMenuModule,
  MatDividerModule
} from '@angular/material';

import * as Components from '@coffee-shared/components';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
    MatTooltipModule,
    MatInputModule,
    MatMenuModule,
    MatDividerModule,
    ReactiveFormsModule
  ],
  declarations: [
    Components.AppAvatarComponent
  ],
  providers: [],
  exports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
    MatTooltipModule,
    MatInputModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatDividerModule,
    Components.AppAvatarComponent
  ]
})
export class SharedModule { }