import {createReducer, on} from "@ngrx/store";
import * as AuthActions from './auth.actions';

export interface AuthState {
  email?: string;
  accessToken?: string;
}

export const featureKey = 'auth';

export const initialState: AuthState = {}

export const authReducer = createReducer(
  initialState,
  on(AuthActions.loginSuccess, (state, action) => ({
    ...state, accessToken: action.accessToken
  })),
  on(AuthActions.loginFailure, (state, action) => ({
    ...state, email: undefined, accessToken: undefined
  }))
);
