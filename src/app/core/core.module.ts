import { environment } from '@environments/environment';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { SharedModule } from '@coffee-shared/shared.module';

import * as Components from '@coffee-core/components';
import * as Services from '@coffee-core/services';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase, 'coffee-paste'),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule
  ],
  declarations: [
    Components.LoginComponent,
    Components.PageNotFoundComponent,
    Components.ShellComponent
  ],
  providers: [
    Services.AuthenticationService
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    Components.LoginComponent,
    Components.PageNotFoundComponent,
    Components.ShellComponent    
  ]
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}