import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {select, Store} from "@ngrx/store";
import {Observable, switchMap, tap} from "rxjs";
import {getAccessToken} from "../../pages/auth/core/store/auth.selectors";
import * as fromRoot from '../store/app.reducer';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private store: Store<fromRoot.AppState>) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (/signup|signin/.test(req.url)) {
      return next.handle(req);
    }

    return this.store.pipe(
      select(getAccessToken),
      switchMap((token) => {
        const copied = req.clone({ headers: req.headers.set('Authorization', `bearer ${token}`)});
        console.log(copied, 'copied');
        return next.handle(copied);
      })
    )
  }
}
