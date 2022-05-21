import {createFeatureSelector, createSelector} from "@ngrx/store";
import * as fromHome from './home.reducer';

export const selectHome = createFeatureSelector<fromHome.State>('home');
export const selectFolders = createSelector(
  selectHome,
  (state) => state.folders
);
