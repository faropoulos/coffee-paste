import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollbarModule } from 'ngx-scrollbar';

import {
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatListModule,
  MatMenuModule,
  MatGridListModule,
  MatInputModule,
  MatCheckboxModule,
  MatProgressBarModule,
  MatChipsModule,
  MatTooltipModule,
  MatDatepickerModule,
  MatSelectModule,
  MatNativeDateModule,
  MatDialogModule,
  MatTableModule,
  MatSortModule,
  MatButtonToggleModule,
  MatProgressSpinnerModule,
  MatTabsModule,
  MatCardModule,
  MatRippleModule,
  MatSlideToggleModule,
  MatSnackBarModule
} from '@angular/material';

import * as Components from '@coffee-shared/components';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    MatGridListModule,
    MatInputModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatChipsModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatCardModule,
    MatRippleModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    ScrollbarModule
  ],
  declarations: [
    Components.AppAvatarComponent
  ],
  providers: [],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    MatGridListModule,
    MatInputModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatChipsModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatCardModule,
    MatRippleModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    ScrollbarModule
  ]
})
export class SharedModule { }