import {AuthState} from "../../pages/auth/core/store/auth.reducer";
import * as fromAuth from '../../pages/auth/core/store/auth.reducer'
import {ActionReducerMap} from "@ngrx/store";

export interface AppState {
  auth: fromAuth.AuthState;
}

const initialState = {
  auth: fromAuth.initialState
};

export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer
};
