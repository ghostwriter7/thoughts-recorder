import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import * as fromRoot from '../../../core/store/app.reducer';
import {Folder} from "../core/interfaces";
import {selectFolders} from "../store/home.selectors";

@Component({
  selector: 'app-folder-list',
  templateUrl: './folder-list.component.html',
  styleUrls: ['./folder-list.component.scss']
})
export class FolderListComponent implements OnInit {
  public folders$!: Observable<Folder[]>;

  constructor(private store: Store<fromRoot.AppState>) { }

  ngOnInit(): void {
    this.folders$ = this.store.pipe(select(selectFolders));
  }

}
