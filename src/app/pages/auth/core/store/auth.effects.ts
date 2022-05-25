import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {AuthService} from "../services/auth.service";
import * as AuthActions from './auth.actions';
import {catchError, delay, map, of, switchMap, tap} from "rxjs";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable()
export class AuthEffects {
  login$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.login),
    switchMap(({email, password}) => this.authService.login(email, password).pipe(
      tap(() => this.router.navigateByUrl('/home')),
      map(({ accessToken }) => {
        const expirationDate = Date.now() + 60 * 60 * 1000;
        const user = JSON.stringify({ accessToken, expirationDate });
        localStorage.setItem('user', user);
        return AuthActions.loginSuccess({accessToken, expirationDate});
      }),
      delay(300),
      catchError(({error}) => of(AuthActions.loginFailure({ message: error.message })))
    ))
  ));

  signUp$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.signUp),
    switchMap(({email, password}) => this.authService.signUp(email, password).pipe(
      tap(() => this.router.navigateByUrl('/home')),
      map(({email}) => AuthActions.signUpSuccess({email})),
      catchError(({error}) => of(AuthActions.signUpFailure({ message: error.message })))
    ))
  ));

  logout$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.logout),
    tap(() => {
      localStorage.removeItem('user');
      this.authService.logout();
      this.router.navigateByUrl('/auth/login');
    })
 ), { dispatch: false});

  apiResponse$ = createEffect(() => this.actions$.pipe(
    ofType(
      AuthActions.loginSuccess,
      AuthActions.loginFailure,
      AuthActions.signUpSuccess,
      AuthActions.signUpFailure
    ),
    tap((action) => {
      if (action.type === AuthActions.loginSuccess.type) {
        this.authService.initAutoLogout();
      }
      const message = (action as any).message ?? `You've successfully logged in!`;
      const className = (action as any).message ? 'alert--error' : 'alert--success';
      this.snackBar.open(message, undefined, { duration: 1500, verticalPosition: 'top', horizontalPosition: 'right', panelClass: className });
    })
  ), { dispatch: false })

  constructor(private actions$: Actions,
              private authService: AuthService,
              private router: Router,
              private snackBar: MatSnackBar) {
  }
}
