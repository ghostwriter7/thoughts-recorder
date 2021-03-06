import {createAction, props} from "@ngrx/store";

export const login = createAction('[Login Page] Login', props<{ email: string; password: string }>());
export const loginSuccess = createAction('[API] Login Success', props<{ accessToken: string, expirationDate: number }>());
export const loginFailure = createAction('[API] Login Failure', props<{ message: string}>());

export const signUp = createAction('[SignUp Page] SignUp', props<{ email: string, password: string }>());
export const signUpSuccess = createAction('[API] SignUp Success', props<{ email: string}>());
export const signUpFailure = createAction('[API] SignUp Failure', props<{ message: string}>());

export const logout = createAction('[Sidenav] Logout');
