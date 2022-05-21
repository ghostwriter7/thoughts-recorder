import {RouterModule, Routes} from "@angular/router";
import {FolderDetailsComponent} from "./folder-details/folder-details.component";
import {FolderListComponent} from "./folder-list/folder-list.component";
import {HomeComponent} from "./home/home.component";
import {NgModule} from "@angular/core";
import {AddEditFolderComponent} from "./add-edit-folder/add-edit-folder.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'folder', component: AddEditFolderComponent },
  { path: 'folder/:id', component: AddEditFolderComponent },
  { path: ':id', component: FolderDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
