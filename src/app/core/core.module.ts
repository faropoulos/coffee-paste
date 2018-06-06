import { environment } from '@coffee-environments/environment';
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
import * as Guards from '@coffee-core/guards';

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
    Components.AppLoginComponent,
    Components.AppSignUpComponent,
    Components.PageNotFoundComponent,
    Components.AppShellComponent,
    Components.AppMenuComponent,
    Components.DashboardComponent
  ],
  providers: [
    Services.AuthService,
    Guards.AuthGuard
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    Components.AppLoginComponent,
    Components.AppMenuComponent,
    Components.PageNotFoundComponent,
    Components.AppShellComponent,
    Components.AppSignUpComponent,
    Components.DashboardComponent    
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