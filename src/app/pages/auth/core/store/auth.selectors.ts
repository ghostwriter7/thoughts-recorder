import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AuthState} from "./auth.reducer";

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const isLoggedIn = createSelector(
  selectAuthState,
  auth => auth.isLoggedIn
);

export const getAccessToken = createSelector(
  selectAuthState,
  auth => auth.accessToken
);


