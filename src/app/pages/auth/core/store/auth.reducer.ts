import {createReducer, on} from "@ngrx/store";
import * as AuthActions from './auth.actions';

export interface AuthState {
  isLoggedIn: boolean;
  isLoggingIn: boolean;
  email?: string;
  accessToken?: string;
  expirationDate?: number;
}

export const featureKey = 'auth';

export const initialState: AuthState = {
  isLoggedIn: false,
  isLoggingIn: false
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.login, (state, action) => ({
    ...state, isLoggingIn: true, email: action.email
  })),
  on(AuthActions.loginSuccess, (state, action) => ({
    ...state, accessToken: action.accessToken, isLoggedIn: true, isLoggingIn: false, expirationDate: action.expirationDate
  })),
  on(AuthActions.loginFailure, (state, action) => ({
    ...state, email: undefined, accessToken: undefined, isLoggedIn: false, isLoggingIn: false
  })),
  on(AuthActions.logout, (state) => ({
    ...state, email: undefined, accessToken: undefined, isLoggedIn: false, expirationDate: undefined
  }))
);
