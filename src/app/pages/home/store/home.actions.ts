import {createAction, props} from "@ngrx/store";
import {Folder} from "../core/interfaces";

export const saveFolder = createAction('[Home Page] Save Folder', props<{ folder: Folder }>());
export const saveFolderSuccess = createAction('[Home API] Save Folder Success', props<{ folder: Folder }>());
export const saveFolderFailure = createAction('[Home API] Save Folder Failure');

export const deleteFolder = createAction('[Home Page] Delete Folder', props<{ id: number}>());
export const deleteFolderSuccess = createAction('[Home API] Delete Folder Success');
export const deleteFolderFailure = createAction('[Home API] Delete Folder Failure');

export const updateFolder = createAction('[Home Page] Update Folder', props<{ id: number, updatedFolder: Partial<Folder>}>());
export const updateFolderSuccess = createAction('[Home API] Update Folder Success');
export const updateFolderFailure = createAction('[Home API] Update Folder Failure');

export const getFolders = createAction('[Home Page] Get Folders');
export const getFoldersSuccess = createAction('[Home API] Get Folders Success', props<{ folders: Folder[]}>());
export const getFoldersFailure = createAction('[Home API] Get Folders Failure');
