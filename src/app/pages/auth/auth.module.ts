import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {AuthRoutingModule} from "./auth-routing.module";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import { SignupComponent } from './signup/signup.component';
import {StoreModule} from "@ngrx/store";
import * as fromAuth from './core/store/auth.reducer';
import {EffectsModule} from "@ngrx/effects";
import {AuthEffects} from "./core/store/auth.effects";
import {AuthService} from "./core/services/auth.service";
import {AuthGuard} from "./core/services/auth.guard";
import {MatSnackBarModule} from "@angular/material/snack-bar";


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatSnackBarModule,
        ReactiveFormsModule,
        StoreModule.forFeature(fromAuth.featureKey, fromAuth.authReducer),
        EffectsModule.forFeature([AuthEffects])
    ]
})
export class AuthModule {
  static forRoot(): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [
        AuthService,
        AuthGuard
      ]
    }
  }
}
