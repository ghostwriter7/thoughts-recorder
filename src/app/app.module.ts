import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppRoutingModule} from "./app-routing.module";
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {EffectsModule} from "@ngrx/effects";
import {HttpClientModule} from "@angular/common/http";
import { LoaderComponent } from './ui/loader/loader.component';
import { NotificationComponent } from './ui/notification/notification.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {AuthGuard} from "./pages/auth/core/services/auth.guard";
import {AuthModule} from "./pages/auth/auth.module";
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import {reducers} from "./core/store/app.reducer";

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AuthModule.forRoot(),
    AppRoutingModule,
    StoreModule.forRoot(reducers, {}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    EffectsModule.forRoot(),
    MatProgressSpinnerModule,
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
