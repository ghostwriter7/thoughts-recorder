import { Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {select, Store} from "@ngrx/store";
import {Observable, take} from "rxjs";
import {environment} from "../../../../../environments/environment";
import * as fromRoot from '../../../../core/store/app.reducer';
import * as AuthActions from '../store/auth.actions';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.API_URL + '/api/auth/';
  private logoutTimer!: any;

  constructor(
    private store: Store<fromRoot.AppState>,
    private http: HttpClient) {
  }

  public login(email: string, password: string): Observable<any> {
    return this.http.post(this.baseUrl + 'signin', {email, password});
  }

  public signUp(email: string, password: string): Observable<any> {
    return this.http.post(this.baseUrl + 'signup', {email, password});
  }

  public logout(): void {
    clearTimeout(this.logoutTimer)
  }

  public initAutoLogout(): void {
    this.logoutTimer = setTimeout(() => {
      this.store.dispatch(AuthActions.logout());
    }, 60 * 60 * 1000);
  }
}
