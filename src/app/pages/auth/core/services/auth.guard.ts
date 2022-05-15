import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {filter, map, Observable, tap} from "rxjs";
import {Store} from "@ngrx/store";
import {selectAuthState} from "../store/auth.selectors";
import {AppState} from "../../../../core/store/app.reducer";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store: Store<AppState>,
              private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store.select(selectAuthState).pipe(
      filter(auth => !auth.isLoggingIn),
      map(auth => auth.isLoggedIn),
      tap(isLoggedIn => {
        if (!isLoggedIn) {
          this.router.navigateByUrl('/auth/login');
        }
      })
    );
  }
}
