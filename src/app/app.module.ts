import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppRoutingModule} from "./app-routing.module";
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {EffectsModule} from "@ngrx/effects";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./core/interceptors/auth.interceptor";
import { LoaderComponent } from './ui/loader/loader.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {AuthGuard} from "./pages/auth/core/services/auth.guard";
import {AuthModule} from "./pages/auth/auth.module";
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import {reducers} from "./core/store/app.reducer";
import { NavbarComponent } from './ui/navbar/navbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { LayoutComponent } from './ui/layout/layout.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatListModule} from "@angular/material/list";

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    NavbarComponent,
    LayoutComponent,
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
    StoreRouterConnectingModule.forRoot(),
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatExpansionModule,
    MatListModule
  ],
  providers: [AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
