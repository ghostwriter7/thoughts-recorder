import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot} from "@angular/router";
import {select, Store} from "@ngrx/store";
import {delay, filter, map, Observable, of, switchMap, take, tap} from "rxjs";
import {selectHome} from "../../store/home.selectors";
import {Folder} from "../interfaces";
import * as fromRoot from '../../../../core/store/app.reducer';
import * as HomeActions from '../../store/home.actions';

@Injectable()
export class HomeGuard implements CanActivate {
  constructor(private store: Store<fromRoot.AppState>) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean> {
    return this.store.pipe(
      delay(0),
      select(selectHome),
      tap(state => {
        if (!state.isLoaded && !state.isLoading) {
          this.store.dispatch(HomeActions.getFolders());
        }
      }),
      filter(state => state.isLoaded),
      map(state => state.isLoaded),
      take(1)
    );
  }
}
