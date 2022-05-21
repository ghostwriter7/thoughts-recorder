import {createReducer, on} from "@ngrx/store";
import {Folder} from "../core/interfaces";
import * as HomeActions from './home.actions';

export const featureKey = 'home';

export interface State {
  folders: Folder[],
  isLoaded: boolean,
  isLoading: boolean,
}

export const initialState: State = {
  folders: [],
  isLoaded: false,
  isLoading: false
}

export const reducer = createReducer(
  initialState,
  on(HomeActions.getFolders, (state, action) => ({ ...state, isLoaded: false, isLoading: true })),
  on(HomeActions.getFoldersSuccess, (state, action) => ({ ...state, folders: [...action.folders], isLoaded: true, isLoading: false})) ,
  on(HomeActions.getFoldersFailure, (state, action) => ({...state, isLoaded: true, isLoading: false})),
  on(HomeActions.saveFolderSuccess, (state, action) => ({
    ...state, folders: [...state.folders, { ...action.folder }]
  }))
);
