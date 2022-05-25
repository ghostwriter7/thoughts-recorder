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

  public initAutoLogout(expiresIn = 60 * 60 * 1000): void {
    this.logoutTimer = setTimeout(() => {
      this.store.dispatch(AuthActions.logout());
    }, expiresIn);
  }

  public attemptAutoLogin(): void {
    let user: any = localStorage.getItem('user');
    if (user) {
      user = JSON.parse(user) as { expirationDate: number; accessToken: string };
      const now = Date.now();
      const expirationDate = user.expirationDate;
      if (now < expirationDate) {
        const expiresIn = expirationDate - now;
        this.store.dispatch(AuthActions.loginSuccess({ accessToken: user.accessToken, expirationDate }));
        this.initAutoLogout(expiresIn);
      } else {
        localStorage.removeItem('user');
      }
    }
  }
}
