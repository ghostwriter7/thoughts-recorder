import {Component, OnInit} from '@angular/core';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from "@angular/router";
import {select, Store} from "@ngrx/store";
import {filter, map, Observable} from "rxjs";
import * as fromRoot from './core/store/app.reducer';
import {isLoggedIn} from "./pages/auth/core/store/auth.selectors";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public loading$!: Observable<boolean>;
  public isLoggedIn$!: Observable<boolean>;
  constructor(
    private store: Store<fromRoot.AppState>,
    private router: Router) {
  }

  ngOnInit() {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedIn));

    this.loading$ = this.router.events.pipe(
      filter(event =>
        event instanceof NavigationStart ||
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError),
      map(event => event instanceof NavigationStart));
  }

}
