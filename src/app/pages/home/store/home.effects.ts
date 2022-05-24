import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, concatMap, map, of, switchMap} from "rxjs";
import {HomeService} from "../core/services/home.service";
import * as HomeActions from './home.actions';

@Injectable()
export class HomeEffects {
  saveFolder = createEffect(() => this.actions$.pipe(
    ofType(HomeActions.saveFolder),
    concatMap((action) => {
      return this.homeService.saveFolder(action.folder).pipe(
        map((folder) => HomeActions.saveFolderSuccess({folder})),
        catchError((error) => of(HomeActions.saveFolderFailure()))
      )
    })
  ));

  getFolders = createEffect(() => this.actions$.pipe(
    ofType(HomeActions.getFolders),
    switchMap(() => {
      return this.homeService.getFolders().pipe(
        map((folders) => HomeActions.getFoldersSuccess({folders})),
        catchError((error) => of(HomeActions.getFoldersFailure()))
      )
    })
  ));

  constructor(private actions$: Actions,
              private homeService: HomeService) {
  }
}
