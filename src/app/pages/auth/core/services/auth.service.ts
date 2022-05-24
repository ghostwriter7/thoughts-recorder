import { Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {environment} from "../../../../../environments/environment";
import * as fromRoot from '../../../../core/store/app.reducer';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.API_URL + '/api/auth/';

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
}
