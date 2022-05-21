import {createReducer, on} from "@ngrx/store";
import {Folder} from "../core/interfaces";
import * as HomeActions from './home.actions';

export const featureKey = 'home';

export interface State {
  folders: Folder[]
}

export const initialState: State = {
  folders: []
}

export const reducer = createReducer(
  initialState,
  on(HomeActions.saveFolder, (state, action) => ({
    ...state, folders: [...state.folders, { ...action.folder }]
  }))
);
