import {Component, Input, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import * as fromRoot from '../../core/store/app.reducer';
import * as AuthActions from '../../pages/auth/core/store/auth.actions';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  @Input() isLoggedIn$!: Observable<boolean>;
  public menuItems: { path: string, icon: string, label: string }[] = [
    { path: '/home', icon: 'home', label: 'home'},
    { path: '/home/folder', icon: 'folder', label: 'Add new folder'},
    { path: '/auth/signup', icon: 'abc', label: 'abc'},
  ];

  constructor(private store: Store<fromRoot.AppState>) {
  }

  public close(): void {
    this.sidenav.close();
  }

  public toggle(): void {
    this.sidenav.toggle();
  }

  public logout(): void {
    this.store.dispatch(AuthActions.logout());
  }

}
